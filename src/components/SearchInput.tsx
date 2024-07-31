import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Porps {
    onselect: (value: string) => void;
}

const SearchInput = ({ onselect }: Porps) => {
    const ref = useRef<HTMLInputElement>(null);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (ref.current) onselect(ref.current.value);
            }}
        >
            <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <BsSearch color="gray.300" />
                </InputLeftElement>
                <Input ref={ref} borderRadius={20} type="text" placeholder="Search Game" />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
