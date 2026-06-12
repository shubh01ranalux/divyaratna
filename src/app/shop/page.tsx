const products = [
  {
    name: "Rose Quartz Bracelet",
    intention: "Love, emotional healing, self-worth",
    bestFor: "Heartbreak, relationship healing, self-love",
  },
  {
    name: "Black Tourmaline Bracelet",
    intention: "Protection, negativity removal, grounding",
    bestFor: "Evil eye, negative people, heavy energy",
  },
  {
    name: "Citrine Bracelet",
    intention: "Money, confidence, manifestation",
    bestFor: "Career growth, abundance, motivation",
  },
  {
    name: "Amethyst Bracelet",
    intention: "Peace, sleep, spiritual clarity",
    bestFor: "Anxiety, overthinking, emotional balance",
  },
  {
    name: "Green Aventurine Bracelet",
    intention: "Luck, opportunity, growth",
    bestFor: "New beginnings, business, success energy",
  },
  {
    name: "Tiger Eye Bracelet",
    intention: "Courage, focus, confidence",
    bestFor: "Decision making, fear removal, career confidence",
  },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#f8f0e7] px-6 py-10 text-[#3a2626] md:px-16">
      <a href="/" className="text-sm text-[#7d3f4f]">← Back Home</a>

      <section className="mx-auto max-w-6xl py-16">
        <p className="text-sm uppercase tracking-[0.3em] text-[#b68944]">
          DivyaRatna Remedies
        </p>

        <h1 className="mt-4 font-serif text-5xl md:text-7xl">
          Choose what your energy needs.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6d5550]">
          Every crystal is paired with guidance, remedy, cleansing method,
          energizing ritual and affirmation.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.name} className="rounded-[2rem] bg-white p-5 shadow-lg">
              <div className="mb-5 h-64 rounded-[1.5rem] bg-gradient-to-br from-[#f3d6dc] to-[#d8c3ff]" />

              <h2 className="font-serif text-2xl text-[#7d3f4f]">
                {product.name}
              </h2>

              <p className="mt-3 text-[#725e58]">{product.intention}</p>

              <div className="mt-5 rounded-2xl bg-[#fff7ef] p-4 text-sm text-[#6d5550]">
                <strong className="text-[#7d3f4f]">Best For:</strong>{" "}
                {product.bestFor}
              </div>

              <button className="mt-5 w-full rounded-full bg-[#7d3f4f] py-3 text-white">
                View Remedy
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}