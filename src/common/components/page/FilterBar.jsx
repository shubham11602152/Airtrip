import {
  Autocomplete,
  Paper,
  Stack,
  TextField,
  Button,
  Container,
} from "@mui/material";
import React from "react";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import { DatePicker } from "@mui/x-date-pickers";

const top100Films = [{ label: "Mumbai, IN" }, { label: "Chandigarh, IN" }];

export default function FilterBar() {
  return (
    <Paper
      elevation={3}
      sx={{
        position: "sticky",
        top: 56,
        borderRadius: 0,
        zIndex: 1300,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          width="100%"
          height={100}
          direction="row"
          padding={2}
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="From" variant="standard" />
            )}
          />
          <MultipleStopIcon color="primary" />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="To" variant="standard" />
            )}
          />
          <DatePicker label="Depart" />
          <Button variant="outlined" color="primary">
            Search
          </Button>
        </Stack>
      </Container>
    </Paper>
  );
}
