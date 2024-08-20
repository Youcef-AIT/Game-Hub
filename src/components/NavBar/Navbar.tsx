import {HStack, Image, Text} from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import SearchBar from "./SearchBar";
import ToggleMode from "./ToggleMode";

const Navbar = () => {
    return (
        <HStack padding={4}>
            <Image  src={logo} boxSize="60px" />
            <SearchBar />
            <ToggleMode />
        </HStack>
    );
};

export default Navbar;
