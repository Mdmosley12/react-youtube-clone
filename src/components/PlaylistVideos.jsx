import { Box, Stack } from "@mui/material";
import React from "react";
import PlaylistCard from "./PlaylistCard";

const PlaylistVideos = ({ playlistVideos }) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent={{ xs: "center", md: "center" }}
      gap={2}
      alignItems="center"
    >
      {playlistVideos.map((item, index) => {
        return (
          <Box key={index}>
            {item.snippet.playlistId && <PlaylistCard playlistDetail={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default PlaylistVideos;
