import { VALIDATION, ATTEMPT } from "./types";

/*
* Ove dvije funkcije se koriste prilikom autektikacije korisnika prilikom logina
*/

/*
* Ova funcija vraća true ukoliko korisnik je logiran
*/
export const authenticateUser = (validation) => {
  return {
    type: VALIDATION,
    payload: validation
  };
};

/*
* Ova funcija vraća true ukoliko korisnik nije upisao točne kredencija, te se koristi za
* prikazivanje info poruke kod forme na loginu
*/
export const failedAttempt = (attempt) => {
  return {
    type: ATTEMPT,
    payload: attempt
  };
};