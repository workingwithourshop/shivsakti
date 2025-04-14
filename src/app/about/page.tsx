import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function About() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/worker.jpg"
            alt="SHIVSHAKTI Factory"
            fill
            className="object-cover brightness-[0.85]"
            priority
            quality={100}
          />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center px-16 bg-gradient-to-r from-black/60 via-black/25 to-transparent">
          <div className="max-w-[600px]">
            <h1 className="mb-4 text-[3.5rem] font-bold leading-[1.1] text-white">
              About SHIVSHAKTI – Your Trusted Manpower Partner
            </h1>
            <p className="mb-8 text-lg text-white/95">
              Delivering skilled and reliable workforce solutions for India's leading factories and motor-based industries.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-12 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-[#1B1B1B] text-center">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-6 text-center">
            SHIVSHAKTI is a manpower services company with a strong presence in the industrial sector. We specialize in supplying both skilled and unskilled labor for motors, manufacturing, packaging, and other factory operations.
          </p>
          <p className="text-lg text-gray-700 text-center">
            With a commitment to quality and efficiency, we bridge the gap between workforce demand and supply — ensuring businesses run smoothly with the right personnel.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-12 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-[#1B1B1B]">Vision</h3>
              <p className="text-lg text-gray-700">
                To be India's most reliable manpower solutions provider for the industrial and manufacturing sectors.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-[#1B1B1B]">Mission</h3>
              <p className="text-lg text-gray-700">
                To empower factories with skilled manpower, foster growth through quality service, and create employment opportunities across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 px-12 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold text-[#1B1B1B] text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-4xl text-[#F15A2B]">👷‍♂️</div>
              <h3 className="text-xl font-semibold mb-2">Industry-Specific Workforce Expertise</h3>
              <p className="text-gray-700">Specialized workers trained for specific industrial operations</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-4xl text-[#F15A2B]">⚙️</div>
              <h3 className="text-xl font-semibold mb-2">Tailored Staffing Solutions</h3>
              <p className="text-gray-700">Custom workforce plans to match your factory's unique needs</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-4xl text-[#F15A2B]">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Fast & On-Demand Deployment</h3>
              <p className="text-gray-700">Quick response to urgent staffing requirements</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-4xl text-[#F15A2B]">📝</div>
              <h3 className="text-xl font-semibold mb-2">Transparent Contracts & Communication</h3>
              <p className="text-gray-700">Clear agreements and open lines of communication</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-4xl text-[#F15A2B]">🇮🇳</div>
              <h3 className="text-xl font-semibold mb-2">Pan-India Reach</h3>
              <p className="text-gray-700">Extensive network covering major industrial hubs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 px-12 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold text-[#1B1B1B] text-center">Key Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-2 text-4xl text-[#F15A2B]">🏭</div>
              <p className="text-3xl font-bold">100+</p>
              <p className="text-lg text-gray-700">Clients Served</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-2 text-4xl text-[#F15A2B]">👷‍♀️</div>
              <p className="text-3xl font-bold">2,500+</p>
              <p className="text-lg text-gray-700">Workers Deployed</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-2 text-4xl text-[#F15A2B]">📍</div>
              <p className="text-3xl font-bold">20+</p>
              <p className="text-lg text-gray-700">Locations Covered</p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-2 text-4xl text-[#F15A2B]">⏳</div>
              <p className="text-3xl font-bold">5+</p>
              <p className="text-lg text-gray-700">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Leadership */}
      <section className="py-16 px-12 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-[#1B1B1B]">Our Leadership</h2>
          <p className="text-lg text-gray-700">
            Led by a team of industry professionals with deep experience in recruitment and factory operations.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-12 bg-gray-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#1B1B1B]">Partner With SHIVSHAKTI Today</h2>
          <p className="mb-8 text-lg text-gray-700">
            Let us help your factory stay fully staffed with trained professionals.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#F15A2B] hover:bg-[#d94d22] text-white rounded px-8 py-6 text-base font-medium"
            >
              Request Manpower
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-black hover:bg-white/95 rounded px-8 py-6 text-base font-medium border-[#1B1B1B] border-2"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
} 