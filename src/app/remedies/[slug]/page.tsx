const remedyData: Record<string, {
  title: string;
  feeling: string;
  crystals: string[];
  ritual: string;
  affirmation: string;
}> = {
  protection: {
    title: "Protection from Negative Energy",
    feeling: "You may feel drained, watched, heavy, or affected by people’s energy.",
    crystals: ["Black Tourmaline", "Obsidian", "Tiger Eye"],
    ritual: "Hold your crystal in your left hand every morning. Take 7 deep breaths and imagine a golden shield around you.",
    affirmation: "I am protected, grounded and safe in my energy.",
  },
  love: {
    title: "Love & Emotional Healing",
    feeling: "You may be healing from heartbreak, seeking self-love, or wanting softer relationship energy.",
    crystals: ["Rose Quartz", "Moonstone", "Amethyst"],
    ritual: "Keep your crystal near your heart for 5 minutes and repeat your affirmation with calm breathing.",
    affirmation: "I welcome love, softness and emotional peace into my life.",
  },
  money: {
    title: "Money, Career & Growth",
    feeling: "You may feel stuck, blocked, underconfident, or ready for better opportunities.",
    crystals: ["Citrine", "Pyrite", "Green Aventurine"],
    ritual: "Place your crystal near your wallet or work desk. Set one clear money intention every morning.",
    affirmation: "I attract growth, opportunity and aligned abundance.",
  },
  peace: {
    title: "Peace, Sleep & Anxiety Relief",
    feeling: "You may be overthinking, emotionally tired, restless or unable to feel calm.",
    crystals: ["Amethyst", "Howlite", "Selenite"],
    ritual: "Keep your crystal near your pillow. Before sleep, hold it and release the day with 5 slow breaths.",
    affirmation: "My mind is calm, my heart is safe and my energy is peaceful.",
  },
  confidence: {
    title: "Confidence, Focus & Courage",
    feeling: "You may doubt yourself, delay decisions, or feel afraid to take the next step.",
    crystals: ["Tiger Eye", "Carnelian", "Citrine"],
    ritual: "Wear your crystal during work, study or important conversations. Touch it before making decisions.",
    affirmation: "I trust myself. I move with courage, clarity and confidence.",
  },
};

export default function RemedyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const remedy = remedyData[params.slug] || remedyData.protection;

  return (
    <main className="min-h-screen bg-[#f8f0e7] px-6 py-10 text-[#3a2626] md:px-16">
      <a href="/remedies" className="text-sm text-[#7d3f4f]">← Back to Remedies</a>

      <section className="mx-auto grid max-w-6xl gap-12 py-16 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#b68944]">
            Your Crystal Remedy
          </p>

          <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
            {remedy.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#6d5550]">
            {remedy.feeling}
          </p>

          <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-lg">
            <h2 className="font-serif text-2xl text-[#7d3f4f]">
              Recommended Crystals
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {remedy.crystals.map((crystal) => (
                <span
                  key={crystal}
                  className="rounded-full bg-[#fff7ef] px-5 py-3 text-[#7d3f4f]"
                >
                  {crystal}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-[2rem] bg-white p-6 shadow-lg">
            <h2 className="font-serif text-2xl text-[#7d3f4f]">
              Simple Ritual
            </h2>
            <p className="mt-3 leading-7 text-[#725e58]">{remedy.ritual}</p>
          </div>

          <div className="mt-6 rounded-[2rem] bg-[#7d3f4f] p-6 text-white shadow-lg">
            <h2 className="font-serif text-2xl">Affirmation</h2>
            <p className="mt-3 text-lg leading-8">“{remedy.affirmation}”</p>
          </div>

          <a
            href="/shop"
            className="mt-8 inline-block rounded-full bg-[#7d3f4f] px-8 py-4 text-white shadow-xl"
          >
            View Matching Crystals
          </a>
        </div>

        <div className="relative min-h-[520px] rounded-[3rem] bg-gradient-to-br from-[#f3d6dc] via-[#d8c3ff] to-[#fff7ef] p-8 shadow-2xl">
          <div className="absolute -right-10 top-10 h-44 w-44 rounded-full bg-[#d9b15f]/30 blur-3xl" />
          <div className="absolute bottom-10 left-0 h-52 w-52 rounded-full bg-[#b2748a]/30 blur-3xl" />

          <div className="relative flex h-full flex-col items-center justify-center rounded-[2.4rem] border border-white/70 bg-white/35 p-8 text-center backdrop-blur">
            <div className="mb-8 h-52 w-32 rounded-t-full bg-gradient-to-b from-[#efe0ff] to-[#7d3f4f] shadow-2xl" />
            <h2 className="font-serif text-3xl text-[#7d3f4f]">
              Your energy is not broken.
            </h2>
            <p className="mt-4 max-w-sm text-[#6d5550]">
              It may simply need support, cleansing and the right intention.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}