import { Stack, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

const VideoComments = () => {
  const [commentThread, setCommentThread] = useState(null);
  const [visibleComments, setVisibleComments] = useState(10);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(
      `commentThreads?part=snippet&videoId=${id}&maxResults=50`
    ).then((data) => {
      setCommentThread(data.items);
    });
  }, [id]);

  const showMoreComments = () => {
    setVisibleComments(commentThread.length);
  };

  const showLessComments = () => {
    setVisibleComments(10);
  };

  if (!commentThread) return "Loading...";

  return (
    <Stack
      sx={{ color: "#fff" }}
      direction="column"
      justifyContent="flex-start"
      py={1}
      px={2}
    >
      <Typography variant="subtitle1">
        {commentThread.length} Comments
      </Typography>
      {commentThread.slice(0, visibleComments).map((item, index) => {
        return <CommentCard key={index} comment={item} />;
      })}
      {visibleComments < commentThread.length ? (
        <Button
          sx={{ display: "flex", justifyContent: "flex-start", width: "120px" }}
          variant="outlined"
          color="primary"
          onClick={showMoreComments}
        >
          See More...
        </Button>
      ) : (
        <Button
          sx={{ display: "flex", justifyContent: "flex-start", width: "120px" }}
          variant="outlined"
          color="primary"
          onClick={showLessComments}
        >
          See Less...
        </Button>
      )}
    </Stack>
  );
};

export default VideoComments;
