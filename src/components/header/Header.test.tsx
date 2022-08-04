import { render, screen } from "@testing-library/react";
import Header from './Header';

test("render Header", () => {
  render(<Header />);
  const headerElement = screen.getByText(/Wind Farm/i);
  expect(headerElement).toBeInTheDocument();
});
