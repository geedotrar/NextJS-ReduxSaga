import { call, put } from "redux-saga/effects";
import OrderApi from "@/api/OrderApi";
import { AddOrdersFailed, AddOrdersSuccess, DelOrdersFailed, DelOrdersSuccess, EditOrdersFailed, EditOrdersSuccess, FindOrdersFailed, FindOrdersSuccess, GetOrdersFailed, GetOrdersSuccess } from "../action/orderAction";

function* handleOrders(): any {
  try {
    const result = yield call(OrderApi.GetData);
    console.log(result);
    yield put(GetOrdersSuccess(result));
  } catch (error) {
    yield put(GetOrdersFailed(error));
  }
}

function* createOrders(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrderApi.Create, payload);
    yield put(AddOrdersSuccess(result.data));
  } catch (error) {
    yield put(AddOrdersFailed(error));
  }
}
function* findOrders(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrderApi.FindData, payload);
    yield put(FindOrdersSuccess(result));
  } catch (error) {
    yield put(FindOrdersFailed(error));
  }
}
function* editOrders(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrderApi.Update, payload);
    yield put(EditOrdersSuccess(result.data));
  } catch (error) {
    yield put(EditOrdersFailed(error));
  }
}

function* deleteOrders(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrderApi.Deleted, payload);
    yield put(DelOrdersSuccess(result.data));
  } catch (error) {
    yield put(DelOrdersFailed(error));
  }
}

export { handleOrders, createOrders, findOrders, editOrders, deleteOrders };
