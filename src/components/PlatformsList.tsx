import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Platform } from "../hooks/useGames";
import usePlatform from "../hooks/usePlatform";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformsList = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { data } = usePlatform();

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<MdOutlineKeyboardArrowDown />}>
                {selectedPlatform?.name || "platform"}
            </MenuButton>
            <MenuList>
                {data.map((platform) => {
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
