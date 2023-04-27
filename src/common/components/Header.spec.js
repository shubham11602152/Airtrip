import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Check Header UI components", () => {
  beforeEach(() => {
    render(<Header />);
  });

  test("Test if logo is rendered", () => {
    const logoText = screen.getByText(/airtrip/i);
    expect(logoText).toBeInTheDocument();
  });
});
