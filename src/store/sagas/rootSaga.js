import { takeLatest } from "redux-saga/effects";
import { getToken } from "./authSaga";
import { getAllCharacters } from "./charactersSaga";

export default function* rootSaga() {
  yield takeLatest("Auth/startLogin", getToken);
  yield takeLatest("Characters/startGetAllCharacters", getAllCharacters);
}
