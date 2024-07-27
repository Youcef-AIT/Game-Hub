import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ToggleMode from "./ToggleMode";

const Navbar = () => {
    return (
        <HStack justifyContent={"space-between"}> 
            <Image src={logo} boxSize="60px" />
            <ToggleMode />
        </HStack>
    );
};

export default Navbar;
