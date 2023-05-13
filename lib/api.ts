import { z } from "zod";
import { CharacterDetailsSchema, charSchema } from "./schema";
import { Character, CharacterDetails } from "./types";

const BASE_URL = "https://gsi.fly.dev"


export async function getData(): Promise<Character[]> {
    // Fetch data from your API here.
    const req = await fetch(`${BASE_URL}/characters?limit=100`);
    const res = await req.json();
  
    const modifiedData = res.results.map((r: Character) => {
      const starCount = r.rarity === "4_star" ? 4 : r.rarity === "5_star" ? 5 : 0;
      const { rarity, ...rest } = r;
      return { ...rest, rarity: "⭐".repeat(starCount) };
    });
  //   return modifiedData
    return z.array(charSchema).parse(modifiedData)
  }

export async function getCharDetails(id: number): Promise<CharacterDetails> {
    const req = await fetch(`https://gsi.fly.dev/characters/${id}`);
    const res = await req.json();
    const details = res.result as CharacterDetails
    const starCount =  details.rarity === "4_star" ? 4 :  details.rarity === "5_star" ? 5 : 0;
    const { rarity, ...rest } = details;
    const modifiedData = { ...rest, rarity: "⭐".repeat(starCount)}

  //   return modifiedData
    return CharacterDetailsSchema.parse(modifiedData)
}