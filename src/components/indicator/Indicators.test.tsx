import { render } from "@testing-library/react";
import Indicators from "./Indicators";

describe("Indicators", () => {
  test("render 'Active Turbines'", () => {
    const { getByText } = render(<Indicators />);
    const activeTurbineIndicator = getByText(/Active Turbines/i);
    expect(activeTurbineIndicator).toBeInTheDocument();
  });

  test("render 'Active Nominal Power'", () => {
    const { getByText } = render(<Indicators />);
    const activeNominalPowerIndicator = getByText(/Active Nominal Power/i);
    expect(activeNominalPowerIndicator).toBeInTheDocument();
  });

  test("render 'Total Production'", () => {
    const { getByText } = render(<Indicators />);
    const totalProductionIndicator = getByText(/Total Production/i);
    expect(totalProductionIndicator).toBeInTheDocument();
  });

  test("render 'Avg. Potential Improve...'", () => {
    const { getByText } = render(<Indicators />);
    const avgPotentialImproveIndicator = getByText(/Avg. Potential Improve.../i);
    expect(avgPotentialImproveIndicator).toBeInTheDocument();
  });

  test("render 'Potential Improvement(h)'", () => {
    const { getByText } = render(<Indicators />);
    const potentialImprovemntIndicator = getByText(/Potential Improvement/i);
    expect(potentialImprovemntIndicator).toBeInTheDocument();
  });

  test("render 'Underperformance Rate'", () => {
    const { getByText } = render(<Indicators />);
    const underperformanceRateIndicator = getByText(/Underperformance Rate/i);
    expect(underperformanceRateIndicator).toBeInTheDocument();
  });
});
