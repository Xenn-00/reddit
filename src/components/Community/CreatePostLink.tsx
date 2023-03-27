import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/clientApp";
import useDirectory from "@/hooks/useDirectory";
import { Flex, Icon, Input, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsLink45Deg } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import { IoImageOutline } from "react-icons/io5";
import { useSetRecoilState } from "recoil";

const CreatePostLink: React.FC = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const { colorMode } = useColorMode();
  const setAuthModalState = useSetRecoilState(authModalState);
  const { toggleMenuOpen } = useDirectory();

  const onClick = () => {
    if (!user) {
      setAuthModalState({ open: true, view: "login" });
      return;
    }
    const { communityId } = router.query;
    if (communityId) {
      router.push(`/r/${communityId}/submit`);
      return;
    }
    toggleMenuOpen();
  };
  return (
    <Flex
      justify="space-evenly"
      align="center"
      bg={colorMode === "light" ? "white" : "gray.700"}
      height="56px"
      borderRadius={4}
      border="1px solid"
      borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
      p={2}
      mb={4}
    >
      <Icon as={FaReddit} fontSize={36} color="gray.300" mr={4} />
      <Input
        placeholder="Create Post"
        fontSize={"10pt"}
        _placeholder={{ color: colorMode === "light" ? "gray.400" : "#E2E8F0" }}
        _hover={{
          bg: colorMode === "light" ? "white" : "gray.600",
          border: "3px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: colorMode === "dark" ? "gray.600" : "white",
          border: "3px solid",
          borderColor: "blue.500",
        }}
        bg={colorMode === "light" ? "white" : "gray.700"}
        borderColor={colorMode === "light" ? "gray.200" : "gray.500"}
        height={"36px"}
        borderRadius={4}
        mr={4}
        onClick={onClick}
      />
      <Icon
        as={IoImageOutline}
        fontSize={24}
        mr={4}
        color="gray.400"
        cursor="pointer"
      />
      <Icon as={BsLink45Deg} fontSize={24} color="gray.400" cursor="pointer" />
    </Flex>
  );
};

export default CreatePostLink;
