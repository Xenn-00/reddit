import { Community } from "@/atoms/communitiesAtom";
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { FaReddit } from "react-icons/fa";
import useCommunityData from "@/hooks/useCommunityData";

type HeaderProps = {
  communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
  const { communityStateValue, onJoinOrLeaveCommunity, loading } =
    useCommunityData();
  const isJoined = !!communityStateValue.Snippets.find(
    (item) => item.communityId === communityData.id
  );
  console.log("isJoined : ", isJoined);
  console.log("community snippets: ", communityStateValue.Snippets);
  const { colorMode } = useColorMode();

  return (
    <Flex
      direction={"column"}
      width={"100%"}
      height={"120px"}
      color={colorMode === "light" ? "gray.700" : "gray.50"}
    >
      <Box
        height={"50px"}
        bg={colorMode === "light" ? "blue.400" : "gray.800"}
      />
      <Flex
        justify={"center"}
        bg={colorMode === "light" ? "white" : "gray.700"}
        shadow={"lg"}
        flexGrow={1}
      >
        <Flex width={"95%"} maxWidth={"960px"}>
          {communityStateValue.currentCommunity?.imageURL ? (
            <Image
              src={communityStateValue.currentCommunity.imageURL}
              width={20}
              height={20}
              position={"relative"}
              top={-5}
              border={"4px solid"}
              bg={colorMode === "dark" ? "gray.600" : "white"}
              borderColor={colorMode === "dark" ? "gray.600" : "white"}
              borderRadius={"50%"}
              alt="community-image"
            />
          ) : (
            <Icon
              as={FaReddit}
              fontSize={64}
              position={"relative"}
              top={-3}
              color={colorMode === "dark" ? "gray.200" : "blue.500"}
              bg={colorMode === "dark" ? "gray.600" : "white"}
              border={"4px solid"}
              borderColor={colorMode === "dark" ? "gray.600" : "white"}
              borderRadius={"50%"}
            />
          )}
          <Flex padding={"8px 16px"}>
            <Flex direction={"column"} mr={6}>
              <Text fontWeight={800} fontSize={"16pt"}>
                {communityData.id}
              </Text>
              <Text fontWeight={400} fontSize={"10pt"} color={"gray.400"}>
                r/{communityData.id}
              </Text>
            </Flex>
            <Button
              variant={isJoined ? "outline" : "solid"}
              height={"30px"}
              pr={6}
              pl={6}
              mt={0.5}
              isLoading={loading}
              onClick={() => onJoinOrLeaveCommunity(communityData, isJoined)}
            >
              {isJoined ? "Joined" : "Join"}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
