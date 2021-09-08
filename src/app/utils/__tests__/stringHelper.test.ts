import { capitalizeFirstLetter } from "../stringHelper";

describe("String helper tests", () => {
  it("Should return correct response", () => {
    const result = capitalizeFirstLetter("STRING Helper");
    expect(result).toEqual("String helper");
  });
});
