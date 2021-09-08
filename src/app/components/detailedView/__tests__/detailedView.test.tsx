import { DetailedView } from "..";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("DetailedView tests", () => {
  describe("Snapshot tests", () => {
    it("Should render detailed view page and match snapshot", () => {
      const result = shallow(<DetailedView />);
      expect(result).toBeTruthy();
      expect(result).toMatchSnapshot();
    });
  });
});
