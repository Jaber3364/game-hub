import { Box, Heading, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttribute from '../components/gameAttribute';
import useGame from './useGame';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <>
      <Box padding={7}>
        <Heading>{game?.name}</Heading>
        <ExpandableText>{game?.description_raw}</ExpandableText>
        <GameAttribute game={game}/>
      </Box>
    </>
  );
}

export default GameDetailPage;