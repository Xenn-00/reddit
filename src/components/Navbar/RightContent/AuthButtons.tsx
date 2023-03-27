import React from "react";
import { Button } from "@chakra-ui/react";
import { authModalState } from "@/atoms/authModalAtom";
import { useSetRecoilState } from "recoil";

const AuthButtons: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <>
      <Button
        variant={"outline"}
        mr="5px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        onClick={() => setAuthModalState({ open: true, view: "login" })}
      >
        Log In
      </Button>
      <Button
        mr={"5px"}
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        onClick={() => setAuthModalState({ open: true, view: "signUp" })}
      >
        Sign Up
      </Button>
    </>
  );
};
export default AuthButtons;
