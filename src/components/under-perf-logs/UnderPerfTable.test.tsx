import { render } from "@testing-library/react";
import UnderPerfTable from "./UnderPerfTable";

describe("Underperformace Table", () => {
  test("render Underperformace Tabl ", () => {
    const {getByRole} = render(<UnderPerfTable />);
    const underperfTable = getByRole('table')
    expect(underperfTable).toBeInTheDocument();
  });
})
