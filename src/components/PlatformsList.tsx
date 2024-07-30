import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Platform } from "../hooks/useGames";
import usePlatform from "../hooks/usePlatform";

const PlatformsList = () => {
    const { data } = usePlatform();

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<MdOutlineKeyboardArrowDown />}>
                Platforms
            </MenuButton>
            <MenuList>
                {data.map((platform) => {
                    return <MenuItem key={platform.id}>{platform.name}</MenuItem>;
                })}
            </MenuList>
        </Menu>
    );
};

export default PlatformsList;
