import { render, screen } from "@testing-library/react";
import BreadcrumbsComp from "./BreadcrumbsComp";


describe("Breadcrumbs", () => {
  test("render 'Wind Farm Overview'", () => {
    render(<BreadcrumbsComp />);
    expect(
      screen.getByRole("link", { name: /Wind Farm Overview/i })
    ).toBeInTheDocument();
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
