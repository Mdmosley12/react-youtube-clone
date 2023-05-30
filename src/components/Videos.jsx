import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard, PlaylistCard } from "./";

const Videos = ({ videos, direction, justifyContent }) => {
  if (!videos?.length) return "Loading...";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent={{ xs: "center", md: justifyContent || "flex-start" }}
      gap={2}
      alignItems="center"
    >
      {videos.map((item, index) => {
        return (
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && (
              <ChannelCard
                channelDetail={item}
                channelId={item.snippet.channelId}
              />
            )}
            {item.id.playlistId && <PlaylistCard playlistDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
