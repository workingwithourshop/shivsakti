"use client";

import { BackgroundImage, GlassmorphicCard } from "@/components/ui/background-image";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[80vh] flex items-center py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Split layout container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left side content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Manpower Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Specialized in supplying skilled and unskilled labor to motor and manufacturing industries across India.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="/services" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
              >
                Our Services
              </a>
              <a 
                href="/contact" 
                className="bg-transparent border-2 border-gray-800 dark:border-white hover:bg-gray-100 dark:hover:bg-white/10 text-gray-800 dark:text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
              >
                Get in Touch
              </a>
            </div>
            
            {/* Feature list */}
            <div className="mt-10 grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-start">
                <span className="mr-2 text-orange-500 font-bold">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Experienced workforce</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-orange-500 font-bold">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Timely deployment</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-orange-500 font-bold">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Labor law compliance</span>
              </div>
              <div className="flex items-start">
                <span className="mr-2 text-orange-500 font-bold">✓</span>
                <span className="text-gray-700 dark:text-gray-300">Flexible solutions</span>
              </div>
            </div>
          </div>
          
          {/* Right side image panel */}
          <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[600px] relative">
            <BackgroundImage 
              src="/images/worker.jpg" 
              alt="Industrial workers"
              className="h-full w-full rounded-3xl shadow-xl"
              overlayOpacity={0.3}
              blurAmount={0}
              glassmorphic={false}
              framed={false}
            >
              {/* Floating card on the image */}
              <div className="absolute bottom-8 left-8 right-8">
                <GlassmorphicCard className="p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">Ready to hire?</h3>
                      <p className="text-white/80 text-sm mt-1">Quick response time guaranteed</p>
                    </div>
                    <a 
                      href="/contact" 
                      className="mt-4 sm:mt-0 bg-white text-orange-600 hover:bg-orange-100 px-6 py-2 rounded-full font-medium text-center transition-colors duration-200"
                    >
                      Contact Us
                    </a>
                  </div>
                </GlassmorphicCard>
              </div>
            </BackgroundImage>
          </div>
        </div>
      </div>
    </section>
  );
} 