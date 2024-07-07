//Liste des importations
import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2E9BEF",
        color: "white",
        p: 2,
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="body1" align="center">
        &copy; {new Date().getFullYear()} @CareBusinessConsulting. All rights
        reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
