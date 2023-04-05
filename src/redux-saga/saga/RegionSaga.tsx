import { call, put } from "redux-saga/effects";
import Region from "@/api/Region";
import { GetRegionSuccess, GetRegionFailed, AddRegionSuccess, AddRegionFailed, GetOneRegionSuccess, GetOneRegionFailed, EditRegionSuccess, EditRegionFailed, DelRegionSuccess, DelRegionFailed } from "../action/regionAction";

function* handleGetRegion(): any {
  try {
    const result = yield call(Region.GetData);
    yield put(GetRegionSuccess(result));
  } catch (error) {
    yield put(GetRegionFailed(error));
  }
}

function* handleAddRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Region.Create, payload);
    yield put(AddRegionSuccess(result.data));
  } catch (error) {
    yield put(AddRegionFailed(error));
  }
}

function* handleFindRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Region.findData, payload);
    yield put(GetOneRegionSuccess(result));
  } catch (error) {
    yield put(GetOneRegionFailed(error));
  }
}

function* handleEditRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Region.Update, payload);
    yield put(EditRegionSuccess(result.data));
  } catch (error) {
    yield put(EditRegionFailed(error));
  }
}

function* handleDeleteRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Region.deleted, payload);
    yield put(DelRegionSuccess(result.data));
  } catch (error) {
    yield put(DelRegionFailed(error));
  }
}
export { handleGetRegion, handleAddRegion, handleFindRegion, handleEditRegion, handleDeleteRegion };
