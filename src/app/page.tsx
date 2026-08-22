import MotionShell from "@/components/MotionShell";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import SplitRow from "@/components/SplitRow";
import Gallery from "@/components/Gallery";
import Care from "@/components/Care";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <MotionShell>
      <main className="overflow-x-hidden">
        <Intro />
        <Navbar />
        <Hero />
        <Marquee />
        <Services />
        <SplitRow />
        <Gallery />
        <Care />
        <Testimonials />
        <Booking />
        <Footer />
      </main>
    </MotionShell>
  );
}
