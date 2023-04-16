import React from "react";
import classes from "./Header.module.css";
import { Box, Button, Link, Paper, Stack, styled } from "@mui/material";

const StyledLink = styled((props) => (
  <Link {...props} underline="none" color="white" />
))(``);

export default function Header() {
  return (
    <Paper
      component={"header"}
      elevation={3}
      sx={{
        borderRadius: 0,
        position: "sticky",
        top: 0,
        backgroundColor: "primary",
        zIndex: 1300,
      }}
    >
      <Stack
        className={classes.header}
        direction={"row"}
        justifyContent={"space-between"}
        gap={3}
        padding={1}
      >
        <Box className={classes.logo_wrapper}>
          <h2>AIRTRIP</h2>
        </Box>
        <Stack
          component={"nav"}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={2}
        >
          <StyledLink underline="hover" className={classes["nav-link"]}>
            flight
          </StyledLink>
          <StyledLink underline="hover" className={classes["nav-link"]}>
            hotel
          </StyledLink>
          <StyledLink underline="hover" className={classes["nav-link"]}>
            visa
          </StyledLink>
          <StyledLink underline="hover" className={classes["nav-link"]}>
            holidays
          </StyledLink>
        </Stack>
        <Button sx={{ color: "#fff" }}>Login</Button>
      </Stack>
    </Paper>
  );
}
