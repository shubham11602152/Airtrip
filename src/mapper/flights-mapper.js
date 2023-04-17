export const toFlightsData = (response) => {
  const mappedResponse = response.map((flight) => {
    let flightTime = 0;
    let departureCity, arrivalCity;
    const {
      dt: departureTime,
      at: arrivalTime,
      al: airline,
      farepr: price,
      leg,
    } = flight;

    const route = leg?.[0]?.flights.map(({ fr, to, ft }) => {
      departureCity ??= fr;
      arrivalCity = to;
      flightTime += ft;
      return { fr, to, ft };
    });
    return {
      departureCity,
      departureTime,
      arrivalCity,
      arrivalTime,
      airline,
      flightTime,
      price,
      route,
    };
  });

  return mappedResponse;
};
