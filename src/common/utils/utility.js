export const toReadableProperties = (data) => {
  const {
    fr: departureCity,
    dt: departureTime,
    to: arrivalCity,
    at: arrivalTime,
    al: airline,
    ft: flightTime,
    farepr: price,
  } = data;

  return {
    departureCity,
    departureTime,
    arrivalCity,
    arrivalTime,
    airline,
    flightTime,
    price,
  };
};

export const toCurrency_INR = (value) => {
  return value.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumSignificantDigits: 3,
  });
};
