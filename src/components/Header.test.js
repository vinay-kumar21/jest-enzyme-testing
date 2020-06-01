import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("renders without any error", () => {
    const wrapper = findByTestAtrr(component, "headerComponent");

    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    const logoImg = findByTestAtrr(component, "logoIMG");

    expect(logoImg.length).toBe(1);
  });

  it('Snapshot test of Header Component',()=>{
      const snapShot=findByTestAtrr(component,'headerComponent');
      expect(snapShot).toMatchSnapshot();
  })
});
