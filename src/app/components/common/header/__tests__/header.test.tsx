import React from "react";
import { Header } from "..";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App tests", () => {
  describe("Snapshot tests", () => {
    it("Should render app and match snapshot", () => {
      const result = shallow(<Header />);
      expect(result).toBeTruthy();
      expect(result).toMatchSnapshot();
    });
  });
});
