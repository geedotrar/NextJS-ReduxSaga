// import * as ActionType from "../constant/customerConstant";
import * as ActionType from "../constant/orderDetailConstant";

//GET
export const GetOrderDetailRequest = () => ({
  type: ActionType.GET_ORDERDETAIL_REQUEST,
});

export const GetOrderDetailSuccess = (payload: any) => ({
  type: ActionType.GET_ORDERDETAIL_SUCCESS,
  payload,
});

export const GetOrderDetailFailed = (payload: any) => ({
  type: ActionType.GET_ORDERDETAIL_FAILED,
  payload,
});

//ADD
export const AddOrderDetailRequest = (payload: any) => ({
  type: ActionType.ADD_ORDERDETAIL_REQUEST,
  payload,
});

export const AddOrderDetailSuccess = (payload: any) => ({
  type: ActionType.ADD_ORDERDETAIL_SUCCESS,
  payload,
});

export const AddOrderDetailFailed = (payload: any) => ({
  type: ActionType.ADD_ORDERDETAIL_FAILED,
  payload,
});

//EDIT
export const EditOrderDetailRequest = (payload: any) => ({
  type: ActionType.EDIT_ORDERDETAIL_REQUEST,
  payload,
});

export const EditOrderDetailSuccess = (payload: any) => ({
  type: ActionType.EDIT_ORDERDETAIL_SUCCESS,
  payload,
});

export const EditOrderDetailFailed = (payload: any) => ({
  type: ActionType.EDIT_ORDERDETAIL_FAILED,
  payload,
});

//DELETE
export const DelOrderDetailRequest = (payload: any) => ({
  type: ActionType.DEL_ORDERDETAIL_REQUEST,
  payload,
});

export const DelOrderDetailSuccess = (payload: any) => ({
  type: ActionType.DEL_ORDERDETAIL_SUCCESS,
  payload,
});

export const DelOrderDetailFailed = (payload: any) => ({
  type: ActionType.DEL_ORDERDETAIL_FAILED,
  payload,
});

//FIND
export const FindOrderDetailRequest = (payload: any) => ({
  type: ActionType.FIND_ORDERDETAIL_REQUEST,
  payload,
});

export const FindOrderDetailSuccess = (payload: any) => ({
  type: ActionType.FIND_ORDERDETAIL_SUCCESS,
  payload,
});

export const FindOrderDetailFailed = (payload: any) => ({
  type: ActionType.FIND_ORDERDETAIL_FAILED,
  payload,
});
