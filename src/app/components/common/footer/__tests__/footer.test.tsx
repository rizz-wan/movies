import { Footer } from "..";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Footer tests", () => {
  describe("Snapshot tests", () => {
    it("Should render footer and match snapshot", () => {
      const result = shallow(<Footer />);
      expect(result).toBeTruthy();
      expect(result).toMatchSnapshot();
    });
  });
});
