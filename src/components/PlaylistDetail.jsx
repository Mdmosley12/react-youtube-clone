import { useState, useEffect } from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import PlaylistVideos from "./PlaylistVideos";
import { demoChannelUrl, demoProfilePicture } from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";

const PlaylistDetail = () => {
  const [playlistDetail, setPlaylistDetail] = useState(null);
  const [playlistVideos, setPlaylistVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`playlists?id=${id}&part=snippet`).then((data) => {
      setPlaylistDetail(data?.items[0]);
    });

    fetchFromAPI(`playlistItems?playlistId=${id}&part=snippet`).then((data) => {
      setPlaylistVideos(data?.items);
    });
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <Box
          sx={{
            boxShadow: "none",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "356px", md: "300px" },
            height: "346px",
            margin: "auto",
            marginTop: "-110px",
            paddingBottom: "10px",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <Link>
              <CardMedia
                image={
                  playlistDetail?.snippet?.thumbnails?.maxres?.url ||
                  demoProfilePicture
                }
                alt={playlistDetail?.snippet?.title}
                sx={{
                  borderRadius: "15%",
                  height: "230px",
                  width: "390px",
                  mb: 2,
                }}
              />
              <Typography sx={{ color: "white" }}>
                {playlistDetail?.snippet?.title}
              </Typography>
            </Link>
            <Link
              to={
                playlistDetail?.snippet?.channelId
                  ? `/channel/${playlistDetail.snippet.channelId}`
                  : demoChannelUrl
              }
            >
              <Typography sx={{ fontSize: 14, color: "gray", ml: "5px" }}>
                {playlistDetail?.snippet?.channelTitle}
                <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
              </Typography>
            </Link>
          </CardContent>
        </Box>
      </Box>
      <Box>
        <PlaylistVideos playlistVideos={playlistVideos} />
      </Box>
    </Box>
  );
};

export default PlaylistDetail;
