import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EventNoteIcon from "@mui/icons-material/EventNote";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#DBA39A" }}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <EventNoteIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Keeper App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
