import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    tram: string;
    children: ReactNode | ReactNode[];
}

const DefinitionItem = ({tram, children}: Props) => {
  return (
      <Box>
          <Heading as={"dt"} fontSize={"md"} color={"gray.600"}>{ tram }</Heading>
          <dd>{ children }</dd>
    </Box>
  )
}

export default DefinitionItem;