
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";

const Header: React.FC = () => {
  return (      
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My Next.js App</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

