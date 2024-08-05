import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";

import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import { getCropedUrl } from "../services/image-url-mod";
import Emoji from "./Emoji";

interface Props {
    game: Games;
}

const GameCard = ({ game }: Props) => {
    return (
        <Card>
            <Image src={getCropedUrl(game.background_image)} />
            <CardBody>
                <Heading fontSize={"2xl"}>{game.name}</Heading>
                <HStack justifyContent={"space-between"} marginTop={3}>
                    <PlatformIconsList platforms={game.parent_platforms.map(({ platform }) => platform)} />
                    <CriticScore metacritic={game.metacritic} />
                </HStack>
                <Emoji rating={game.rating_top} />
            </CardBody>
        </Card>
    );
};

export default GameCard;
