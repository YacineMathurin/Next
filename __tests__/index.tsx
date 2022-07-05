import { fireEvent, render } from "@testing-library/react";
import Jumbotron from "../pages/index";
// jest.mock("next/router");

describe("Home page features", () => {
  it("Should rendered correctly welcome message", () => {
    const component = render(<Jumbotron />);
    const titleEl = component.getByTestId("title");

    expect(titleEl.textContent).toContain("Visit French");
  });
});
