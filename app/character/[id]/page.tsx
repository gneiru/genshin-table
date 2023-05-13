import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { getCharDetails } from "@/lib/api";
import { CharacterDetails } from "@/lib/types";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

export default async function CharacterPage({
  params: { id },
}: {
  params: { id: number };
}) {
  // console.log(id);
  const character = await getCharDetails(id);
  return (
    <div className="container mx-auto py-10">
      <div>
        <CharacterCard character={character} />
      </div>
    </div>
  );
}

const CharacterCard = (props: { character: CharacterDetails }) => {
  const { character } = props;
  dayjs.extend(relativeTime);

  // dayjs("1999-01-01").fromNow(); // 22 years ago
  return (
    <Card>
      <CardHeader>
        <CardTitle>{`${character.title[0]} ${character.name} `}</CardTitle>
        <CardDescription>{character.rarity}</CardDescription>
        <CardDescription>{character.vision}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{character.affiliation}</p>
        <div>{character.weapon}</div>
        <div>{character.model_type}</div>
        <div>{character.constellation}</div>
        <div>{character.region[0]}</div>
        <div>{character.special_dish}</div>
        <div>{`Obtain using ${character.how_to_obtain.join(", ")}`}</div>
      </CardContent>
      <CardFooter>
        <div>{`Released ${dayjs(character.release_day).fromNow()}`}</div>
      </CardFooter>
    </Card>
  );
};
