// import ProductApi from "@/api/ProductApi";
import ProductApi from "../../api/ProductApi";
import { call, put } from "redux-saga/effects";
import { AddProductFailed, AddProductSuccess, DelProductFailed, DelProductSuccess, EditProductFailed, EditProductSuccess, FindProductFailed, FindProductSuccess, GetProductFailed, GetProductSuccess } from "../action/productAction";

function* handleProduct(): any {
  try {
    const result = yield call(ProductApi.GetData);
    console.log(result);
    yield put(GetProductSuccess(result));
  } catch (error) {
    yield put(GetProductFailed(error));
  }
}

function* createProduct(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ProductApi.Upload, payload);
    yield put(AddProductSuccess(result.data));
  } catch (error) {
    yield put(AddProductFailed(error));
  }
}
function* findProduct(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ProductApi.FindData, payload);
    yield put(FindProductSuccess(result));
  } catch (error) {
    yield put(FindProductFailed(error));
  }
}
function* editProduct(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ProductApi.Upload, payload);
    yield put(EditProductSuccess(result.data));
  } catch (error) {
    yield put(EditProductFailed(error));
  }
}

function* deleteProduct(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ProductApi.Deleted, payload);
    yield put(DelProductSuccess(result.data));
  } catch (error) {
    yield put(DelProductFailed(error));
  }
}

export { handleProduct, createProduct, findProduct, editProduct, deleteProduct };
