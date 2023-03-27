import {
  Box,
  Skeleton,
  SkeletonText,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

const PostLoader: React.FC = () => {
  const { colorMode } = useColorMode();
  return (
    <Stack spacing={6}>
      <Box
        padding={"10px 10px"}
        boxShadow={"lg"}
        bg={colorMode === "dark" ? "gray.600" : "white"}
        borderRadius={4}
      >
        <SkeletonText mt={4} noOfLines={1} width={"40%"} spacing={4} />
        <SkeletonText mt={4} noOfLines={4} spacing={4} />
        <Skeleton mt={4} height={"200px"} />
      </Box>
      <Box
        padding={"10px 10px"}
        boxShadow={"lg"}
        bg={colorMode === "dark" ? "gray.600" : "white"}
        borderRadius={4}
      >
        <SkeletonText mt={4} noOfLines={1} width={"40%"} spacing={4} />
        <SkeletonText mt={4} noOfLines={4} spacing={4} />
        <Skeleton mt={4} height={"200px"} />
      </Box>
    </Stack>
  );
};
export default PostLoader;
