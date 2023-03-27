import { defaultMenuItem } from "@/atoms/directoryMenuAtom";
import { auth } from "@/firebase/clientApp";
import useDirectory from "@/hooks/useDirectory";
import { Flex, Image, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Directory from "./Directory/Directory";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  const { colorMode } = useColorMode();
  const [user, loading, error] = useAuthState(auth);
  const { onSelectMenuItem } = useDirectory();
  return (
    <Flex
      bg={colorMode === "dark" ? "gray.900" : "white"}
      shadow="lg"
      justifyContent={"space-between"}
      height="50px"
      padding="6px 12px"
    >
      <Flex
        align={"center"}
        width={{ base: "40px", md: "auto" }}
        mr={{ base: 0, md: 2 }}
        cursor={"pointer"}
        onClick={() => onSelectMenuItem(defaultMenuItem)}
      >
        <Image src={"/images/redditface.svg"} height="30px" />
        <Image
          src={
            colorMode === "dark"
              ? "/images/redditTextWhite.svg"
              : "/images/redditText.svg"
          }
          height="40px"
          ml={1}
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      {user && <Directory />}
      <SearchInput />
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
