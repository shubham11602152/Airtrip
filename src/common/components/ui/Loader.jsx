import { Box, CircularProgress, Stack } from "@mui/material";
import React from "react";

export default function Loader() {
  return (
    <Stack
      sx={{ width: "100%", minHeight: "inherit" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <CircularProgress
        sx={{
          color: "#0000ff",
        }}
      />
    </Stack>
  );
}
