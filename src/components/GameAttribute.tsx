import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entites/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
    game: Game;
}

const GameAttribute = ({game}: Props) => {
  return (
    <SimpleGrid columns={2} rowGap={5} as={"dl"}>
      <DefinitionItem tram="Platforms">
        {game?.parent_platforms.map(({platform}) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem tram="Metascore">
        <CriticScore score={game?.metacritic} />
      </DefinitionItem>
      <DefinitionItem tram="Genres">
        {game?.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem tram="Publishers">
        {game?.publishers.map((publish) => (
          <Text key={publish.id}>{publish.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
}

export default GameAttribute;