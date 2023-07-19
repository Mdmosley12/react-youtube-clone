import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

const SignInButton = () => {
  const { loginWithRedirect, isAuthenticated, isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <Button
        variant="outlined"
        style={{
          borderRadius: 20,
          boxShadow: "none",
        }}
        className="category-btn"
      >
        Loading...
      </Button>
    );
  }
  if (error) {
    return (
      <Button
        variant="outlined"
        style={{
          borderRadius: 20,
          boxShadow: "none",
        }}
        className="category-btn"
      >
        Oops...{error.message}
      </Button>
    );
  }

  return (
    !isAuthenticated && (
      <Button
        variant="outlined"
        style={{
          borderRadius: 20,
          boxShadow: "none",
        }}
        className="category-btn"
        onClick={loginWithRedirect}
      >
        <AccountBoxOutlinedIcon sx={{ pr: "6px" }}></AccountBoxOutlinedIcon>
        Sign In
      </Button>
    )
  );
};

export default SignInButton;
