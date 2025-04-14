"use client";

import React from "react";
import { BackgroundImage } from "@/components/ui/background-image";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  showBackgroundImage?: boolean;
  className?: string;
}

export default function PageLayout({
  children,
  title,
  description,
  showBackgroundImage = true,
  className = "",
}: PageLayoutProps) {
  return (
    <div className={`w-full min-h-[70vh] relative ${className}`}>
      {showBackgroundImage && (
        <div className="w-full lg:w-1/2 absolute top-0 right-0 bottom-0 z-0 hidden lg:block">
          <BackgroundImage 
            src="/images/worker.jpg" 
            alt="Industrial workers"
            className="h-full w-full rounded-l-3xl shadow-xl"
            overlayOpacity={0.3}
            blurAmount={0}
            glassmorphic={false}
            framed={false}
          />
        </div>
      )}
      
      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        {(title || description) && (
          <div className="max-w-2xl mb-12">
            {title && (
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {description}
              </p>
            )}
          </div>
        )}
        
        {children}
      </div>
    </div>
  );
} 