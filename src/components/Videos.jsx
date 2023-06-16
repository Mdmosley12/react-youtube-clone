import { Stack, Box, Button } from "@mui/material";
import { VideoCard, ChannelCard, PlaylistCard } from "./";
import { useState } from "react";

const Videos = ({ videos, direction, justifyContent, limit }) => {
  const [visibleVideos, setVisibleVideos] = useState(limit);

  if (!videos?.length) return "Loading...";

  const showMoreVideos = () => {
    setVisibleVideos(videos.length);
  };

  const showLessVideos = () => {
    setVisibleVideos(limit);
  };

  const renderedVideos = limit ? videos.slice(0, visibleVideos) : videos;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent={{ xs: "center", md: justifyContent || "flex-start" }}
      gap={2}
      alignItems="center"
    >
      {renderedVideos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && (
            <ChannelCard
              channelDetail={item}
              channelId={item.snippet.channelId}
            />
          )}
          {item.id.playlistId && (
            <PlaylistCard
              playlistDetail={item}
              playlistId={item.id.playlistId}
            />
          )}
        </Box>
      ))}
      {limit && (
        <Button
          variant="outlined"
          color="primary"
          onClick={
            visibleVideos < videos.length ? showMoreVideos : showLessVideos
          }
        >
          {visibleVideos < videos.length ? "See More..." : "See Less..."}
        </Button>
      )}
    </Stack>
  );
};

export default Videos;
