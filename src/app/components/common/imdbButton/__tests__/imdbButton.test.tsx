import { ImdbButton } from "..";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("ImdbButton tests", () => {
  describe("Snapshot tests", () => {
    it("Should render imdb button and match snapshot", () => {
      const result = shallow(<ImdbButton id="some id" />);
      expect(result).toBeTruthy();
      expect(result).toMatchSnapshot();
    });
  });
});
