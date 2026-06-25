import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import About from "@/components/about";
import Services from "@/components/services";
import WhyChooseUs from "@/components/why-choose-us";
import Gallery from "@/components/gallery";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import InstagramFeed from "@/components/instagram-feed";
import Contact from "@/components/contact";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
       <InstagramFeed />
      <CTA />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat phone="2348012345678"/>
    </main>
  );
}