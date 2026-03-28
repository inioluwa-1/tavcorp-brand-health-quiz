import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Solutions | TavCorp",
  description: "Discover our comprehensive brand health solutions.",
};

export default function SolutionsPage() {
  return (
    <div className="relative w-full overflow-hidden bg-[#fcf9f8]">
      <Navbar />

      <main className="relative z-10 min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#845400]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
        
        <span data-aos="fade-up" className="inline-block px-4 py-1.5 bg-[#e5e2e1] rounded-full text-[10px] font-bold tracking-widest text-[#514536] mb-6 uppercase">
          TavCorp Services
        </span>
        <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-6xl font-bold text-[#1b1b1b] leading-tight mb-8 tracking-tight">
          Brand Health <span className="text-[#845400]">Solutions</span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-xl text-[#514536] max-w-2xl leading-relaxed mb-12">
          We offer comprehensive diagnostic tools and strategic interventions to elevate your brand&apos;s market position. Detailed service offerings are coming soon.
        </p>

        <a 
          href="/quiz"
          data-aos="fade-up" data-aos-delay="300"
          className="group flex items-center justify-center gap-4 bg-[#845400] text-white pl-8 pr-4 py-4 rounded-full shadow-lg hover:scale-[0.98] hover:shadow-xl transition-all duration-300"
        >
          <span className="text-sm font-bold uppercase tracking-widest">
            Start Your Audit
          </span>
          <div className="bg-[#df9931] text-white h-10 w-10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
        </a>
      </main>

      <Footer />
    </div>
  );
}
