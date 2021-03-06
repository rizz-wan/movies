import { Header } from "..";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Header tests", () => {
  describe("Snapshot tests", () => {
    it("Should render header and match snapshot", () => {
      const result = shallow(<Header onThemeChange={() => {}} />);
      expect(result).toBeTruthy();
      expect(result).toMatchSnapshot();
    });
  });
});
