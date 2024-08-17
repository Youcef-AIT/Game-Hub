import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface Props {
    onSelectOrder: (order: string) => void;
    selectedOrder: string;
}

const OrderSelector = ({ onSelectOrder, selectedOrder }: Props) => {
    const sortList = [
        { value: "", label: "Revelence" },
        { value: "name", label: "Name" },
        { value: "-metacritic", label: "Critic Score" },
        { value: "-released", label: "Realease Date" },
        { value: "-rating", label: "Rating" },
        { value: "-added", label: "Added Date" },
        { value: "-updated", label: "Updated Date" },
    ];

    const orderType = sortList.find((item) => item.value === selectedOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<MdOutlineKeyboardArrowDown />}>
                Ordred By : {orderType?.label || "Revelence"}
            </MenuButton>
            <MenuList>
                {sortList.map((item) => {
                    return (
                        <MenuItem key={item.value} onClick={() => onSelectOrder(item.value)} value={item.value}>
                            {item.label}
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
};

export default OrderSelector;
