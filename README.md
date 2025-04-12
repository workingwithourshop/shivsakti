# Web Development Stack Updates & Best Practices (Next.js Ecosystem)

This document outlines recent changes, recommended practices, and integration patterns for key technologies used with Next.js.

## 1. Next.js (v14 to v15)

Next.js 15 introduces several significant changes and features focused on performance, developer experience, and alignment with React 19.

**Key Changes & Features:**

- **React 19 Integration:**
  - Next.js 15 aligns with React 19 (RC). App Router uses React 19 RC by default.
  - Pages Router maintains backward compatibility with React 18 for smoother upgrades.
  - Introduces support for React 19 features like `useActionState` (replacing `useFormState`) and enhanced `useFormStatus`.
  - **Experimental:** Support for the React Compiler (via Babel plugin) for automatic memoization.
- **Caching Changes (Breaking):**
  - `fetch` requests, `GET` Route Handlers, and client-side navigations are **no longer cached by default**. This aims to simplify the caching model. You need to explicitly opt-in to caching where needed.
- **New APIs & Features:**
  - `@next/codemod CLI`: Automated tool to help upgrade Next.js and React versions (`npx @next/codemod@canary upgrade latest`).
  - `unstable_after` (Experimental): API to execute code after a response finishes streaming.
  - `instrumentation.js` (Stable): New API for server lifecycle observability (e.g., integrating with OpenTelemetry).
  - `next/form` (Experimental): Enhancements for HTML forms with client-side navigation capabilities.
  - `next.config.ts`: Native TypeScript support for configuration files.
  - Static Indicator: Visual indicator in development mode for statically rendered routes.
- **Build & Dev Improvements:**
  - Turbopack for `next dev` is now stable, offering performance improvements.
  - Faster Fast Refresh and improved build times.
  - ESLint 9 support (with backward compatibility for ESLint 8).
- **Other Breaking Changes:**
  - **Async Request APIs:** `cookies()`, `headers()`, and `draftMode()` are now asynchronous in many contexts (Layouts, Pages, Route Handlers). Synchronous usage might be temporarily available but discouraged. Check the migration guide for specifics.
  - `runtimeConfig` option is removed.
  - Changes to `serverExternalPackages` and `bundlePagesRouterDependencies`.
- **Self-Hosting:**
  - More control over `Cache-Control` headers (e.g., configurable `stale-while-revalidate` expire time).
  - `sharp` is now automatically used for image optimization with `next start` or standalone output (manual installation no longer required).

**Resources:**

- [Next.js 15 Blog Post](https://nextjs.org/blog/next-15)
- [Next.js 15 Upgrade Guide](https://nextjs.org/docs/app/building-your-application/upgrading/version-15)

## 2. Clerk (Authentication)

Clerk provides authentication and user management for Next.js. The `@clerk/nextjs` package offers seamless integration. Version 6 adds support for Next.js 15 and is backward compatible with v14.

**Setup (App Router):**

1.  **Installation:**
    ```bash
    npm install @clerk/nextjs
    # or yarn add @clerk/nextjs
    # or pnpm add @clerk/nextjs
    # or bun add @clerk/nextjs
    ```
2.  **Environment Variables:** Set your Clerk API keys in `.env.local`:

    ```env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_*****************
    CLERK_SECRET_KEY=sk_*****************

    # Optional: Specify frontend/backend API URLs if needed
    # NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    # NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    # NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    # NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
    ```

3.  **Middleware:** Protect routes by creating `middleware.ts` in your project root (or `src/`):

    ```typescript
    // middleware.ts
    import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

    // Example: Protect all routes except for public ones
    const isPublicRoute = createRouteMatcher([
      "/sign-in(.*)",
      "/sign-up(.*)",
      "/api/webhooks(.*)",
    ]);

    export default clerkMiddleware((auth, request) => {
      if (!isPublicRoute(request)) {
        auth().protect();
      }
    });

    export const config = {
      matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
    };
    ```

4.  **Provider:** Wrap your root layout (`app/layout.tsx`) with `<ClerkProvider>`:

    ```typescript
    // app/layout.tsx
    import { ClerkProvider } from "@clerk/nextjs";
    import "./globals.css"; // Your global styles

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <ClerkProvider>
          <html lang='en'>
            <body>{children}</body>
          </html>
        </ClerkProvider>
      );
    }
    ```

5.  **UI Components:** Use Clerk's pre-built components for sign-in, sign-up, user profile management, etc.

    ```typescript
    import {
      SignInButton,
      SignUpButton,
      SignedIn,
      SignedOut,
      UserButton,
    } from "@clerk/nextjs";

    function Header() {
      return (
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <h1>My App</h1>
          <div>
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
      );
    }
    ```

**Key Imports:**

- `@clerk/nextjs`: Main package for components like `<ClerkProvider>`, `<SignInButton>`, `<UserButton>`, `<SignedIn>`, `<SignedOut>`.
- `@clerk/nextjs/server`: For server-side utilities like `clerkMiddleware`, `auth()`, `currentUser()`.

**Resources:**

- [Clerk Next.js Quickstart (App Router)](https://clerk.com/docs/quickstarts/nextjs)
- [`@clerk/nextjs` Changelog (v6 for Next.js 15)](https://clerk.com/changelog/2024-10-22-clerk-nextjs-v6)
- [NPM: @clerk/nextjs](https://www.npmjs.com/package/@clerk/nextjs)

## 3. Next-Cloudinary (Image & Video Management)

`next-cloudinary` simplifies using Cloudinary for image/video optimization, transformation, and uploading within Next.js.

**Setup:**

1.  **Installation:**
    ```bash
    npm install next-cloudinary
    # or yarn add next-cloudinary
    # or pnpm add next-cloudinary
    # or bun add next-cloudinary
    ```
2.  **Environment Variables:** Add your Cloudinary Cloud Name to `.env.local`:
    ```env
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your_Cloud_Name>"
    # For uploads, you might also need API Key & Secret (handled server-side)
    # CLOUDINARY_API_KEY="***********"
    # CLOUDINARY_API_SECRET="***********"
    ```
3.  **(Optional) `next.config.js` for Upload Preset:** If using the Upload Widget with unsigned uploads, configure your upload preset in Cloudinary and add it to `env`:
    ```env
    NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET="<Your_Upload_Preset>"
    ```
4.  **(Optional) `next.config.js` for standard `next/image`:** If you intend to use the standard `next/image` component _without_ the `next-cloudinary` loader or components, add Cloudinary to allowed domains:
    ```javascript
    // next.config.js
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "res.cloudinary.com",
            port: "",
            pathname: `/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/**`, // More specific path
          },
        ],
        // Deprecated 'domains' approach:
        // domains: ['res.cloudinary.com'],
      },
    };
    module.exports = nextConfig;
    ```
    _Note: Using `next-cloudinary` components like `CldImage` is generally recommended as it handles loader configuration automatically._

**Usage:**

- **Displaying Images (`CldImage`):** Wraps `next/image` and provides Cloudinary transformations.

  ```typescript
  import { CldImage } from "next-cloudinary";

  function MyImage() {
    return (
      <CldImage
        width='960' // Required: Specify base dimensions
        height='600' // Required: Specify base dimensions
        src='<public_id_of_your_image>' // e.g., "samples/cloudinary-icon"
        alt='Description of my image'
        // Example transformations
        crop='fill'
        gravity='auto'
        // Automatically handles responsive sizing and format optimization
      />
    );
  }
  ```

- **Upload Widget (`CldUploadButton`, `CldUploadWidget`):** Provides a button or component to trigger the Cloudinary Upload Widget. Often used in client components (`"use client"`).

  ```typescript
  "use client"; // Needs to be a client component

  import { CldUploadButton } from "next-cloudinary";

  function Uploader() {
    return (
      <CldUploadButton
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET} // Use preset for unsigned uploads
        onSuccess={(result) => {
          // Handle successful upload (e.g., save result.info.public_id)
          console.log("Upload successful:", result);
        }}
        onError={(error) => {
          console.error("Upload failed:", error);
        }}
      >
        Upload Image
      </CldUploadButton>
    );
  }
  ```

**Key Imports:**

- `next-cloudinary`: Provides components like `CldImage`, `CldOgImage`, `CldUploadButton`, `CldUploadWidget`.

**Resources:**

- [Next Cloudinary Documentation](https://next-cloudinary.spacejelly.dev/)
- [Integrating Cloudinary with Next.js Guide](https://cloudinary.com/guides/front-end-development/integrating-cloudinary-with-next-js)
- [NPM: next-cloudinary](https://www.npmjs.com/package/next-cloudinary)

## 4. TanStack Query (React Query) (Data Fetching & State Management)

TanStack Query (formerly React Query) is a popular library for fetching, caching, synchronizing, and updating server state in React applications, including Next.js. Version 5 is the latest major release.

**Setup:**

1.  **Installation:**

    ```bash
    npm install @tanstack/react-query
    # or yarn add @tanstack/react-query
    # or pnpm add @tanstack/react-query
    # or bun add @tanstack/react-query

    # Optional, but recommended: Devtools
    npm install @tanstack/react-query-devtools
    ```

2.  **Provider Setup:** Create a client-side provider component to wrap your application and provide the `QueryClient`.

    ```typescript
    // app/providers.tsx (or similar client component)
    "use client";

    import React from "react";
    import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
    import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

    export function Providers({ children }: { children: React.ReactNode }) {
      // Use state to ensure QueryClient is only created once per component instance
      const [queryClient] = React.useState(
        () =>
          new QueryClient({
            defaultOptions: {
              queries: {
                // Default options for queries (e.g., staleTime)
                staleTime: 5 * 60 * 1000, // 5 minutes
              },
            },
          })
      );

      return (
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      );
    }
    ```

3.  **Apply Provider in Root Layout:** Import and use the `Providers` component in `app/layout.tsx`.

    ```typescript
    // app/layout.tsx
    import { Providers } from "./providers"; // Adjust path as needed

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang='en'>
          <body>
            <Providers>{children}</Providers>
          </body>
        </html>
      );
    }
    ```

**Usage:**

- **Fetching Data (`useQuery`):** Used in client components to fetch and cache data.

  ```typescript
  // components/MyDataComponent.tsx
  "use client";

  import { useQuery } from "@tanstack/react-query";

  async function fetchData() {
    const res = await fetch("/api/my-data"); // Your API endpoint
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  }

  function MyDataComponent() {
    // queryKey uniquely identifies the data
    // queryFn is the async function to fetch data
    const { data, error, isLoading, isFetching } = useQuery({
      queryKey: ["myData"],
      queryFn: fetchData,
    });

    if (isLoading) return <div>Loading initial data...</div>;
    if (error) return <div>An error occurred: {error.message}</div>;
    // isFetching is true during background refetches

    return (
      <div>
        {isFetching && <span> (Refreshing...)</span>}
        {/* Render your data */}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
  export default MyDataComponent;
  ```

- **Mutations (`useMutation`):** Used for creating, updating, or deleting data.

  ```typescript
  // components/AddItemForm.tsx
  "use client";

  import { useMutation, useQueryClient } from "@tanstack/react-query";
  import React from "react";

  async function postItem(newItem: { name: string }) {
    const res = await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });
    if (!res.ok) {
      throw new Error("Failed to add item");
    }
    return res.json();
  }

  function AddItemForm() {
    const queryClient = useQueryClient();
    const [itemName, setItemName] = React.useState("");

    const mutation = useMutation({
      mutationFn: postItem,
      onSuccess: () => {
        // Invalidate and refetch the relevant query after success
        queryClient.invalidateQueries({ queryKey: ["itemsList"] }); // Example query key
        setItemName(""); // Clear input
        console.log("Item added successfully!");
      },
      onError: (error) => {
        console.error("Failed to add item:", error.message);
      },
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      mutation.mutate({ name: itemName });
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          disabled={mutation.isPending}
          placeholder='New item name'
        />
        <button
          type='submit'
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Adding..." : "Add Item"}
        </button>
        {mutation.isError && <p>Error: {mutation.error.message}</p>}
      </form>
    );
  }
  export default AddItemForm;
  ```

- **Server-Side Rendering (SSR) / Hydration:** TanStack Query supports prefetching data on the server (e.g., in Server Components or Route Handlers) and passing it to the client for hydration. This avoids client-side loading spinners on initial page load. It typically involves `prefetchQuery` on the server and passing dehydrated state via `<HydrationBoundary>`. Refer to the official docs for detailed patterns as it can be complex.

**Key Imports:**

- `@tanstack/react-query`: Provides core hooks (`useQuery`, `useMutation`, `useQueryClient`, `QueryClient`, `QueryClientProvider`) and utilities.
- `@tanstack/react-query-devtools`: Provides the `<ReactQueryDevtools />` component.

**Resources:**

- [TanStack Query v5 Docs](https://tanstack.com/query/latest/docs/react/overview)
- [TanStack Query Next.js 14+ App Router Guide](https://tanstack.com/query/latest/docs/framework/react/guides/nextjs-app-router)
- [TkDodo's Blog (Excellent TanStack Query resource)](https://tkdodo.eu/blog/)

## 5. MongoDB (Database)

MongoDB is a popular NoSQL document database often used with Node.js applications like Next.js. Efficient connection management is crucial, especially in serverless environments.

**Best Practices & Patterns:**

1.  **Connection Utility:** Create a utility file (e.g., `lib/mongodb.ts` or `utils/dbConnect.ts`) to manage the MongoDB connection. The key is to cache the connection promise globally in development to prevent multiple connections during hot reloads and establish connections as needed in production.

    ```typescript
    // lib/mongodb.ts (Example using native MongoDB Driver)
    import { MongoClient } from "mongodb";

    if (!process.env.MONGODB_URI) {
      throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
    }

    const uri = process.env.MONGODB_URI;
    const options = {};

    let client: MongoClient;
    let clientPromise: Promise<MongoClient>;

    // Extend the NodeJS global type to include the _mongoClientPromise property
    declare global {
      namespace NodeJS {
        interface Global {
          _mongoClientPromise?: Promise<MongoClient>;
        }
      }
    }

    if (process.env.NODE_ENV === "development") {
      // In development mode, use a global variable so that the value
      // is preserved across module reloads caused by HMR (Hot Module Replacement).
      let globalWithMongo = global as typeof globalThis & {
        _mongoClientPromise?: Promise<MongoClient>;
      };

      if (!globalWithMongo._mongoClientPromise) {
        client = new MongoClient(uri, options);
        globalWithMongo._mongoClientPromise = client.connect();
      }
      clientPromise = globalWithMongo._mongoClientPromise;
    } else {
      // In production mode, it's best to not use a global variable.
      client = new MongoClient(uri, options);
      clientPromise = client.connect();
    }

    // Export a module-scoped MongoClient promise. By doing this in a
    // separate module, the client can be shared across functions.
    export default clientPromise;
    ```

    _(This pattern helps reuse connections efficiently, especially in serverless functions where new instances might spin up.)_

2.  **Environment Variables:** Store your MongoDB connection string securely in `.env.local`.

    ```env
    MONGODB_URI="mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority"
    DATABASE_NAME="your_db_name" // Optional: If you want to specify db name via env
    ```

3.  **Usage in API Routes / Server Components:** Import the `clientPromise` and use it to interact with your database.

    ```typescript
    // app/api/items/route.ts (Example API Route)
    import { NextResponse } from "next/server";
    import clientPromise from "@/lib/mongodb"; // Adjust path

    export async function GET() {
      try {
        const client = await clientPromise;
        const db = client.db(process.env.DATABASE_NAME || "your_db_name"); // Use env var or default

        const items = await db
          .collection("items") // Your collection name
          .find({})
          .sort({ name: 1 })
          .limit(20)
          .toArray();

        return NextResponse.json(items);
      } catch (e) {
        console.error(e);
        // Ensure error is serializable for NextResponse
        const errorMessage =
          e instanceof Error ? e.message : "An unknown error occurred";
        return NextResponse.json(
          { error: "Failed to fetch items", details: errorMessage },
          { status: 500 }
        );
      }
    }

    // Example POST
    export async function POST(request: Request) {
      try {
        const client = await clientPromise;
        const db = client.db(process.env.DATABASE_NAME || "your_db_name");
        const body = await request.json(); // Parse request body

        // Add validation here (e.g., using Zod)

        const result = await db.collection("items").insertOne(body);

        return NextResponse.json(
          { message: "Item added", insertedId: result.insertedId },
          { status: 201 }
        );
      } catch (e) {
        console.error(e);
        const errorMessage =
          e instanceof Error ? e.message : "An unknown error occurred";
        return NextResponse.json(
          { error: "Failed to add item", details: errorMessage },
          { status: 500 }
        );
      }
    }
    ```

4.  **Mongoose (Optional ODM):** If you prefer an Object Data Mapper (ODM), Mongoose is a popular choice. The connection caching pattern should still be applied to the `mongoose.connect()` call.

    ```typescript
    // lib/mongooseConnect.ts (Example Mongoose Connection Utility)
    import mongoose from "mongoose";

    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
      );
    }

    // Extend the NodeJS global type
    declare global {
      namespace NodeJS {
        interface Global {
          mongoose?: {
            conn: typeof mongoose | null;
            promise: Promise<typeof mongoose> | null;
          };
        }
      }
    }

    let cached = global.mongoose;

    if (!cached) {
      cached = global.mongoose = { conn: null, promise: null };
    }

    async function dbConnect() {
      if (cached.conn) {
        return cached.conn;
      }

      if (!cached.promise) {
        const opts = {
          bufferCommands: false, // Disable mongoose buffering (recommended)
        };

        cached.promise = mongoose
          .connect(MONGODB_URI!, opts)
          .then((mongooseInstance) => {
            return mongooseInstance;
          });
      }

      try {
        cached.conn = await cached.promise;
      } catch (e) {
        cached.promise = null; // Reset promise on error
        throw e;
      }

      return cached.conn;
    }

    export default dbConnect;
    ```

    _Remember to define Mongoose models separately._

**Resources:**

- [MongoDB Developer Center: Integrate MongoDB Into Your Next.js App](https://www.mongodb.com/developer/languages/javascript/nextjs-with-mongodb/) (Note: Uses Pages Router primarily, but connection pattern is relevant)
- [Vercel: Using MongoDB with Next.js](https://vercel.com/guides/using-mongodb-with-vercel)
- [Medium: Setting Up MongoDB with Mongoose and NextJS 13 (The Correct Way)](https://medium.com/@aniruddh622003/setting-up-mongodb-with-mongoose-and-nextjs-13-3a598609c5d1) (Explains connection caching)
