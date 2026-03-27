import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MetricSpotlight from "@/components/MetricSpotlight";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <Hero />
        <MetricSpotlight />
      </main>
      <Footer />
    </>
  );
}
