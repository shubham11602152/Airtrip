import {
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { toCurrency_INR } from "../../utils/utility";

export default function ResultCard({
  price,
  airline,
  flightTime,
  departureCity,
  departureTime,
  arrivalCity,
  arrivalTime,
}) {
  const CardField = ({ label, value, sx }) => (
    <Stack alignItems={"center"} {...sx}>
      <Typography variant="body">{label}</Typography>
      {<Typography>{value ?? "-"}</Typography>}
    </Stack>
  );
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Stack direction={"row"} gap={3}>
            <CardField label="Airline" value={airline} />
            <CardField label="Flight time" value={flightTime} />
            <CardField label="Dep" value={departureCity} />
            <CardField label="Dep time" value={departureTime} />
            <CardField label="Arr" value={arrivalCity} />
            <CardField label="Arr time" value={arrivalTime} />
            <CardField
              sx={{ ml: "auto" }}
              label="Price"
              value={toCurrency_INR(price)}
            />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
