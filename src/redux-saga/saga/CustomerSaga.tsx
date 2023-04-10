import { call, put } from "redux-saga/effects";
import Customer from "../../api/Customer";
import {
  GetCustomerSuccess,
  GetCustomerFailed,
  AddCustomerSuccess,
  AddCustomerFailed,
  FindCustomerSuccess,
  FindCustomerFailed,
  EditCustomerSuccess,
  EditCustomerFailed,
  DelCustomerSuccess,
  DelCustomerFailed,
} from "../action/customerAction";

function* handleCustomer(): any {
  try {
    const result = yield call(Customer.GetData);
    console.log(result);
    yield put(GetCustomerSuccess(result));
  } catch (error) {
    yield put(GetCustomerFailed(error));
  }
}

function* createCustomer(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Customer.Create, payload);
    yield put(AddCustomerSuccess(result.data));
  } catch (error) {
    yield put(AddCustomerFailed(error));
  }
}
function* findCustomer(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Customer.FindData, payload);
    yield put(FindCustomerSuccess(result));
  } catch (error) {
    yield put(FindCustomerFailed(error));
  }
}
function* editCustomer(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Customer.Update, payload);
    yield put(EditCustomerSuccess(result.data));
  } catch (error) {
    yield put(EditCustomerFailed(error));
  }
}

function* deleteCustomer(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Customer.Deleted, payload);
    yield put(DelCustomerSuccess(result.data));
  } catch (error) {
    yield put(DelCustomerFailed(error));
  }
}

export { handleCustomer, createCustomer, findCustomer, editCustomer, deleteCustomer };
