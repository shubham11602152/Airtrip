export const toCurrency_INR = (value) => {
  return value.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumSignificantDigits: 3,
  });
};

export function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

export const secToHHMM = (seconds) => {
  const milliSeconds = seconds * 1000;
  const time = new Date(milliSeconds);

  const HH = time.getUTCHours();
  const MM = time.getUTCMinutes();

  return `${HH}h ${MM}m`;
};
