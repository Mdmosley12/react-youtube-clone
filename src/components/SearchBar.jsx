import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const naviagte = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm) {
      naviagte(`/search/${searchTerm}`);
    }
    setSearchTerm("");
  };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        display: "flex",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <IconButton
        type="submit"
        onSubmit={() => {}}
        sx={{ p: "10px", color: "red" }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
