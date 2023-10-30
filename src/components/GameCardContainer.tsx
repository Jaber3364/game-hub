import {Box} from "@chakra-ui/react";
import {ReactNode} from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({children}: Props) => {
  return (
    <Box
      _hover={{transform: "scale(1.03)", transformBox: 'transform 0.15s ease-in'}}
      borderRadius={10}
      overflow={"hidden"}
      marginTop={2}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
