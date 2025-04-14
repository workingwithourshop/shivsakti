"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface BackgroundImageProps {
  src: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
  overlayOpacity?: number;
  blurAmount?: number;
  rounded?: boolean;
  glassmorphic?: boolean;
  framed?: boolean;
  frameWidth?: string;
  frameHeight?: string;
  framePosition?: 'left' | 'right' | 'center';
}

export function BackgroundImage({
  src,
  alt = "Background image",
  className,
  children,
  overlayOpacity = 0.5,
  blurAmount = 4,
  rounded = true,
  glassmorphic = true,
  framed = true,
  frameWidth = "90%",
  frameHeight = "90%",
  framePosition = "center",
}: BackgroundImageProps) {
  const frameStyles = framed ? {
    width: frameWidth,
    height: frameHeight,
    margin: framePosition === "center" ? "auto" : undefined,
    marginLeft: framePosition === "right" ? "auto" : undefined,
    marginRight: framePosition === "left" ? "auto" : undefined,
  } : {};

  return (
    <div className={cn(
      "relative w-full h-full overflow-hidden",
      rounded && "rounded-xl",
      className
    )} style={{ ...frameStyles }}>
      {/* Background image with blur */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ 
          backgroundImage: `url(${src})`,
          filter: `blur(${blurAmount}px)`,
        }}
        aria-label={alt}
        aria-hidden="true"
      />
      
      {/* Dark overlay for contrast */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
        aria-hidden="true"
      />
      
      {/* Glassmorphic effect */}
      {glassmorphic && (
        <div
          className="absolute inset-0 w-full h-full backdrop-blur-sm bg-white/10 dark:bg-black/10"
          aria-hidden="true"
        />
      )}
      
      {/* Content container with proper positioning */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}

export function GlassmorphicCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn(
      "backdrop-blur-md bg-white/20 dark:bg-black/20 rounded-xl p-6 shadow-lg border border-white/20 dark:border-white/10",
      className
    )}>
      {children}
    </div>
  );
} 