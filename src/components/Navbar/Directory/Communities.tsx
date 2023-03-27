import { communityState } from "@/atoms/communitiesAtom";
import CreateCommunityModal from "@/components/Modal/CreateCommunity/CreateCommunityModal";
import { Box, Flex, MenuItem, useColorMode, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaReddit } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { useRecoilValue } from "recoil";
import MenuListItem from "./MenuListItem";

type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  const { colorMode } = useColorMode();
  const [open, setOpen] = useState(false);
  const Snippets = useRecoilValue(communityState).Snippets;
  return (
    <>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <Box mt={3} mb={4}>
        <Text
          pl={3}
          mb={1}
          fontSize={"7pt"}
          fontWeight={500}
          color={"gray.500"}
          letterSpacing={1}
        >
          MODERATING
        </Text>
        {Snippets.filter((snippet) => snippet.isModerator).map((snippet) => (
          <MenuListItem
            key={snippet.communityId}
            icon={FaReddit}
            displayText={`r/${snippet.communityId}`}
            link={`/r/${snippet.communityId}`}
            iconColor={"blue.500"}
            imageURL={snippet.imageURL}
          />
        ))}
      </Box>
      <Box mt={3} mb={4}>
        <Text
          pl={3}
          mb={1}
          fontSize={"7pt"}
          fontWeight={500}
          color={"gray.500"}
          letterSpacing={1}
        >
          MY COMMUNITIES
        </Text>
        <MenuItem
          width={"100%"}
          fontSize={"10pt"}
          _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100" }}
          onClick={() => setOpen(true)}
        >
          <Flex align={"center"}>
            <GrAdd style={{ marginRight: ".5rem" }} />
            Create Community
          </Flex>
        </MenuItem>
        {Snippets.map((snippet) => (
          <MenuListItem
            key={snippet.communityId}
            icon={FaReddit}
            displayText={`r/${snippet.communityId}`}
            link={`/r/${snippet.communityId}`}
            iconColor={"blue.500"}
            imageURL={snippet.imageURL}
          />
        ))}
      </Box>
    </>
  );
};
export default Communities;
