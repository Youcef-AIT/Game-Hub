import {Box} from "@chakra-ui/react";
import {ReactNode} from "react";
import useGameQueryStore, {GameQuery} from "./Store";
import {Games} from "../../hooks/useGames";
import {useNavigate} from "react-router-dom";

interface Props {
    children: ReactNode;
    game: Games;
}

const CardContainer = ({children, game}: Props) => {
    const navigate = useNavigate();
    return (
        <Box
            onClick={() => {
                navigate(`/game/${game.slug}`);
            }}
            borderRadius={7}
            overflow={"hidden"}
            transition="transform 0.4s"
            _hover={{transform: "scale(1.02)", cursor: "pointer", border: "1px solid white"}}
        >
            {children}
        </Box>
    );
};

export default CardContainer;
