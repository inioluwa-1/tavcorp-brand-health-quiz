export default function MetricSpotlight() {
  return (
    <section className="mt-40 mb-20 max-w-4xl mx-auto px-8 text-center">
      <h2 className="text-xs font-bold text-[#845400] tracking-[0.2em] mb-12 uppercase">
        Metric Spotlight
      </h2>

      {/* Confidence Dial */}
      <div className="relative inline-block">
        <svg className="w-64 h-32" viewBox="0 0 100 50">
          {/* Track */}
          <path
            className="text-[#e5e2e1]"
            d="M 10 50 A 40 40 0 0 1 90 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
          />
          {/* Progress */}
          <path
            className="text-[#DF9931]"
            d="M 10 50 A 40 40 0 0 1 70 20"
            fill="none"
            stroke="currentColor"
            strokeDasharray="125.6"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>

        {/* Score */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <span className="text-5xl font-black tracking-tighter text-[#1B1B1B]">
            84
          </span>
          <span className="block text-[10px] font-bold text-[#5f5e5e] uppercase tracking-widest mt-1">
            Health Index
          </span>
        </div>
      </div>

      {/* Testimonial */}
      <p className="mt-8 text-[#5f5e5e] font-medium italic">
        &ldquo;TavCorp identified gaps in our editorial voice we didn&apos;t
        even know existed.&rdquo;
      </p>
      <p className="text-sm font-bold mt-2 text-[#1B1B1B]">
        — CMO, Enterprise Growth
      </p>
    </section>
  );
}
