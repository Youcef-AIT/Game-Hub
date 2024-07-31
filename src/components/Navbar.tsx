import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ToggleMode from "./ToggleMode";
import SearchInput from "./SearchInput";

interface Props {
    onselect: (value: string) => void;
}

const Navbar = ({ onselect }: Props) => {
    return (
        <HStack padding={4}>
            <Image src={logo} boxSize="60px" />
            <SearchInput onselect={onselect} />
            <ToggleMode />
        </HStack>
    );
};

export default Navbar;
