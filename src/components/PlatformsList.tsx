import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import usePlatforms, { Platform } from "../hooks/usePlatforms";
interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatformId?: number;
}

const PlatformsList = ({ onSelectPlatform, selectedPlatformId }: Props) => {
    const { data } = usePlatforms();

    const selectedPlatform = data?.results.find((platform) => platform.id === selectedPlatformId);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<MdOutlineKeyboardArrowDown />}>
                {selectedPlatform?.name || "platform"}
            </MenuButton>
            <MenuList>
                {data?.results.map((platform) => {
                    return (
                        <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>
                            {platform.name}
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
};

export default PlatformsList;
