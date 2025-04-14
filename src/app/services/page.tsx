import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Services() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
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
        <div className="relative z-10 h-full flex flex-col justify-center px-16 bg-gradient-to-r from-black/60 via-black/25 to-transparent">
          <div className="max-w-[600px]">
            <h1 className="mb-4 text-[3.5rem] font-bold leading-[1.1] text-white">
              Manpower Solutions Tailored for Industrial Needs
            </h1>
            <p className="mb-8 text-lg text-white/95">
              From factories to motor manufacturing units — we supply reliable, skilled, and unskilled labor across various sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 px-12 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold text-[#1B1B1B] text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="mb-4 text-4xl text-[#F15A2B]">🛠️</div>
              <h3 className="text-xl font-semibold mb-2">Skilled Labor Supply</h3>
              <p className="text-gray-700">Electricians, welders, fitters, machine operators, etc., trained and ready for deployment.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="mb-4 text-4xl text-[#F15A2B]">🧱</div>
              <h3 className="text-xl font-semibold mb-2">Unskilled Labor Supply</h3>
              <p className="text-gray-700">General helpers, loaders, cleaners, and support workers available for immediate placement.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="mb-4 text-4xl text-[#F15A2B]">🏭</div>
              <h3 className="text-xl font-semibold mb-2">Contract-Based Manpower</h3>
              <p className="text-gray-700">Flexible staffing on short-term or project-based contracts with complete workforce management.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="mb-4 text-4xl text-[#F15A2B]">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Urgent / On-Demand Staffing</h3>
              <p className="text-gray-700">Need manpower fast? We deploy within hours to meet unexpected demands.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="mb-4 text-4xl text-[#F15A2B]">🔧</div>
              <h3 className="text-xl font-semibold mb-2">Maintenance Workforce</h3>
              <p className="text-gray-700">Specialized technicians for factory and machinery maintenance on weekly or monthly contracts.</p>
            </div>
            <div className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="mb-4 text-4xl text-[#F15A2B]">🧰</div>
              <h3 className="text-xl font-semibold mb-2">Customized Manpower Solutions</h3>
              <p className="text-gray-700">We tailor labor supply based on client needs — by skill, department, or work shift.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-12 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold text-[#1B1B1B] text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4 text-4xl text-[#F15A2B]">📞</div>
              <h3 className="text-xl font-semibold mb-2">1. Contact Us</h3>
              <p className="text-gray-700">Reach out with your specific manpower requirements</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4 text-4xl text-[#F15A2B]">📋</div>
              <h3 className="text-xl font-semibold mb-2">2. Get a Plan</h3>
              <p className="text-gray-700">Receive a customized manpower solution tailored to your needs</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4 text-4xl text-[#F15A2B]">👷</div>
              <h3 className="text-xl font-semibold mb-2">3. Deployment</h3>
              <p className="text-gray-700">Our verified workers arrive at your site ready to work</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-4 text-4xl text-[#F15A2B]">🔄</div>
              <h3 className="text-xl font-semibold mb-2">4. Ongoing Support</h3>
              <p className="text-gray-700">We provide continuous supervision and management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-12 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold text-[#1B1B1B] text-center">Industries We Serve</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                  <path d="M8 8h48v48H8z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 24h8v24h-8zM32 16h8v32h-8zM48 32h8v16h-8z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Motors & Pumps</h3>
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
              <h3 className="text-xl font-semibold">Packaging Units</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                  <path d="M16 32l16-16 16 16-16 16z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M28 28h8v8h-8z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Maintenance & Services</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 px-12 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold text-[#1B1B1B] text-center">Why Choose Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <svg className="w-6 h-6 text-[#F15A2B]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-lg">Verified Workers</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-6 h-6 text-[#F15A2B]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-lg">Fast Response Time</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-6 h-6 text-[#F15A2B]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-lg">Cost-Effective</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <svg className="w-6 h-6 text-[#F15A2B]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-lg">Scalable Teams</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-6 h-6 text-[#F15A2B]" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-lg">24/7 Client Support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 px-12 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-3xl font-bold text-[#1B1B1B] text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Exceptional Service</h3>
              <p className="text-lg mb-4">The workforce provided by SHIVSHAKTI was well-trained and professional. They integrated seamlessly with our existing team.</p>
              <p className="text-gray-600">&mdash; Operations Manager, Precision Motors Ltd.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Quick Response</h3>
              <p className="text-lg mb-4">When we needed urgent staffing during peak production, SHIVSHAKTI delivered qualified workers within 24 hours.</p>
              <p className="text-gray-600">&mdash; HR Director, MechTech Industries</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-12 bg-gray-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#1B1B1B]">Need Workforce Support? We're Just a Call Away.</h2>
          <p className="mb-8 text-lg text-gray-700">
            Let us solve your manpower challenges with our specialized workforce solutions.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#F15A2B] hover:bg-[#d94d22] text-white rounded px-8 py-6 text-base font-medium"
            >
              Get a Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-black hover:bg-white/95 rounded px-8 py-6 text-base font-medium border-[#1B1B1B] border-2"
            >
              Talk to Our Team
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 