import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/factory-workers.jpg"
            alt="Factory Workers"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            Reliable Manpower for Your Industrial Needs
          </h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl">
            Specialized in supplying skilled and unskilled labor to motor and manufacturing industries across India.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Request Manpower
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold">Powering Factories with Quality Workforce</h2>
          <p className="text-lg text-gray-600">
            SHIVSHAKTI is a leading manpower provider for factories and industrial units. From motor assembly lines to packaging units, we ensure the right people for the right job—on time, every time.
          </p>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Industries We Serve</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🏭", title: "Motors & Pumps Industry" },
              { icon: "⚙️", title: "Mechanical Manufacturing" },
              { icon: "📦", title: "Packaging & Assembly" },
              { icon: "🔧", title: "Maintenance Services" },
              { icon: "🧰", title: "General Factory Operations" },
            ].map((industry, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="mb-4 text-4xl">{industry.icon}</div>
                <h3 className="text-xl font-semibold">{industry.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Why Choose SHIVSHAKTI</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "✅", title: "Verified Skilled Workers" },
              { icon: "⏱️", title: "Quick Response & Deployment" },
              { icon: "💼", title: "Contract & Temporary Staffing" },
              { icon: "💸", title: "Competitive Pricing" },
              { icon: "🌐", title: "Pan-India Network" },
            ].map((feature, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Client Testimonials</h2>
          <div className="space-y-8">
            <Card className="p-6">
              <p className="mb-4 text-lg italic">
                "SHIVSHAKTI helped us scale up quickly during peak season. Reliable and professional team!"
              </p>
              <p className="font-semibold">— Manager, ABC Motors Pvt Ltd</p>
            </Card>
            <Card className="p-6">
              <p className="mb-4 text-lg italic">
                "Great service! Workers were skilled and punctual."
              </p>
              <p className="font-semibold">— HR Head, Reliable Pumps Co.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold">Need Manpower? Let's Connect.</h2>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Get a Quote
            </Button>
            <Button size="lg" variant="outline">
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
