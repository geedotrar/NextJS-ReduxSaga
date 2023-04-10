import { call, put } from "redux-saga/effects";
import OrderDetailApi from "../../api/OrderDetailApi";
import {
  AddOrderDetailFailed,
  AddOrderDetailSuccess,
  DelOrderDetailFailed,
  DelOrderDetailSuccess,
  EditOrderDetailFailed,
  EditOrderDetailSuccess,
  FindOrderDetailFailed,
  FindOrderDetailSuccess,
  GetOrderDetailFailed,
  GetOrderDetailSuccess,
} from "../action/orderDetailAction";

function* handleOrderDetail(): any {
  try {
    const result = yield call(OrderDetailApi.GetData);
    console.log(result);
    yield put(GetOrderDetailSuccess(result));
  } catch (error) {
    yield put(GetOrderDetailFailed(error));
  }
}

function* createOrderDetail(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrderDetailApi.Create, payload);
    yield put(AddOrderDetailSuccess(result.data));
  } catch (error) {
    yield put(AddOrderDetailFailed(error));
  }
}
function* findOrderDetail(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrderDetailApi.FindData, payload);
    yield put(FindOrderDetailSuccess(result));
  } catch (error) {
    yield put(FindOrderDetailFailed(error));
  }
}
function* editOrderDetail(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrderDetailApi.Update, payload);
    yield put(EditOrderDetailSuccess(result.data));
  } catch (error) {
    yield put(EditOrderDetailFailed(error));
  }
}

function* deleteOrderDetail(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrderDetailApi.Deleted, payload);
    yield put(DelOrderDetailSuccess(result.data));
  } catch (error) {
    yield put(DelOrderDetailFailed(error));
  }
}

export { handleOrderDetail, createOrderDetail, findOrderDetail, editOrderDetail, deleteOrderDetail };
