import { all } from "redux-saga/effects";
import { watchSongActions } from "./songSaga"; 
export function* rootSaga() {
  yield all([watchSongActions()]);
}