import { render, screen } from "@testing-library/react";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders header and footer", () => {
    render(<HomePage />);
    expect(screen.getByText(/exclusive/i)).toBeInTheDocument();
    expect(screen.getByText(/new arrivals/i)).toBeInTheDocument();
    expect(screen.getByText(/features/i)).toBeInTheDocument();
  });
});