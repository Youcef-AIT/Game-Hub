import { FaXbox, FaPlaystation, FaWindows, FaApple, FaAndroid, FaLinux, FaGlobe } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";
import { HStack, Icon } from "@chakra-ui/react";

interface Props {
    platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
    const iconsMap: { [key: string]: IconType } = {
        linux: FaLinux,
        web: FaGlobe,
        pc: FaWindows,
        xbox: FaXbox,
        ios: MdPhoneIphone,
        android: FaAndroid,
        mac: FaApple,
        playstation: FaPlaystation,
        nintendo: BsNintendoSwitch,
    };
    return (
        <HStack>
            {platforms.map((platform) => (
                <Icon as={iconsMap[platform.slug]}></Icon>
            ))}
        </HStack>
    );
};

export default PlatformIconsList;
