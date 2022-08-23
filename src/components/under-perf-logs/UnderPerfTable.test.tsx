import { render } from "@testing-library/react";
import UnderPerfTable from "./UnderPerfTable";

describe("Underperformace Table", () => {
  test("render Underperformace Table", () => {
    const { getByText } = render(<UnderPerfTable />);
    const underperfTable = getByText(/Underperformace Logs/i);
    expect(underperfTable).toBeInTheDocument();
  });
});
