const questions = [
  "I feel emotionally heavy or confused",
  "I feel affected by negative energy",
  "I want better love and relationships",
  "I need money, growth or career support",
  "I want peace, sleep and calmness",
  "I need confidence and courage",
];

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-[#fffaf5] px-6 py-10 text-[#3a2626] md:px-16">
      <a href="/" className="text-sm text-[#7d3f4f]">← Back Home</a>

      <section className="mx-auto max-w-4xl py-16 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#b68944]">
          Find My Crystal Remedy
        </p>

        <h1 className="mt-4 font-serif text-5xl md:text-7xl">
          What are you seeking support for?
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6d5550]">
          Choose the feeling closest to your current situation. DivyaRatna will
          guide you toward the right energy path.
        </p>

        <div className="mt-12 grid gap-4 text-left sm:grid-cols-2">
          {questions.map((q) => (
            <button
              key={q}
              className="rounded-3xl border border-[#ead9c5] bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="font-serif text-xl text-[#7d3f4f]">{q}</span>
              <p className="mt-3 text-sm text-[#725e58]">
                Get crystal recommendation, ritual and affirmation.
              </p>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}