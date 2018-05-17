import { ACTIVATE_TABLE_ROW } from "./types";

/*
* Ove funkcija se koriste kod odabira reda za izmjene, vraća red na kojem se nalazi edit button
* te prilikom prikazivanja modala, informacije iz se koriste za popunjanje modala
*/

export const activateTableRow = (row) => {
  return {
    type: ACTIVATE_TABLE_ROW,
    payload: row
  };
};