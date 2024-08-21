import {Button, Text} from "@chakra-ui/react";
import {useState} from "react";

interface Props {
    children: string;
}

const ExpandbleText = ({children}: Props) => {
    const [show, setShow] = useState(false);
    const limit = 300;
    const condition = children && children.length > limit;

    if (children && children.length <= limit) {
        return <Text>{children}</Text>;
    }

    const summary = children && children.slice(0, limit + 1) + "...";

    return (
        <Text>
            {show ? children : summary}
            <Button ml={2} onClick={() => setShow(!show)} colorScheme="yellow" size={"sm"}>
                <Text as={"b"}>{show ? "Show Less" : "Show More"}</Text>
            </Button>
        </Text>
    );
};

export default ExpandbleText;
