// theme.ts
import {extendTheme, ThemeConfig} from "@chakra-ui/react";

// Define your custom colors
const colors = {
    gray: {
        50: "#f9f9f9", // Lightest gray
        100: "#e2e2e2", // Light gray
        200: "#c4c4c4", // Gray
        300: "#a6a6a6", // Medium gray
        400: "#8a8a8a", // Dark gray
        500: "#6e6e6e", // Darker gray
        600: "#525252", // Even darker gray
        700: "#3c3c3c", // Very dark gray
        800: "#262626", // Almost black gray
        900: "#0f0f0f", // Near black gray
    },
};

// Define your theme configuration
const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

// Extend the theme with custom colors and configuration
const theme = extendTheme({
    colors,
    config,
});

export default theme;
