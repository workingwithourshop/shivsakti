import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[750px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/worker.jpg"
            alt="SHIVSHAKTI Worker"
            fill
            className="object-fill object-[75%_center] brightness-[0.85]"
            priority
            quality={100}
          />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center px-16 bg-gradient-to-r from-black/60 via-black/25 to-transparent">
          <div className="max-w-[600px]">
            <h1 className="mb-4 text-[3.5rem] font-bold leading-[1.1] text-white">
              Reliable Manpower for Your Industrial Needs
            </h1>
            <p className="mb-8 text-lg text-white/95">
              Specialized in supplying skilled and unskilled labor to motor and manufacturing industries across india.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-[#F15A2B] hover:bg-[#d94d22] text-white rounded px-8 py-6 text-base font-medium"
              >
                Request Manpower
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-black hover:bg-white/95 rounded px-8 py-6 text-base font-medium border-0"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-12 px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl font-bold text-[#1B1B1B]">Powering Factories with Quality Workforce</h2>
          <p className="text-lg text-gray-700">
            SHIVSHAKTI is a leading manpower provider for factories and industrial units. From motor assembly lines to packaging units, we ensure the right people
          </p>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-12 px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold text-[#1B1B1B]">Industries We Serve</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                  <path d="M8 8h48v48H8z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 24h8v24h-8zM32 16h8v32h-8zM48 32h8v16h-8z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Motors & Pumps Industry</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                  <path d="M32 8L8 20v24l24 12 24-12V20L32 8z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M32 32l-12-6v12l12 6 12-6V26l-12 6z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Mechanical Manufacturing</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                  <path d="M16 16h32v32H16z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M24 24h16v16H24z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Packaging & Assembly</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                  <path d="M16 32l16-16 16 16-16 16z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M28 28h8v8h-8z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Maintenance Services</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us + Testimonial */}
      <section className="py-12 px-12">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="mb-8 text-3xl font-bold text-[#1B1B1B]">Why Choose SHIVSHAKTI</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <svg className="w-6 h-6 text-[#F15A2B]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-lg">Verified Skilled Workers</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-6 h-6 text-[#F15A2B]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-lg">Quick Response & Deployment</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-6 h-6 text-[#F15A2B]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-lg">Contract & Temporary Staffing</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-6 h-6 text-[#F15A2B]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-lg">Competitive Pricing</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-6 h-6 text-[#F15A2B]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-lg">Pan-India Network</span>
              </li>
            </ul>
          </div>
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Great service!</h2>
              <p className="text-lg mb-4">Workers were skilled and punctual.</p>
              <p className="text-gray-600">&mdash;HR Head, Reliable Pumps Co.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-[#1B1B1B]">Need Manpower? Let&apos;s Connect.</h2>
          <div className="flex gap-4">
            <Button size="lg" className="bg-[#F15A2B] hover:bg-[#d94d22] text-white rounded-md px-6">
              Get a Quote
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-[#1B1B1B] text-[#1B1B1B] hover:bg-[#1B1B1B] hover:text-white rounded-md px-6">
              Call Now
            </Button>
          </div>
    </div>
      </section>
    </main>
  )
}
