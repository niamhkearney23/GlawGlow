import MotionShell from "@/components/MotionShell";
import Intro from "@/components/Intro";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Services from "@/components/Services";
import About from "@/components/About";
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
        <ScrollProgress />
        <Navbar />
        <Hero />
        <Ticker />
        <Services />
        <About />
        <Gallery />
        <Care />
        <Testimonials />
        <Booking />
        <Footer />
      </main>
    </MotionShell>
  );
}
