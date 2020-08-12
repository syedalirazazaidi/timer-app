import React from "react";
import { shallow } from "enzyme";
import App from "./App";

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/hello world/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App", () => {
  it("should render a <div />", () => {
    const container = shallow(<App />);
    expect(container.find("div").length).toEqual(2);
  });
});
