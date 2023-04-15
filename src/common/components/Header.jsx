import React from "react";
import classes from "./Header.module.css";
import { Box, Button, Link, Paper, Stack, Typography } from "@mui/material";

export default function Header() {
  return (
    <Paper
      component={"header"}
      elevation={3}
      sx={{ borderRadius: 0, position: "sticky", top: 0 }}
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
          <Link underline="hover" className={classes["nav-link"]}>
            flight
          </Link>
          <Link underline="hover" className={classes["nav-link"]}>
            hotel
          </Link>
          <Link underline="hover" className={classes["nav-link"]}>
            visa
          </Link>
          <Link underline="hover" className={classes["nav-link"]}>
            holidays
          </Link>
        </Stack>
        <Button>Login</Button>
      </Stack>
    </Paper>
  );
}
