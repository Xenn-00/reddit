import { authModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/clientApp";
import { FIREBASE_ERRORS } from "@/firebase/errors";
import { Button, Flex, Input, Text, useColorMode } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const { colorMode } = useColorMode();
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInWithEmailAndPassword(loginForm.email, loginForm.password);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // update form state
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        name="email"
        placeholder="Email"
        _placeholder={{ color: "gray.500" }}
        type="email"
        mb={2}
        onChange={onChange}
        border={"1px solid gray"}
        _hover={{
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        fontSize={"10pt"}
        required
      />
      <Input
        name="password"
        placeholder="Password"
        _placeholder={{ color: "gray.500" }}
        type="password"
        mb={2}
        onChange={onChange}
        border={"1px solid gray"}
        _hover={{
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        fontSize={"10pt"}
        required
      />
      {error && (
        <Text
          textAlign={"center"}
          fontSize={"10pt"}
          color={colorMode === "dark" ? "red.400" : "red"}
        >
          {FIREBASE_ERRORS[error.message as keyof typeof FIREBASE_ERRORS]}
        </Text>
      )}
      <Button type="submit" width={"100%"} height={"36px"} mt={2} mb={2}>
        Log In
      </Button>

      <Flex justifyContent={"center"} mb={2}>
        <Text fontSize={"9pt"} mr={1}>
          Forgot your password ?
        </Text>
        <Text
          fontSize={"9pt"}
          color={"blue.500"}
          cursor={"pointer"}
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "resetPassword",
            }))
          }
        >
          Reset
        </Text>
      </Flex>

      <Flex fontSize={"9pt"} justifyContent={"center"}>
        <Text mr={1}>New Here ?</Text>
        <Text
          color={"blue.500"}
          fontWeight={700}
          cursor={"pointer"}
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "signUp",
            }))
          }
        >
          SIGN UP
        </Text>
      </Flex>
    </form>
  );
};
export default Login;
