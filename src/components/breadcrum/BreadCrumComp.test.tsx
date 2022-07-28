import { render } from "@testing-library/react";
import BreadcrumbsComp from "./BreadcrumbsComp";

describe("Breadcrumbs", () => {
  test("render 'Wind Farm Overview'", () => {
    const { getByText } = render(<BreadcrumbsComp />);
    const windFarmOverviewLink = getByText(/Wind Farm Overview/i);
    expect(windFarmOverviewLink).toBeInTheDocument();
  });

  test("render 'Wind Farm 3'", () => {
    const { getByText } = render(<BreadcrumbsComp />);
    const windFarm3Link = getByText(/Wind Farm 3/i);
    expect(windFarm3Link).toBeInTheDocument();
  });

  test("render 'Underperformance'", () => {
    const { getByText } = render(<BreadcrumbsComp />);
    const underperformanceLink = getByText(/Underperformance/i);
    expect(underperformanceLink).toBeInTheDocument();
  });
});
