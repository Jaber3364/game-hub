import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App";
import useGenres from "../hooks/useGenres";
import genres from "../Data/genres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {
  const {data: ganres} = useGenres();
  const genre = ganres?.results.find(
    (g: {id: number | undefined}) => g.id === gameQuery.genreId
  );
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(p => p.id === gameQuery.platformId)
  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } Games`;
  return (
    <Heading marginBottom={2} fontSize={"5xl"} as={"h1"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
