const remedies = [
  { title: "Love & Relationship Healing", slug: "love" },
  { title: "Money Block Removal", slug: "money" },
  { title: "Evil Eye Protection", slug: "protection" },
  { title: "Anxiety & Peace Support", slug: "peace" },
  { title: "Career Confidence", slug: "confidence" },
];

export default function RemediesPage() {
  return (
    <main className="min-h-screen bg-[#fffaf5] px-6 py-10 text-[#3a2626] md:px-16">
      <a href="/" className="text-sm text-[#7d3f4f]">← Back Home</a>

      <section className="mx-auto max-w-6xl py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-[#b68944]">
          Crystal Remedies
        </p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl">
          Enter with a problem. Leave with a path.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6d5550]">
          Choose what your heart is carrying right now and discover a simple
          crystal remedy, affirmation and ritual.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {remedies.map((item) => (
  <a
    href={`/remedies/${item.slug}`}
    key={item.slug}
    className="rounded-3xl border border-[#ead9c5] bg-[#f8f0e7] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
  ><div className="mb-5 h-14 w-14 rounded-full bg-[#f3d6dc]" />
              <h2 className="font-serif text-xl text-[#7d3f4f]">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#725e58]">
                Recommended crystal, daily affirmation and easy energy practice.
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}