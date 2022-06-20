import { call, put } from "redux-saga/effects";
import { actionLogin } from "../../actions/actionLogin";
import { error, pending, success } from "../../reducers/authSlice";

export function* getToken(data) {
  const user = data.payload;
  yield put(pending());
  try {
    const response = yield call(actionLogin, user);
    const token = response.data.token;
    yield put(success({ token }));
  } catch (e) {
    yield put(error({ message: "Please provide valid email and password" }));
  }
}
