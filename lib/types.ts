export type Character = {
  id: number;
  name: string;
  rarity: string;
  weapon: string;
  vision: string;
  wiki_url: string;
};

export type CharacterDetails = {
  id: number;
  name: string;
  title: string[];
  rarity: string;
  weapon: string;
  vision: string;
  model_type: string;
  birthday: string;
  constellation: string;
  region: string[];
  affiliation: string[];
  special_dish: string;
  how_to_obtain: string[];
  release_day: string;
  release_version: string;
  category: string;
  voice_actors: VoiceActor[];
  wiki_url: string;
};

type VoiceActor = {
  English: string;
  Chinese: string;
  Japanese: string;
  Korean: string;
};
