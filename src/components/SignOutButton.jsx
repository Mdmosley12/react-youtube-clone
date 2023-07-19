import { useAuth0 } from "@auth0/auth0-react";
import { Button, Stack } from "@mui/material";
import { useState } from "react";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const SignOutButton = () => {
  const { logout, isAuthenticated, user } = useAuth0();
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {isAuthenticated && (
        <img
          src={user.picture}
          alt="displayPicture"
          height={45}
          style={{ borderRadius: 30, cursor: "pointer" }}
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      )}
      <Stack
        sx={{
          display: `${!toggle ? "none" : "flex"}`,
          borderRadius: "5px",
          minWidth: "140px",
          position: "absolute",
          top: "35px",
          right: "0",
          marginX: "25px",
          marginY: "28px",
          zIndex: "10px",
          background: "rgb(82,82,82)",
          background:
            "linear-gradient(90deg, rgba(82,82,82,1) 0%, rgba(3,0,2,1) 100%)",
        }}
      >
        <Button
          variant="text"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            padding: "10px",
            borderRadius: "0",
            margin: "0",
            color: "white",
            "&:hover": { backgroundColor: "black" },
          }}
        >
          <AccountBoxOutlinedIcon sx={{ pr: "6px" }}></AccountBoxOutlinedIcon>
          View Profile
        </Button>
        <Button
          variant="text"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            padding: "10px",
            borderRadius: "0",
            margin: "0",
            color: "white",
            "&:hover": { backgroundColor: "black" },
          }}
          onClick={() => {
            logout({ logoutParams: { returnTo: window.location.origin } });
          }}
        >
          <LogoutOutlinedIcon sx={{ pr: "6px" }}></LogoutOutlinedIcon>
          Sign Out
        </Button>
      </Stack>
    </>
  );
};

export default SignOutButton;
