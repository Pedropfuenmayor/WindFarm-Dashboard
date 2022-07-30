import { render, screen } from "@testing-library/react";
import Header from './Header';
import '@testing-library/jest-dom'

test("render Header", () => {
  render(<Header />);
  const headerElement = screen.getByText(/annea/i);
  expect(headerElement).toBeInTheDocument();
});
