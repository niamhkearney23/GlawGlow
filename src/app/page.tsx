import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import SplitRow from "@/components/SplitRow";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <SplitRow />
      <Gallery />
      <Testimonials />
      <BookingCTA />
      <Footer />
    </main>
  );
}
