import { NextRequest, NextResponse } from "next/server";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText } from "ai";
import { sendEmail } from "@/lib/utils/Mailer/Mailer";

export async function POST(request: NextRequest) {
  const { prompt } = await request.json();

  if (!prompt) {
    return NextResponse.json(
      { error: "Missing prompt in request body" },
      { status: 400 }
    );
  }

  const googleApiKey = process.env.GOOGLE_AI_KEY;
  if (!googleApiKey) {
    return NextResponse.json(
      { error: "Google AI API key not found" },
      { status: 500 }
    );
  }

  try {
    const google = createGoogleGenerativeAI({
      apiKey: process.env.GOOGLE_AI_KEY,
    });

    const model = google("gemini-1.5-pro-latest", {
      safetySettings: [
        {
          category: "HARM_CATEGORY_UNSPECIFIED",
          threshold: "BLOCK_LOW_AND_ABOVE",
        },
      ],
    });
    sendEmail("shivsakti@gmail.com", "Testing AI Mail route:", prompt);
    const promptTemplate = `Expert Copywriter Email Reply Generation

        Generate a direct, professional email response to the following inquiry:

        Details: ${prompt}

        IMPORTANT INSTRUCTIONS:
        - Provide ONLY the main message content without any formatting or HTML tags
        - Start with proper greeting.
        - DO NOT include any sign-offs (like "Regards", "Thanks", "Sincerely")
        - DO NOT include any signatures or contact information
        - DO NOT include any date, reference numbers, or subject lines
        - Start immediately with the relevant information or response
        - Keep the tone warm, professional, and conversational
        - Address the specific question or concern directly and thoroughly
        - Be concise but comprehensive (aim for 3-5 paragraphs maximum)
        - Use natural language that sounds human, not robotic
        - Avoid generic responses; be specific to the inquiry
        - Include specific details from the prompt when appropriate
        
        CONTEXT:
        This content will be inserted into an email template that already contains:
        - A greeting: "Hi {username},"
        - An introduction: "Thank you for reaching out to us. We truly value your message and appreciate your efforts."
        - A signature: "Warm regards, Shivsakti"
        
        Your response will be placed between the introduction and signature, so it should flow naturally from the introduction.
        
        EXAMPLES:
        
        INCORRECT FORMAT:
        "Dear Customer, Thank you for your inquiry about our services. we offer workforce for your industry. Skilled workers are available for your industry. Please let me know if you need more information. "
        
        CORRECT FORMAT:
        "We offer workforce for your industry. Skilled workers are available for your industry. Please let me know if you need more information.
        Regards,
        Shivsakti
        `;

    const result = streamText({
      model: model,
      prompt: promptTemplate,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error generating email reply:", error);
    sendEmail("", "Error generating email reply", "Error generating email reply");
    return NextResponse.json(
      { error: "Failed to generate email reply" },
      { status: 500 }
    );
  }
}
