import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { PageLayout } from "@/components"

export default function Services() {
  return (
    <PageLayout
      title="Manpower Solutions Tailored for Industrial Needs"
      description="From factories to motor manufacturing units — we supply reliable, skilled, and unskilled labor across various sectors."
    >
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/worker.jpg"
            alt="SHIVSHAKTI Manpower Services"
            fill
            className="object-cover brightness-[0.85]"
            priority
            quality={100}
          />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 md:px-16 bg-gradient-to-r from-black/60 via-black/25 to-transparent">
          <div className="max-w-[600px]">
            <h1 className="mb-4 text-2xl sm:text-3xl md:text-[3.5rem] font-bold leading-[1.1] text-white">
              Manpower Solutions Tailored for Industrial Needs
            </h1>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg text-white/95">
              From factories to motor manufacturing units — we supply reliable, skilled, and unskilled labor across various sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 bg-white rounded-lg shadow-sm">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 sm:mb-10 text-2xl sm:text-3xl font-bold text-[#1B1B1B] text-center">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex flex-col items-center text-center bg-gray-50 p-6 sm:p-8 rounded-lg shadow-sm">
              <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-[#F15A2B]">🛠️</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Skilled Labor Supply</h3>
              <p className="text-gray-700">Electricians, welders, fitters, machine operators, etc., trained and ready for deployment.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-50 p-6 sm:p-8 rounded-lg shadow-sm">
              <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-[#F15A2B]">🧱</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Unskilled Labor Supply</h3>
              <p className="text-gray-700">General helpers, loaders, cleaners, and support workers available for immediate placement.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-50 p-6 sm:p-8 rounded-lg shadow-sm">
              <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-[#F15A2B]">🏭</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Contract-Based Manpower</h3>
              <p className="text-gray-700">Flexible staffing on short-term or project-based contracts with complete workforce management.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-50 p-6 sm:p-8 rounded-lg shadow-sm">
              <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-[#F15A2B]">🚚</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Urgent / On-Demand Staffing</h3>
              <p className="text-gray-700">Need manpower fast? We deploy within hours to meet unexpected demands.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-50 p-6 sm:p-8 rounded-lg shadow-sm">
              <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-[#F15A2B]">🔧</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Maintenance Workforce</h3>
              <p className="text-gray-700">Specialized technicians for factory and machinery maintenance on weekly or monthly contracts.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-50 p-6 sm:p-8 rounded-lg shadow-sm">
              <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-[#F15A2B]">🧰</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Customized Manpower Solutions</h3>
              <p className="text-gray-700">We tailor labor supply based on client needs — by skill, department, or work shift.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 sm:mb-10 text-2xl sm:text-3xl font-bold text-[#1B1B1B] text-center">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex flex-col items-center text-center bg-white p-6 sm:p-8 rounded-lg shadow-sm">
              <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-[#F15A2B]">📞</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">1. Contact Us</h3>
              <p className="text-gray-700">Reach out with your specific manpower requirements</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-6 sm:p-8 rounded-lg shadow-sm">
              <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-[#F15A2B]">📋</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">2. Get a Plan</h3>
              <p className="text-gray-700">Receive a customized manpower solution tailored to your needs</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-6 sm:p-8 rounded-lg shadow-sm">
              <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-[#F15A2B]">👷</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">3. Deployment</h3>
              <p className="text-gray-700">Our verified workers arrive at your site ready to work</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-6 sm:p-8 rounded-lg shadow-sm">
              <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-[#F15A2B]">🔄</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">4. Ongoing Support</h3>
              <p className="text-gray-700">We provide continuous supervision and management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 bg-white rounded-lg shadow-sm">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-[#1B1B1B] text-center">Industries We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg className="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 64 64" fill="none">
                  <path d="M8 8h48v48H8z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 24h8v24h-8zM32 16h8v32h-8zM48 32h8v16h-8z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-center">Motors & Pumps</h3>
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
              <h3 className="text-lg sm:text-xl font-semibold text-center">Packaging Units</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg className="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 64 64" fill="none">
                  <path d="M16 32l16-16 16 16-16 16z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M28 28h8v8h-8z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-center">Maintenance & Services</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-[#1B1B1B] text-center">Why Choose Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#F15A2B]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-base sm:text-lg">Verified Workers</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#F15A2B]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-base sm:text-lg">Fast Response Time</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#F15A2B]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-base sm:text-lg">Cost-Effective</span>
              </li>
            </ul>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#F15A2B]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-base sm:text-lg">Scalable Teams</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#F15A2B]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-base sm:text-lg">24/7 Client Support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 bg-white rounded-lg shadow-sm">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-[#1B1B1B] text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Exceptional Service</h3>
              <p className="text-base sm:text-lg mb-3 sm:mb-4">The workforce provided by SHIVSHAKTI was well-trained and professional. They integrated seamlessly with our existing team.</p>
              <p className="text-gray-600">&mdash; Operations Manager, Precision Motors Ltd.</p>
            </div>
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Quick Response</h3>
              <p className="text-base sm:text-lg mb-3 sm:mb-4">When we needed urgent staffing during peak production, SHIVSHAKTI delivered qualified workers within 24 hours.</p>
              <p className="text-gray-600">&mdash; HR Director, MechTech Industries</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 bg-white rounded-lg shadow-sm mt-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold text-[#1B1B1B]">Ready to Get Started?</h2>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-700">
            Contact us today to discuss your manpower requirements and get a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="bg-[#F15A2B] hover:bg-[#d94d22] text-white rounded px-6 sm:px-8 py-5 sm:py-6 text-base font-medium w-full"
              >
                Request Manpower
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
} 