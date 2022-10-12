import { MAX_NUMBER_ITEMS_ARRAY } from "../constants/mapper.constants";

export const spliceArray = <T>(data: T[]): T[] => {
  return data.splice(1, MAX_NUMBER_ITEMS_ARRAY);
};
