import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] md:h-[750px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/worker.jpg"
            alt="SHIVSHAKTI Worker"
            fill
            className="object-cover sm:object-fill object-[75%_center] brightness-[0.85]"
            priority
            quality={100}
          />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 md:px-16 bg-gradient-to-r from-black/60 via-black/25 to-transparent">
          <div className="max-w-[600px]">
            <h1 className="mb-4 text-2xl sm:text-3xl md:text-[3.5rem] font-bold leading-[1.1] text-white">
              Reliable Manpower for Your Industrial Needs
            </h1>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg text-white/95">
              Specialized in supplying skilled and unskilled labor to motor and manufacturing industries across india.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="bg-[#F15A2B] hover:bg-[#d94d22] text-white rounded px-6 sm:px-8 py-5 sm:py-6 text-base font-medium w-full sm:w-auto"
              >
                Request Manpower
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-black hover:bg-white/95 rounded px-6 sm:px-8 py-5 sm:py-6 text-base font-medium border-0 w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-8 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold text-[#1B1B1B]">Powering Factories with Quality Workforce</h2>
          <p className="text-base sm:text-lg text-gray-700">
            SHIVSHAKTI is a leading manpower provider for factories and industrial units. From motor assembly lines to packaging units, we ensure the right people
          </p>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-8 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-[#1B1B1B]">Industries We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg className="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 64 64" fill="none">
                  <path d="M8 8h48v48H8z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 24h8v24h-8zM32 16h8v32h-8zM48 32h8v16h-8z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-center">Motors & Pumps Industry</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg className="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 64 64" fill="none">
                  <path d="M32 8L8 20v24l24 12 24-12V20L32 8z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M32 32l-12-6v12l12 6 12-6V26l-12 6z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-center">Mechanical Manufacturing</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg className="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 64 64" fill="none">
                  <path d="M16 16h32v32H16z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M24 24h16v16H24z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-center">Packaging & Assembly</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg className="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 64 64" fill="none">
                  <path d="M16 32l16-16 16 16-16 16z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M28 28h8v8h-8z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-center">Maintenance Services</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us + Testimonial */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-8 md:px-12">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-[#1B1B1B]">Why Choose SHIVSHAKTI</h2>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#F15A2B]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-base sm:text-lg">Verified Skilled Workers</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#F15A2B]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-base sm:text-lg">Quick Response & Deployment</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#F15A2B]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-base sm:text-lg">Contract & Temporary Staffing</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#F15A2B]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-base sm:text-lg">Competitive Pricing</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#F15A2B]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-base sm:text-lg">Pan-India Network</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Great service!</h2>
              <p className="text-base sm:text-lg mb-3 sm:mb-4">Workers were skilled and punctual.</p>
              <p className="text-gray-600">&mdash;HR Head, Reliable Pumps Co.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-8 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold text-[#1B1B1B]">Need Manpower? Let&apos;s Connect.</h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button size="lg" className="bg-[#F15A2B] hover:bg-[#d94d22] text-white rounded-md px-6 w-full sm:w-auto">
              Get a Quote
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-[#1B1B1B] text-[#1B1B1B] hover:bg-[#1B1B1B] hover:text-white rounded-md px-6 w-full sm:w-auto">
              Call Now
            </Button>
          </div>
    </div>
      </section>
    </main>
  )
}
