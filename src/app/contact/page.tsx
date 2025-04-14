'use client';

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState, ChangeEvent, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    
    // Reset the submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/worker.jpg"
            alt="SHIVSHAKTI Contact"
            fill
            className="object-cover brightness-[0.85] object-center"
            priority
            quality={100}
          />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 md:px-16 bg-gradient-to-r from-black/60 via-black/25 to-transparent">
          <div className="max-w-[600px]">
            <h1 className="mb-4 text-2xl sm:text-3xl md:text-[3.5rem] font-bold leading-[1.1] text-white">
              Let&apos;s Get in Touch
            </h1>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg text-white/95">
              Whether you need manpower urgently or want to discuss a long-term partnership, our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section id="contact-section" className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1B1B1B] mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-[#F15A2B] text-xl mt-1">📍</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Office Address</h3>
                    <p className="text-gray-700">
                      SHIVSHAKTI Manpower Services<br />
                      183 Industrial Area, Brea<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-[#F15A2B] text-xl mt-1">📞</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                    <p className="text-gray-700">
                      <a href="tel:+919999999999" className="hover:text-[#F15A2B]">+91-9999-999-999</a><br />
                      Available: Mon–Sat, 9:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-[#F15A2B] text-xl mt-1">📧</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-700">
                      <a href="mailto:contact@shivshaktimanpower.com" className="hover:text-[#F15A2B]">
                        contact@shivshaktimanpower.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mt-8">
                  <Link href="https://wa.me/919999999999" className="w-full sm:w-auto">
                    <Button 
                      size="lg" 
                      className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded px-6 sm:px-8 py-3 text-base font-medium w-full flex items-center justify-center gap-2"
                    >
                      <span className="text-xl">💬</span> Chat on WhatsApp
                    </Button>
                  </Link>
                  
                  <Link href="tel:+919999999999" className="w-full sm:w-auto">
                    <Button 
                      size="lg" 
                      className="bg-[#F15A2B] hover:bg-[#d94d22] text-white rounded px-6 sm:px-8 py-3 text-base font-medium w-full flex items-center justify-center gap-2"
                    >
                      <span className="text-xl">📞</span> Call Now
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Google Map (Optional) */}
              <div className="mt-8 h-[250px] w-full rounded-lg overflow-hidden border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.758905483204!2d72.8464716!3d19.2083335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b77d8e9c8671%3A0x35f3b57d825efafc!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1651903091153!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Form */}
            <div id="quote-form">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1B1B1B] mb-6">Get a Quote</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 text-center">
                  <div className="text-2xl mb-2">✅</div>
                  <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
                  <p>We&apos;ve received your message and will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-lg">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#F15A2B] focus:border-[#F15A2B] focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#F15A2B] focus:border-[#F15A2B] focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#F15A2B] focus:border-[#F15A2B] focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message / Requirement Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#F15A2B] focus:border-[#F15A2B] focus:outline-none"
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button 
                      type="submit"
                      className="w-full bg-[#1B1B1B] hover:bg-[#333] text-white py-3 px-4 rounded-md font-medium"
                    >
                      Submit Request
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 bg-gray-50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1B1B1B] mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">What types of workers do you provide?</h3>
              <p className="text-gray-700">We provide a wide range of skilled and unskilled workers for various industries including electricians, welders, fitters, machine operators, helpers, loaders, cleaners, and more.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">How fast can you deploy manpower?</h3>
              <p className="text-gray-700">We pride ourselves on quick response times. Depending on your requirements, we can deploy workers within 24-48 hours for urgent needs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Do you operate across India?</h3>
              <p className="text-gray-700">Yes, we have a pan-India presence with operations in all major industrial hubs across the country.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-bold text-[#1B1B1B]">Need Manpower Urgently? Contact SHIVSHAKTI Today.</h2>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-700">
            Let us solve your workforce challenges with our specialized manpower solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact#quote-form" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="bg-[#F15A2B] hover:bg-[#d94d22] text-white rounded px-6 sm:px-8 py-5 sm:py-6 text-base font-medium w-full"
              >
                Request Manpower
              </Button>
            </Link>
            <Link href="tel:+919999999999" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-black hover:bg-[#1B1B1B] hover:text-white rounded px-6 sm:px-8 py-5 sm:py-6 text-base font-medium border-[#1B1B1B] border-2 w-full"
              >
                Talk to Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 