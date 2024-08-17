import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { CiSearch } from "react-icons/ci";

interface Props {
    onselecet: (value: string) => void;
}

const SearchBar = ({ onselecet }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (inputRef.current) onselecet(inputRef.current.value);
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
