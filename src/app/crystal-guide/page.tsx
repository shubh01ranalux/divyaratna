const guide = [
  "Purpose & Benefits",
  "How to Cleanse",
  "How to Energize",
  "How to Use",
  "Affirmations",
  "Best For",
];

export default function CrystalGuidePage() {
  return (
    <main className="min-h-screen bg-[#f8f0e7] px-6 py-10 text-[#3a2626] md:px-16">
      <a href="/" className="text-sm text-[#7d3f4f]">← Back Home</a>

      <section className="mx-auto max-w-5xl py-16 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#b68944]">
          Free Energy Guide
        </p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl">
          Understand your crystal before you use it.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6d5550]">
          A simple guide for every DivyaRatna customer to cleanse, energize,
          activate and align with their crystal.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guide.map((item) => (
            <div key={item} className="rounded-3xl bg-white p-8 shadow-lg">
              <h2 className="font-serif text-2xl text-[#7d3f4f]">{item}</h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}