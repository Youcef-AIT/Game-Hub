import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ToggleMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <HStack>
            <Switch colorScheme="red" size="lg" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
            <Text whiteSpace={"nowrap"}> Switch Theme</Text>
        </HStack>
    );
};

export default ToggleMode;
