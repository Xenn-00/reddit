import About from "@/components/Community/About";
import PageContent from "@/components/Layout/PageContent";
import NewPostForm from "@/components/Posts/NewPostForm";
import { auth } from "@/firebase/clientApp";
import useCommunityData from "@/hooks/useCommunityData";
import { Box, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const submit: React.FC = () => {
  const [user] = useAuthState(auth);
  // const communityStateValue = useRecoilValue(communityState);
  const { communityStateValue } = useCommunityData();
  const { colorMode } = useColorMode();
  console.log("Community : ", communityStateValue);
  return (
    <PageContent>
      <>
        <Box
          p={"14px 0px"}
        //   borderBottom={"1px solid"}
          borderColor={colorMode === "dark" ? "gray.600" : "white"}
          bg={colorMode === "dark" ? "gray.700" : "white"}
          borderRadius={4}
        >
          <Text
            ml={4}
            color={colorMode === "dark" ? "gray.100" : "gray.500"}
            fontWeight={600}
          >
            Create post
          </Text>
        </Box>
        {user && <NewPostForm user={user} communityImageURL={communityStateValue.currentCommunity?.imageURL} />}
      </>
      <>
        {communityStateValue.currentCommunity && (
          <About communityData={communityStateValue.currentCommunity} />
        )}
      </>
    </PageContent>
  );
};
export default submit;
