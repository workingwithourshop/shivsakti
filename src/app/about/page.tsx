import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PageLayout } from "@/components"

export default function About() {
  return (
    <PageLayout
      title="About SHIVSHAKTI – Your Trusted Manpower Partner"
      description="Delivering skilled and reliable workforce solutions for India's leading factories and motor-based industries."
    >
      {/* Company Overview */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 bg-white rounded-lg shadow-sm">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold text-[#1B1B1B] text-center">Who We Are</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 text-center">
            SHIVSHAKTI is a manpower services company with a strong presence in the industrial sector. We specialize in supplying both skilled and unskilled labor for motors, manufacturing, packaging, and other factory operations.
          </p>
          <p className="text-base sm:text-lg text-gray-700 text-center">
            With a commitment to quality and efficiency, we bridge the gap between workforce demand and supply — ensuring businesses run smoothly with the right personnel.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#1B1B1B]">Vision</h3>
              <p className="text-base sm:text-lg text-gray-700">
                To be India&#39;s most reliable manpower solutions provider for the industrial and manufacturing sectors.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#1B1B1B]">Mission</h3>
              <p className="text-base sm:text-lg text-gray-700">
                To empower factories with skilled manpower, foster growth through quality service, and create employment opportunities across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 bg-white rounded-lg shadow-sm">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 sm:mb-10 text-2xl sm:text-3xl font-bold text-[#1B1B1B] text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-[#F15A2B]">👷‍♂️</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Industry-Specific Workforce Expertise</h3>
              <p className="text-gray-700">Specialized workers trained for specific industrial operations</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-[#F15A2B]">⚙️</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Tailored Staffing Solutions</h3>
              <p className="text-gray-700">Custom workforce plans to match your factory&#39;s unique needs</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-[#F15A2B]">🚚</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Fast & On-Demand Deployment</h3>
              <p className="text-gray-700">Quick response to urgent staffing requirements</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-[#F15A2B]">📝</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Transparent Contracts & Communication</h3>
              <p className="text-gray-700">Clear agreements and open lines of communication</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl text-[#F15A2B]">🇮🇳</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Pan-India Reach</h3>
              <p className="text-gray-700">Extensive network covering major industrial hubs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 sm:mb-10 text-2xl sm:text-3xl font-bold text-[#1B1B1B] text-center">Key Stats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex flex-col items-center text-center bg-white p-5 sm:p-6 rounded-lg shadow-sm">
              <div className="mb-2 text-3xl sm:text-4xl text-[#F15A2B]">🏭</div>
              <p className="text-2xl sm:text-3xl font-bold">100+</p>
              <p className="text-base sm:text-lg text-gray-700">Clients Served</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-5 sm:p-6 rounded-lg shadow-sm">
              <div className="mb-2 text-3xl sm:text-4xl text-[#F15A2B]">👷‍♀️</div>
              <p className="text-2xl sm:text-3xl font-bold">2,500+</p>
              <p className="text-base sm:text-lg text-gray-700">Workers Deployed</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-5 sm:p-6 rounded-lg shadow-sm">
              <div className="mb-2 text-3xl sm:text-4xl text-[#F15A2B]">📍</div>
              <p className="text-2xl sm:text-3xl font-bold">20+</p>
              <p className="text-base sm:text-lg text-gray-700">Locations Covered</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-5 sm:p-6 rounded-lg shadow-sm">
              <div className="mb-2 text-3xl sm:text-4xl text-[#F15A2B]">⏳</div>
              <p className="text-2xl sm:text-3xl font-bold">5+</p>
              <p className="text-base sm:text-lg text-gray-700">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Leadership */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 bg-white rounded-lg shadow-sm">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold text-[#1B1B1B]">Our Leadership</h2>
          <p className="text-base sm:text-lg text-gray-700">
            Led by a team of industry professionals with deep experience in recruitment and factory operations.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 bg-white rounded-lg shadow-sm mt-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold text-[#1B1B1B]">Partner With SHIVSHAKTI Today</h2>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-700">
            Let us help your factory stay fully staffed with trained professionals.
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
            <Link href="tel:+95623365232323" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-black hover:bg-white/95 rounded px-6 sm:px-8 py-5 sm:py-6 text-base font-medium border-[#1B1B1B] border-2 w-full"
              >
                Call Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}