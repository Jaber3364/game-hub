import { useParams } from 'react-router-dom';
import useGame from './useGame';
import { Box, Heading, Spinner } from '@chakra-ui/react';
import ExpandableText from '../components/ExpandableText';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <Box padding={7}>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{ game?.description_raw }</ExpandableText>
    </Box>
  )
}

export default GameDetailPage;