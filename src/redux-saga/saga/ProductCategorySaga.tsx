import { call, put } from "redux-saga/effects";
import ProductCategory from "@/api/ProductCategory";
import {
  GetProdCategorySuccess,
  GetProdCategoryFailed,
  AddProdCategorySuccess,
  AddProdCategoryFailed,
  EditProdCategoryFailed,
  EditProdCategorySuccess,
  DelProdCategorySuccess,
  DelProdCategoryFailed,
  GetOneProdCategorySuccess,
  GetOneProdCategoryFailed,
} from "../action/productCategoryAction";

function* handleProdCategory(): any {
  try {
    const result = yield call(ProductCategory.GetData);
    yield put(GetProdCategorySuccess(result));
  } catch (error) {
    yield put(GetProdCategoryFailed(error));
  }
}

function* createProdCategory(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ProductCategory.Create, payload);
    yield put(AddProdCategorySuccess(result.data));
  } catch (error) {
    yield put(AddProdCategoryFailed(error));
  }
}

function* FindProdCategory(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ProductCategory.FindData, payload);
    yield put(GetOneProdCategorySuccess(result));
  } catch (error) {
    yield put(GetOneProdCategoryFailed(error));
  }
}
function* EditProdCategory(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ProductCategory.Update, payload);
    yield put(EditProdCategorySuccess(result.data));
  } catch (error) {
    yield put(EditProdCategoryFailed(error));
  }
}

function* DeleteProdCategory(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ProductCategory.Deleted, payload);
    yield put(DelProdCategorySuccess(result.data));
  } catch (error) {
    yield put(DelProdCategoryFailed(error));
  }
}

export { handleProdCategory, createProdCategory, EditProdCategory, FindProdCategory, DeleteProdCategory };
