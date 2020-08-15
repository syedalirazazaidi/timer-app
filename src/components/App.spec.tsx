import React from "react";
import { shallow } from "enzyme";
import App1 from "./App1";
import Timer from "./Timer/Timer";

describe("App", () => {
  let container: any;

  beforeEach(() => (container = shallow(<App1 />)));

  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1);
  });

  it("should render the Timer Component", () => {
    expect(container.containsMatchingElement(<Timer />)).toEqual(true);
  });
});
