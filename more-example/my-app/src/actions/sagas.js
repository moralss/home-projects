import { takeEvery, put, call } from "redux-saga/effects";
import { fetchData, recieveApiData } from "./index";


function* fetchFromServer(action) {
  try {
    const data = yield call(fetchData);
    yield put(recieveApiData(data));
  } catch (e) {
    console.log(e);
  }
}




export function* fetchMessageWatcher() {
    yield takeEvery("FETCH_MESSAGE", fetchFromServer);
  }