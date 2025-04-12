import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

// Configure Cloudinary using environment variables
// Make sure CLOUDINARY_URL or individual CLOUDINARY_CLOUD_NAME, API_KEY, API_SECRET are set
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true, // Use https
});

// Helper function to stream file buffer to Cloudinary
async function uploadStream(buffer: Buffer, options: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(options, (error, result) => {
            if (result) {
                resolve(result);
            } else {
                reject(error || new Error('Cloudinary upload failed'));
            }
        });
        Readable.from(buffer).pipe(stream);
    });
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Convert file to buffer
    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // Determine resource type based on MIME type
    let resourceType: 'image' | 'video' | 'raw' | 'auto' = 'auto';
    if (file.type.startsWith('image/')) {
      resourceType = 'image';
    } else if (file.type.startsWith('video/')) {
      resourceType = 'video';
    } else if (file.type === 'application/pdf') {
        resourceType = 'raw'; // Use 'raw' for PDFs and other non-media files
    }
    // Add more specific types if needed, otherwise 'auto' works well

    // Optional: Specify a folder in Cloudinary
    const folder = 'project_money_uploads'; // Change as needed

    // Upload the file buffer to Cloudinary
    const result = await uploadStream(fileBuffer, {
        folder: folder,
        resource_type: resourceType,
        public_id: file.name
        // You can add more Cloudinary upload options here
        // e.g., public_id: 'custom_file_name', tags: ['invoice', 'user_xyz']
    });

    // Return the Cloudinary response (includes public_id, url, secure_url, etc.)
    return NextResponse.json({
        message: 'File uploaded successfully',
        ...result
    }, { status: 201 });

  } catch (error: unknown) {
    console.error('Upload API error:', error);
     const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred during upload';
    return NextResponse.json({ error: 'Failed to upload file', details: errorMessage }, { status: 500 });
  }
}