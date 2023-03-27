import { Comment } from "@/atoms/commentAtom";
import { Box, Flex, Icon, Spinner, Stack, Text } from "@chakra-ui/react";
import { FaReddit } from "react-icons/fa";
import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";
import React from "react";
import moment from "moment";

type CommentItemProps = {
  comment: Comment;
  onDeleteComment: (comment: Comment) => void;
  loadingDelete: boolean;
  userId: string;
};

const CommentItem: React.FC<CommentItemProps> = ({
  comment,
  onDeleteComment,
  loadingDelete,
  userId,
}) => {
  return (
    <Flex>
      <Box mr={2}>
        <Icon as={FaReddit} />
      </Box>
      <Stack spacing={1}>
        <Stack direction={"row"} align={"center"} fontSize={"8pt"}>
          <Text>{comment.creatorDisplayText}</Text>
          <Text>
            {moment(new Date(comment.createdAt.seconds * 1000)).fromNow()}
          </Text>
          {loadingDelete && <Spinner size={"sm"} />}
        </Stack>
        <Text fontSize={"10pt"}>{comment.text}</Text>
        <Stack
          direction={"row"}
          align="center"
          cursor="pointer"
          color={"gray.500"}
        >
          <IoArrowUpCircleOutline />
          <IoArrowDownCircleOutline />
          {userId === comment.creatorId && (
            <>
              <Text fontSize={"10pt"} onClick={() => onDeleteComment(comment)}>
                Delete
              </Text>
            </>
          )}
        </Stack>
      </Stack>
    </Flex>
  );
};
export default CommentItem;
