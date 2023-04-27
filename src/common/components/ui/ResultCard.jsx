import {
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { secToHHMM, toCurrency_INR } from "../../utils/utility";

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
      <Typography variant="body">{value ?? "-"}</Typography>
      <Typography variant="body2" color="grey">
        {label}
      </Typography>
    </Stack>
  );
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Stack direction={"row"} gap={3} flexWrap={"wrap"}>
            <CardField sx={{ mr: "auto" }} label="Airline" value={airline} />
            <CardField label="Departure" value={departureCity} />
            <CardField label="Departure time" value={departureTime} />
            <CardField
              sx={{ mx: "auto" }}
              label="Flight time"
              value={secToHHMM(flightTime)}
            />
            <CardField label="Arrival" value={arrivalCity} />
            <CardField label="Arrival time" value={arrivalTime} />
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
