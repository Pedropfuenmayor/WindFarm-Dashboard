import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("render Header", () => {
  render(<Header />);
  const headerElement = screen.getByText(/annea/i);
  expect(headerElement).toBeInTheDocument();
});
