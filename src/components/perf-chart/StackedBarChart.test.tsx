import { render } from "@testing-library/react";
import StackedBarChart from "./StackedBarChart";

describe("Stacked Bar Chart", () => {
  test("render Stacked Bar Chart", () => {
    const { getByText } = render(<StackedBarChart />);
    const stackedBarChart = getByText(/Performace & Underperformace/i);
    expect(stackedBarChart).toBeInTheDocument();
  });
});
