import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortName: string;
}
const SortSelector = ({ onSelectSortOrder, sortName }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "name" },
    { value: "-rating", label: "Average rating" },
    { value: "-release", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
  ];
  const currentSortOrderName = sortOrders.find(
    (order) => order.value === sortName
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order by: {currentSortOrderName?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
