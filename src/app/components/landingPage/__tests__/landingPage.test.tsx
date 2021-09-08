import { LandingPage } from "..";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("LandingPage tests", () => {
  describe("Snapshot tests", () => {
    it("Should render landing page and match snapshot", () => {
      const result = shallow(<LandingPage />);
      expect(result).toBeTruthy();
      expect(result).toMatchSnapshot();
    });
  });
});
