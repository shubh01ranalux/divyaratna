const intentions = [
  "Love & Relationships",
  "Money & Career",
  "Protection",
  "Peace & Anxiety Relief",
  "Confidence & Focus",
  "Sleep & Emotional Healing",
  "Spiritual Growth",
  "Evil Eye Protection",
];

const products = [
  "Rose Quartz Bracelet",
  "Black Tourmaline Bracelet",
  "Citrine Bracelet",
  "Amethyst Bracelet",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f0e7] text-[#3a2626]">
      <section className="relative overflow-hidden px-6 py-8 md:px-16">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-serif tracking-wide text-[#7d3f4f]">
            DivyaRatna
          </div>
          <div className="hidden gap-8 text-sm md:flex">
            <a href="/shop">Shop</a>
  <a href="/remedies">Remedies</a>
  <a href="/crystal-guide">Crystal Guide</a>
  <a href="/about">About</a>
          </div>
          <button className="rounded-full bg-[#7d3f4f] px-5 py-2 text-sm text-white">
            Find My Crystal
          </button>
        </nav>

        <div className="grid min-h-[82vh] items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#b68944]">
              A safe space for your energy
            </p>

            <h1 className="max-w-2xl font-serif text-5xl leading-tight md:text-7xl">
              Find the energy your life needs right now.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6d5550]">
              Crystals, remedies, rituals and guidance for love, protection,
              peace, money, confidence, healing and clarity.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              
                <a href="/quiz" className="rounded-full bg-[#7d3f4f] px-7 py-4 text-white shadow-xl">
  Find My Crystal Remedy
</a>
              
                <a href="/shop" className="rounded-full border border-[#c9a35d] px-7 py-4 text-[#7d3f4f]">
  Shop by Intention
</a>
            </div>
          </div>

          <div className="relative mx-auto h-[480px] w-full max-w-md rounded-[3rem] bg-gradient-to-br from-[#f6dfe7] via-[#efe0ff] to-[#fff7ea] p-8 shadow-2xl">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#d9b15f]/30 blur-3xl" />
            <div className="absolute -bottom-12 -left-10 h-48 w-48 rounded-full bg-[#b2748a]/30 blur-3xl" />

            <div className="relative flex h-full flex-col items-center justify-center rounded-[2.4rem] border border-white/70 bg-white/35 p-8 text-center backdrop-blur">
              <div className="mb-8 h-40 w-28 rounded-t-full bg-gradient-to-b from-[#d6b6ff] to-[#8f4f76] shadow-2xl" />
              <h2 className="font-serif text-3xl text-[#7d3f4f]">
                Your Remedy Begins Here
              </h2>
              <p className="mt-4 text-[#6d5550]">
                Enter with a problem. Leave with clarity, ritual and the right
                crystal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#b68944]">
            What are you seeking support for?
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Choose your intention
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {intentions.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-[#ead9c5] bg-white/60 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 h-12 w-12 rounded-full bg-[#f3d6dc]" />
                <h3 className="font-serif text-xl text-[#7d3f4f]">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-[#725e58]">
                  Discover crystals, affirmations and simple remedies aligned to
                  this energy.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf5] px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#b68944]">
              Not just products
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Complete energy guidance with every crystal.
            </h2>
          </div>

          <div className="grid gap-4">
            {[
              "Purpose & Benefits",
              "How to Cleanse",
              "How to Energize",
              "Affirmations",
              "Usage Guide",
            ].map((x) => (
              <div
                key={x}
                className="rounded-2xl border border-[#ead9c5] bg-[#f8f0e7] p-5 text-[#7d3f4f]"
              >
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#b68944]">
                Find support
              </p>
              <h2 className="mt-4 font-serif text-4xl">For what you're going through</h2>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product}
                className="rounded-[2rem] bg-white p-5 shadow-lg"
              >
                <div className="mb-5 h-56 rounded-[1.5rem] bg-gradient-to-br from-[#f3d6dc] to-[#d8c3ff]" />
                <h3 className="font-serif text-xl text-[#7d3f4f]">
                  {product}
                </h3>
                <p className="mt-2 text-sm text-[#725e58]">
                  Comes with remedy, affirmation and cleansing guide.
                </p>
                <button className="mt-5 w-full rounded-full bg-[#7d3f4f] py-3 text-white">
                  View Remedy
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}