import {HStack, Image, Text} from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import SearchBar from "./SearchBar";
import ToggleMode from "./ToggleMode";
import {Link, useNavigate} from "react-router-dom";

const Navbar = () => {
    return (
        <HStack padding={4}>
            <Link to="/">
                <Image cursor={"pointer"} src={logo} boxSize="60px" objectFit={"cover"} />
            </Link>
            <SearchBar />
            <ToggleMode />
        </HStack>
    );
};

export default Navbar;
