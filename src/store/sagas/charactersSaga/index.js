import { call, put } from "redux-saga/effects";
import { actiongetAllCharacters } from "../../actions/actionCharacters";
import {
  errorCharacters,
  pendingCharacters,
  successCharacters,
} from "../../reducers/charactersSlice";

const validate = (heroe) => {
  if (heroe.appearance.height[1].split(" ")[0] !== "0") {
    if (
      (!(heroe.powerstats.combat === "null") ||
        !(heroe.powerstats.intelligence === "null") ||
        !(heroe.powerstats.durability === "null") ||
        !(heroe.powerstats.power === "null")) &&
      heroe.biography.alignment !== "neutral"
    ) {
      return heroe;
    }
  }

  return false;
};

export function* getAllCharacters() {
  yield put(pendingCharacters());
  try {
    const response = yield call(actiongetAllCharacters);
    let allCharacters = [];
    const data = yield response.data;
    data.forEach((character) => {
      let heroeValidate = validate(character);

      if (heroeValidate) {
        allCharacters.push(heroeValidate);
      }
    });

    yield put(successCharacters({ characters: allCharacters }));
  } catch (e) {
    yield put(errorCharacters({ message: e }));
  }
}
