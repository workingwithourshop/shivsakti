import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className='container max-w-xl py-10 lg:mx-auto'>
      <h1 className='text-3xl font-bold mb-8'>Get in Touch</h1>
      <ContactForm />
    </div>
  );
}
