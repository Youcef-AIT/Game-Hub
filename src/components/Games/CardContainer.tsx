import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const CardContainer = ({ children }: Props) => {
    return (
        <Box borderRadius={7} overflow={"hidden"}>
            {children}
        </Box>
    );
};

export default CardContainer;
