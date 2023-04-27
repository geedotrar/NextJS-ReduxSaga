import { call, put } from "redux-saga/effects";
import StockDetailApi from "@/api/StockDetailApi";

import {
  AddStockDetailFailed,
  AddStockDetailSuccess,
  DelStockDetailFailed,
  DelStockDetailSuccess,
  EditStockDetailFailed,
  EditStockDetailSuccess,
  FindStockDetailFailed,
  FindStockDetailSuccess,
  GetStockDetailFailed,
  GetStockDetailSuccess,
} from "../action/stockDetailAction";

function* handleStockDetail(): any {
  try {
    const result = yield call(StockDetailApi.GetData);
    console.log(result);
    yield put(GetStockDetailSuccess(result));
  } catch (error) {
    yield put(GetStockDetailFailed(error));
  }
}

function* createStockDetail(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(StockDetailApi.Create, payload);
    yield put(AddStockDetailSuccess(result.data));
  } catch (error) {
    yield put(AddStockDetailFailed(error));
  }
}
function* findStockDetail(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(StockDetailApi.FindData, payload);
    yield put(FindStockDetailSuccess(result));
  } catch (error) {
    yield put(FindStockDetailFailed(error));
  }
}
function* editStockDetail(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(StockDetailApi.Update, payload);
    yield put(EditStockDetailSuccess(result.data));
  } catch (error) {
    yield put(EditStockDetailFailed(error));
  }
}

function* deleteStockDetail(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(StockDetailApi.Deleted, payload);
    yield put(DelStockDetailSuccess(result.data));
  } catch (error) {
    yield put(DelStockDetailFailed(error));
  }
}

export { handleStockDetail, createStockDetail, findStockDetail, editStockDetail, deleteStockDetail };