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
