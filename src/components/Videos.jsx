import { Stack, Box, Button } from "@mui/material";
import { VideoCard, ChannelCard, PlaylistCard } from "./";
import { useState } from "react";

const Videos = ({ videos, direction, justifyContent }) => {
  const [visibleVideos, setVisibleVideos] = useState(10);

  if (!videos?.length) return "Loading...";

  const showMoreVideos = () => {
    setVisibleVideos(videos.length);
  };

  const showLessVideos = () => {
    setVisibleVideos(10);
  };

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent={{ xs: "center", md: justifyContent || "flex-start" }}
      gap={2}
      alignItems="center"
    >
      {videos.slice(0, visibleVideos).map((item, index) => {
        return (
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
        );
      })}
      {visibleVideos < videos.length ? (
        <Button variant="outlined" color="primary" onClick={showMoreVideos}>
          See More...
        </Button>
      ) : (
        <Button variant="outlined" color="primary" onClick={showLessVideos}>
          See Less...
        </Button>
      )}
    </Stack>
  );
};

export default Videos;
