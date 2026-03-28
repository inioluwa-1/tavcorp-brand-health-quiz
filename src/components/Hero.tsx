import Image from "next/image";
import Link from "next/link";

const avatars = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGzHuRjS1NpC3sxN_hVyAkODroOQbiNHfhtpInvgfQ2aAl6FtiP_2hKZiozIqMoQXH35cQxo96dGgmoCd3QNddI2gllRfbRYKWy6PwPvXwCEE-dlHri7-hA09L9Yh1zvDFjpHbokTqg8EdQb_Vxnekpi2ABzMnhI3RYjbfPyiGo10oSvedN4CT6FxC4VkosNSKpFYR9WMP3c3mAGs6pdu72UK62gbOQqMCjc7m_zf3sJtLOqgcTP2Zcw5kIbSI3nevunA439wyS-c",
    alt: "Professional woman avatar",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ_ukTwr1G4ChDHR0DVbd_hQPfX9hGxssmvWp7VaMpP-RM2C7TYPIxqCh8VCnKeph5xgqytBOicEVJRoTT92i-mFwioRa-eTIeYngqoE-RWHYknPuUFGDs_DR7dT_dNLEMViyMfBVHxjXG9EYusRfCtHwzm7VXtIiexB0dsTY28F9SpJ3Xy8Rp2-rYIIFKPNlTJsEqOjfo5mVhQa4sUHKQF6XWMyNLbT3r-3f-fxJ7UeyHOdZnVDN65KWJjh4ZC6x9ygM0AGc8yFI",
    alt: "Male executive avatar",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjqevJIIqfcGSBn68_euZLkXDXivwIdBrK-DZspMzxRJEEACfDlpxjiMBS3sbnvFOVc-1L_opkbHPlkp-VeU6Xxf4CrINDGCV3RKiS4qWcqubkI2j7hGOitmoGyYAu-iwm1gnDDSrTxI4M61hVBbGMxpFr4noSlhlTsBf7Enb0CLOvEEj8sP5jG8FGnDM2omFqIwnDv-wIe6QikypgwrxuNgly4z3NY-TDhJTgAKZ8QtgOwPGnDlxAf0Y19oHDXptMCTezVxRBB-k",
    alt: "Creative professional avatar",
  },
];

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 flex flex-col items-center text-center">
      {/* Badge */}
      <div data-aos="fade-down" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f6f3f2] text-[#845400] text-[10px] uppercase tracking-[0.1em] font-bold mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-[#845400] animate-pulse" />
        Intelligence Diagnostics v2.4
      </div>

      {/* Headline */}
      <h1 data-aos="fade-up" data-aos-delay="100" className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#1B1B1B] max-w-4xl mb-8 leading-[0.95]">
        How Healthy Is <br />
        <span className="text-[#DF9931]">Your Brand?</span>
      </h1>

      {/* Subheading */}
      <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-xl text-[#5f5e5e] max-w-2xl leading-relaxed mb-12">
        Assess your brand across 9 key pillars with our expert diagnostic tool.
        Gain proprietary insights into your market authority and resonance.
      </p>

      {/* CTA Row */}
      <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4 items-center mb-24">
        <Link
          href="/quiz"
          id="hero-start-quiz"
          className="editorial-gradient text-white px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:scale-[0.98] transition-all duration-300 shadow-xl shadow-[#845400]/10 cursor-pointer"
        >
          Start the Free Quiz
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>

        {/* Social proof */}
        <div className="flex items-center ml-4">
          <div className="flex -space-x-3">
            {avatars.map((avatar, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-[#fcf9f8] bg-[#eae7e7] overflow-hidden"
              >
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
          <span className="pl-4 text-sm font-bold text-[#5f5e5e] tracking-tight whitespace-nowrap">
            Joined by 12,000+ brands
          </span>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full text-left">
        {/* Main Card */}
        <div data-aos="fade-up" data-aos-delay="400" className="md:col-span-8 bg-white rounded-2xl p-10 flex flex-col justify-between group cursor-default shadow-sm">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#f6f3f2] flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-[#845400] text-3xl">
                analytics
              </span>
            </div>
            <h3 className="text-3xl font-bold tracking-tight mb-4">
              The Diagnostic Engine
            </h3>
            <p className="text-[#5f5e5e] leading-relaxed max-w-md">
              Our algorithm processes over 40 variables to map your brand equity
              against industry-leading benchmarks in real-time.
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-xl bg-[#f6f3f2] h-48 relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG1UY0mGuLJ-alAEcoBfdr5GUM7pOdYy310hHRXWAS1Sdox_IYFEas6RvwSL-M2BqVa9NT07yIHCiJQJ6m4DkVkCnImtJj8ObPv1bSkNmEdI0EIHZUZX4637qtPxdqzP4Ani3QrrMWxT9hY8OImo_oFuPoc65ij2rw0AqklNRqqw3tfhvmLyIGk9zHaqnr4Eh2UpS0JR0CQjT9q0bsyg85yCkGjnit-Gcn4r-znOE3EJysPFTBvgWP4qtE8b5aZFqc3xnPWvTRmfo"
              alt="Analytics dashboard preview"
              fill
              className="object-cover opacity-80 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
          </div>
        </div>

        {/* Side Cards */}
        <div className="md:col-span-4 flex flex-col gap-6 overflow-hidden">
          {/* Card 1 */}
          <div data-aos="fade-up" data-aos-delay="600" className="bg-[#f6f3f2] rounded-2xl p-8 flex-1 border border-[#d6c3b0]/10">
            <span className="material-symbols-outlined text-[#DF9931] mb-4 text-3xl block">
              verified
            </span>
            <h4 className="text-xl font-bold mb-2">Scientific Methodology</h4>
            <p className="text-sm text-[#5f5e5e] leading-relaxed">
              Based on proprietary TavCorp Editorial Intelligence frameworks.
            </p>
          </div>

          {/* Card 2 */}
          <div data-aos="fade-up" data-aos-delay="700" className="bg-[#313030] rounded-2xl p-8 flex-1 text-[#fcf9f8]">
            <span className="material-symbols-outlined text-[#DF9931] mb-4 text-3xl block">
              electric_bolt
            </span>
            <h4 className="text-xl font-bold mb-2">Instant Results</h4>
            <p className="text-sm opacity-60 leading-relaxed">
              Receive a 12-page PDF breakdown of your brand health immediately
              after completion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
