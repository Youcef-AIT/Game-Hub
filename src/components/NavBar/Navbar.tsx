import {HStack, Image, Text} from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import SearchBar from "./SearchBar";
import ToggleMode from "./ToggleMode";

interface Props {
    onselecet: (value: string) => void;
}

const Navbar = ({onselecet}: Props) => {
    return (
        <HStack padding={4}>
            <Image src={logo} boxSize="60px" />
            <SearchBar onselecet={onselecet} />
            <ToggleMode />
        </HStack>
    );
};

export default Navbar;
