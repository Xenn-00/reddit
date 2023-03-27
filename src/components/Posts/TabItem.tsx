import { Flex, Icon, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { TabItemInterface } from "./NewPostForm";

type TabItemProps = {
  item: TabItemInterface;
  selected: boolean;
  setSelectedtab: (value: string) => void;
};

const TabItem: React.FC<TabItemProps> = ({
  item,
  selected,
  setSelectedtab,
}) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      justify={"center"}
      align={"center"}
      flexGrow={1}
      p={"14px 0px"}
      cursor={"pointer"}
      fontWeight={700}
      _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.50" }}
      color={
        selected
          ? colorMode === "dark"
            ? "blue.300"
            : "blue.500"
          : colorMode === "dark"
          ? "gray.100"
          : "gray.500"
      }
      borderWidth={selected ? "0px 1px 2px 0px" : "0px 1px 1px 0px"}
      borderBottomColor={
        selected ? "blue.500" : colorMode === "dark" ? "gray.600" : "gray.200"
      }
      borderRightColor={colorMode === "dark" ? "gray.600" : "gray.200"}
      onClick={() => setSelectedtab(item.title)}
    >
      <Flex align={"center"} height={"20px"} mr={2}>
        <Icon as={item.icon} />
      </Flex>
      <Text fontSize={"10pt"}>{item.title}</Text>
    </Flex>
  );
};
export default TabItem;
