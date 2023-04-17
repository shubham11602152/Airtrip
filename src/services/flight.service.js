import flightData from "../data/api-data.json";
import { toFlightsData } from "../mapper/flights-mapper";

export const getFlightsData = async () => {
  const { data, error } = flightData;
  const allVendorsMerged = data.flights.reduce(
    (acc, curr) => [...acc, ...curr.results.j],
    []
  );
  return { data: toFlightsData(allVendorsMerged), error };
};
