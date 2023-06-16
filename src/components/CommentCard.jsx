import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { demoProfilePicture } from "../utils/constants";

const CommentCard = ({
  comment: {
    snippet: { topLevelComment },
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "85%", md: "85%" },
        boxShadow: "none",
        borderRadius: 0,
        backgroundColor: "black",
        color: "white",
        display: "flex",
        alignItems: "center",
        paddingBottom: "10px",
      }}
    >
      <CardMedia
        image={
          topLevelComment?.snippet?.authorProfileImageUrl || demoProfilePicture
        }
        sx={{
          height: "40px",
          width: "40px",
          borderRadius: "50%",
          flexShrink: 0,
        }}
      />
      <CardContent>
        <Typography paddingBottom="10px" fontWeight="bold" fontSize="12px">
          @{topLevelComment?.snippet?.authorDisplayName}
        </Typography>
        <Typography paddingBottom="10px" variant="subtitle1">
          {topLevelComment?.snippet?.textOriginal}
        </Typography>
        <Stack direction="row" gap={1}>
          <ThumbUpOffAltIcon
            sx={{ fontSize: 28, color: "gray", ml: "5px" }}
          ></ThumbUpOffAltIcon>
          <Typography>{topLevelComment.snippet.likeCount}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CommentCard;
