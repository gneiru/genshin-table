import { z } from "zod";

export const charSchema = z.object({
  id: z.number(),
  name: z.string(),
  rarity: z.string().emoji(),
  weapon: z.string(),
  vision: z.string(),
  wiki_url: z.string().url(),
});

const VoiceActorSchema = z.object({
  English: z.string(),
  Chinese: z.string(),
  Japanese: z.string(),
  Korean: z.string(),
});

export const CharacterDetailsSchema = z.object({
  id: z.number(),
  name: z.string(),
  title: z.array(z.string()),
  rarity: z.string().emoji(),
  weapon: z.string(),
  vision: z.string(),
  model_type: z.string(),
  birthday: z.string(),
  constellation: z.string(),
  region: z.array(z.string()),
  affiliation: z.array(z.string()),
  special_dish: z.string(),
  how_to_obtain: z.array(z.string()),
  release_day: z.string(),
  release_version: z.string(),
  category: z.string(),
  voice_actors: z.array(VoiceActorSchema),
  wiki_url: z.string(),
});
