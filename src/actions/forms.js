import { ACTIVATE_TABLE_ROW } from "./types";

export const activateTableRow = (row) => {
  return {
    type: ACTIVATE_TABLE_ROW,
    payload: row
  };
};