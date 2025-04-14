"use client"; // This component must be a Client Component

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Optional: Import React Query DevTools
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create a react-query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Default options for all queries
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false, // Optional: disable refetch on window focus
    },
  },
});

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      {children}
      {/* Optional: Add React Query DevTools for debugging */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}
