import React, { useEffect, useState } from "react";
import { getFlightsData } from "../../../services/flight.service";
import ResultCard from "../ui/ResultCard";
import { Container, Stack, Typography } from "@mui/material";
import Loader from "../ui/Loader";

export default function FlightResultsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { data: flightData, error } = await getFlightsData();
      setData(flightData);
      setLoading(false);
    }

    fetchData();

    return () => {
      setLoading(false);
    };
  }, []);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ minHeight: "inherit" }}>
        <Loader />
      </Container>
    );
  }

  if (!data.length) {
    return (
      <Container
        maxWidth="lg"
        sx={{
          minHeight: "inherit",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>No Results Found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h6" marginBottom={1}>
        {data.length} Results
      </Typography>
      <Stack gap={2}>
        {data.map((flight, index) => {
          return <ResultCard key={index} {...flight} />;
        })}
      </Stack>
    </Container>
  );
}
