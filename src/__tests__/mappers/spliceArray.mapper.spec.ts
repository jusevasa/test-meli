import { spliceArray } from "../../mappers/spliceArray.mapper";

describe("spliceArray.mapper", () => {
  it("should splice array return length size MAX_NUMBER_ITEMS_ARRAY", () => {
    const array: string[] = ["1", "2", "3", "4", "5"];
    expect(spliceArray<string>(array).length).toEqual(4);
  });
});
