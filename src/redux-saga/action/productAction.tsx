import * as ActionType from "../constant/productConstant";

//GET
export const GetProductRequest = () => ({
  type: ActionType.GET_PRODUCT_REQUEST,
});

export const GetProductSuccess = (payload: any) => ({
  type: ActionType.GET_PRODUCT_SUCCESS,
  payload,
});

export const GetProductFailed = (payload: any) => ({
  type: ActionType.GET_PRODUCT_FAILED,
  payload,
});

//ADD
export const AddProductRequest = (payload: any) => ({
  type: ActionType.ADD_PRODUCT_REQUEST,
  payload,
});

export const AddProductSuccess = (payload: any) => ({
  type: ActionType.ADD_PRODUCT_SUCCESS,
  payload,
});

export const AddProductFailed = (payload: any) => ({
  type: ActionType.ADD_PRODUCT_FAILED,
  payload,
});

//EDIT
export const EditProductRequest = (payload: any) => ({
  type: ActionType.EDIT_PRODUCT_REQUEST,
  payload,
});

export const EditProductSuccess = (payload: any) => ({
  type: ActionType.EDIT_PRODUCT_SUCCESS,
  payload,
});

export const EditProductFailed = (payload: any) => ({
  type: ActionType.EDIT_PRODUCT_FAILED,
  payload,
});

//DELETE
export const DelProductRequest = (payload: any) => ({
  type: ActionType.DEL_PRODUCT_REQUEST,
  payload,
});

export const DelProductSuccess = (payload: any) => ({
  type: ActionType.DEL_PRODUCT_SUCCESS,
  payload,
});

export const DelProductFailed = (payload: any) => ({
  type: ActionType.DEL_PRODUCT_FAILED,
  payload,
});

//FIND
export const FindProductRequest = (payload: any) => ({
  type: ActionType.FIND_PRODUCT_REQUEST,
  payload,
});

export const FindProductSuccess = (payload: any) => ({
  type: ActionType.FIND_PRODUCT_SUCCESS,
  payload,
});

export const FindProductFailed = (payload: any) => ({
  type: ActionType.FIND_PRODUCT_FAILED,
  payload,
});
