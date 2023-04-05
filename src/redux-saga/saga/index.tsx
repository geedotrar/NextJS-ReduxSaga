import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeRegion from "../constant/regionConstant";
import { handleAddRegion, handleDeleteRegion, handleEditRegion, handleFindRegion, handleGetRegion } from "./RegionSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionTypeRegion.GET_DATA_REQUEST, handleGetRegion),
    takeEvery(ActionTypeRegion.ADD_DATA_REQUEST, handleAddRegion),
    takeEvery(ActionTypeRegion.GETONE_DATA_REQUEST, handleFindRegion),
    takeEvery(ActionTypeRegion.EDIT_DATA_REQUEST, handleEditRegion),
    takeEvery(ActionTypeRegion.DEL_DATA_REQUEST, handleDeleteRegion),
  ]);
}

export default watchAll;
