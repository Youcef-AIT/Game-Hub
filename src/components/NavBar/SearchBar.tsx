import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {useRef} from "react";
import {CiSearch} from "react-icons/ci";
import useGameQueryStore from "../Games/Store";

const SearchBar = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const setSearchInput  = useGameQueryStore((s) => s.setSearchInput);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (inputRef.current) setSearchInput(inputRef.current.value);
            }}
        >
            <InputGroup rounded={"lg"}>
                <InputLeftElement pointerEvents="none">
                    <CiSearch color="gray.300" />
                </InputLeftElement>
                <Input ref={inputRef} borderRadius={50} type="text" placeholder="Game Search" />
            </InputGroup>
        </form>
    );
};

export default SearchBar;
