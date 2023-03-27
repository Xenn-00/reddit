import { auth } from "@/firebase/clientApp";
import { Button, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import {
  useSignInWithApple,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

type OAuthButtonProps = {};

const OAuthButtons: React.FC<OAuthButtonProps> = () => {
  const { colorMode } = useColorMode();
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  // const [signInWithApple, userApple, loadingApple, errorApple] =
  //   useSignInWithApple(auth);
  return (
    <Flex direction={"column"} width="87%" mb={4}>
      <Button
        variant={"oauth"}
        _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.50" }}
        display={"flex"}
        justifyContent={"space-around"}
        mb={2}
        isLoading={loadingGoogle}
        onClick={() => signInWithGoogle()}
      >
        <Image src="/images/googleLogo.png" height={"20px"} />
        <Text>Continue with Google</Text>
      </Button>
      {/* <Button
        variant={"oauth"}
        _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.50" }}
        display={"flex"}
        justifyContent={"space-around"}
        isLoading={loadingApple}
        onClick={() => signInWithApple()}
      >
        <Image src="/images/applelogo2.png" height={"20px"} />
        <Text mr={2}>Continue with Apple</Text>
      </Button> */}
    </Flex>
  );
};
export default OAuthButtons;
