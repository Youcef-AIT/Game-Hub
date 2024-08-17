import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";

import usePlatforms, {Platform} from "../../hooks/usePlatforms";
import useGameQueryStore from "../Games/Store";

const PlatformsList = () => {
    const platformId = useGameQueryStore((s) => s.gamequery.platformId);
    const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

    const {data} = usePlatforms();

    const selectedPlatform = data?.results.find((platform) => platform.id === platformId);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<MdOutlineKeyboardArrowDown />}>
                {selectedPlatform?.name || "platform"}
            </MenuButton>
            <MenuList>
                {data?.results.map((platform) => {
                    return (
                        <MenuItem onClick={() => setPlatformId(platform.id)} key={platform.id}>
                            {platform.name}
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
};

export default PlatformsList;
