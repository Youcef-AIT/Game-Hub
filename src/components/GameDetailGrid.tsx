import {Badge, Box, Grid, SimpleGrid, Text} from "@chakra-ui/react";
import {Games} from "../hooks/useGames";
import CriticScore from "./Games/CriticScore";

interface Props {
    data: Games;
}

const GameDetailGrid = ({data}: Props) => {
    return (
        <SimpleGrid columns={{base: 1, sm: 2}} spacing={4} mt={4}>
            <Box rounded={"md"} minH={40}>
                <Text color={"gray.600"} fontWeight={"bold"}>
                    Platforms
                </Text>
                <Grid
                    templateRows={{
                        md: "repeat(3,auto)",
                    }}
                    templateColumns={{
                        md: "repeat(3,1fr)",
                    }}
                    padding={2}
                    gap={2}
                    gridAutoFlow={{
                        md: "column",
                    }}
                >
                    {data?.parent_platforms.map(({platform}) => {
                        return <Text key={platform.id}>{platform.name}</Text>;
                    })}
                </Grid>
            </Box>
            <Box rounded={"md"} minH={40}>
                <Text color={"gray.600"} fontWeight={"bold"}>
                    Score
                </Text>
                <Box p={2}>
                    <CriticScore metacritic={data?.metacritic} />
                </Box>
            </Box>
            <Box rounded={"md"} minH={40}>
                <Text color={"gray.600"} fontWeight={"bold"}>
                    Publishers
                </Text>
                <Box p={2}>
                    {data?.publishers.map((publisher) => {
                        return <Text key={publisher.id}>{publisher.name}</Text>;
                    })}
                </Box>
            </Box>
            <Box rounded={"md"} minH={40}>
                <Text color={"gray.600"} fontWeight={"bold"}>
                    Genres
                </Text>
                <Box p={2}>
                    {data?.genres.map((genre) => {
                        return <Text key={genre.id}>{genre?.name}</Text>;
                    })}
                </Box>
            </Box>
        </SimpleGrid>
    );
};

export default GameDetailGrid;
