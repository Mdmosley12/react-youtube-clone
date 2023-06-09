import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle, List } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
} from "../utils/constants";

const PlaylistCard = ({ playlistDetail, playlistId }) => {
  const destination = !playlistId
    ? `/video/${playlistDetail?.snippet.resourceId.videoId}`
    : `/playlist/${playlistId}`;

  return (
    <Card
      sx={{
        width: { xs: "365px", sm: "358px", md: "300px" },
        boxShadow: "none",
        borderRadius: 0,
        mb: "10px",
        mt: "-10px",
      }}
    >
      <Link to={destination}>
        <CardMedia
          image={
            playlistDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={playlistDetail?.snippet?.title}
          sx={{ width: { xs: "365px", sm: "358px", md: "300px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={`/playlist/${playlistDetail?.id?.playlistId}`}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
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
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {playlistDetail?.snippet?.channelTitle || demoChannelTitle}
            <CheckCircle
              sx={{
                fontSize: 12,
                color: "gray",
                ml: "5px",
              }}
            />
          </Typography>
        </Link>
        <Typography variant="subtitle2" fontWeight="bold" color="gray">
          Playlist
          <List
            sx={{
              mb: "-4px",
              fontSize: 19,
              color: "gray",
              ml: "5px",
            }}
          />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlaylistCard;
