import { Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";

const test = () => {
    return (
        <Grid gridArea={{ base: `"header header" "main main"`, lg: `"aside header" "aside main"` }} templateColumns={{ base: "1fr", lg: "200px 1fr" }}>
            <Show above="lg">
                <GridItem area={"aside"}></GridItem>
            </Show>

            <GridItem area={"header"}>
                
            </GridItem>

            <GridItem area={"main"}>
                
            </GridItem>
        </Grid>
    );
};

export default test;
