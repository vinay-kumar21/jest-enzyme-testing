import React from "react";
import { shallow } from "enzyme";
import ListItem from "./ListItem";
import { findByTestAtrr, checkProps } from '../Utils/Utils';


describe("ListItem Component", () => {
  describe("Checking Proptypes", () => {
    it("Should not throw warning", () => {
      const expectedProps = {
        title: "Example Titel",
        desc: "Example Desc"
      };
      const propsErr = checkProps(ListItem, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        title: "Example Titel",
        desc: "Example Desc"
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("Renders without any errors", () => {
      const component = findByTestAtrr(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });

    it("Should render a title", () => {
      const title = findByTestAtrr(wrapper, "titleComponent");
      expect(title.length).toBe(1);
    });
    it("Should render a desc", () => {
      const desc = findByTestAtrr(wrapper, "descComponent");
      expect(desc.length).toBe(1);
    });
  });

  describe('Should NOT render',()=>{
    let wrapper;

    beforeEach(() => {
      const props = {
        desc: "Example Desc"
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Component is not rendered',()=>{
        const component= findByTestAtrr(wrapper,'listItemComponent');
        expect(component.length).toBe(0);
    })

  })
});
