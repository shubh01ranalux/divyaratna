export interface Crystal {
  name: string;
  intention: string;
  bestFor: string;
}

export interface Remedy {
  slug: string;
  title: string;
  feeling: string;
  crystals: string[];
  ritual: string;
  affirmation: string;
}