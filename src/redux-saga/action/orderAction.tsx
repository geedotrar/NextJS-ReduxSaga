import * as ActionType from "../constant/orderConstant";

//GET
export const GetOrdersRequest = () => ({
  type: ActionType.GET_ORDERS_REQUEST,
});

export const GetOrdersSuccess = (payload: any) => ({
  type: ActionType.GET_ORDERS_SUCCESS,
  payload,
});

export const GetOrdersFailed = (payload: any) => ({
  type: ActionType.GET_ORDERS_FAILED,
  payload,
});

//ADD
export const AddOrdersRequest = (payload: any) => ({
  type: ActionType.ADD_ORDERS_REQUEST,
  payload,
});

export const AddOrdersSuccess = (payload: any) => ({
  type: ActionType.ADD_ORDERS_SUCCESS,
  payload,
});

export const AddOrdersFailed = (payload: any) => ({
  type: ActionType.ADD_ORDERS_FAILED,
  payload,
});

//EDIT
export const EditOrdersRequest = (payload: any) => ({
  type: ActionType.EDIT_ORDERS_REQUEST,
  payload,
});

export const EditOrdersSuccess = (payload: any) => ({
  type: ActionType.EDIT_ORDERS_SUCCESS,
  payload,
});

export const EditOrdersFailed = (payload: any) => ({
  type: ActionType.EDIT_ORDERS_FAILED,
  payload,
});

//DELETE
export const DelOrdersRequest = (payload: any) => ({
  type: ActionType.DEL_ORDERS_REQUEST,
  payload,
});

export const DelOrdersSuccess = (payload: any) => ({
  type: ActionType.DEL_ORDERS_SUCCESS,
  payload,
});

export const DelOrdersFailed = (payload: any) => ({
  type: ActionType.DEL_ORDERS_FAILED,
  payload,
});

//FIND
export const FindOrdersRequest = (payload: any) => ({
  type: ActionType.FIND_ORDERS_REQUEST,
  payload,
});

export const FindOrdersSuccess = (payload: any) => ({
  type: ActionType.FIND_ORDERS_SUCCESS,
  payload,
});

export const FindOrdersFailed = (payload: any) => ({
  type: ActionType.FIND_ORDERS_FAILED,
  payload,
});
