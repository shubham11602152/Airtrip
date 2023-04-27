import { render, screen } from "@testing-library/react";
import ResultCard from "./ResultCard";
import { toCurrency_INR } from "../../utils/utility";

const ResultCardData = {
  price: 5184,
  airline: ["6E"],
  flightTime: 15000,
  departureCity: "BOM",
  departureTime: "05:35",
  arrivalCity: "CCU",
  arrivalTime: "12:25",
};

describe("Result Card unit testing", () => {
  beforeEach(() => {
    render(<ResultCard {...ResultCardData} />);
  });

  test("Test if Price is rendered", () => {
    const price = screen.getByText(toCurrency_INR(ResultCardData.price));
    expect(price).toBeInTheDocument();
  });
  test("Test if Airline is rendered", () => {
    const airline = screen.getByText(ResultCardData.airline[0]);
    expect(airline).toBeInTheDocument();
  });
});
