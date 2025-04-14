"use client";

import { BackgroundImage, GlassmorphicCard } from "@/components/ui/background-image";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[70vh] flex items-center justify-center py-20">
      <div className="container px-4 mx-auto relative">
        <BackgroundImage 
          src="/images/worker.jpg" 
          alt="Industrial workers"
          className="min-h-[60vh] rounded-2xl"
          overlayOpacity={0.6}
          blurAmount={2}
          framed={true}
          frameWidth="95%"
          frameHeight="100%"
        >
          <div className="flex flex-col md:flex-row items-center h-full p-4 md:p-12">
            <div className="md:w-1/2 text-center md:text-left z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Professional Manpower Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
                Specialized in supplying skilled and unskilled labor to motor and manufacturing industries across India.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a 
                  href="/services" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
                >
                  Our Services
                </a>
                <a 
                  href="/contact" 
                  className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0">
              <GlassmorphicCard className="w-full max-w-md p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-400">✓</span>
                    <span>Experienced &amp; qualified workforce</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-400">✓</span>
                    <span>Timely deployment of resources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-400">✓</span>
                    <span>Compliance with all labor laws</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-400">✓</span>
                    <span>Flexible staffing solutions</span>
                  </li>
                </ul>
              </GlassmorphicCard>
            </div>
          </div>
        </BackgroundImage>
      </div>
    </section>
  );
} 