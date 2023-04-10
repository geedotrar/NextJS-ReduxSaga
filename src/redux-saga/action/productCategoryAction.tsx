import * as ActionType from "../constant/productCategoryConstant";

//GET
export const GetProdCategoryRequest = () => ({
  type: ActionType.GET_PRODCATEGORY_REQUEST,
});

export const GetProdCategorySuccess = (payload: any) => ({
  type: ActionType.GET_PRODCATEGORY_SUCCESS,
  payload,
});

export const GetProdCategoryFailed = (payload: any) => ({
  type: ActionType.GET_PRODCATEGORY_FAILED,
  payload,
});

//GET ONE
export const GetOneProdCategoryRequest = (payload: any) => ({
  type: ActionType.GETONE_PRODCATEGORY_REQUEST,
  payload,
});

export const GetOneProdCategorySuccess = (payload: any) => ({
  type: ActionType.GETONE_PRODCATEGORY_SUCCESS,
  payload,
});

export const GetOneProdCategoryFailed = (payload: any) => ({
  type: ActionType.GETONE_PRODCATEGORY_FAILED,
  payload,
});

//DELETE
export const DelProdCategoryRequest = (payload: any) => ({
  type: ActionType.DEL_PRODCATEGORY_REQUEST,
  payload,
});

export const DelProdCategorySuccess = (payload: any) => ({
  type: ActionType.DEL_PRODCATEGORY_SUCCESS,
  payload,
});

export const DelProdCategoryFailed = (payload: any) => ({
  type: ActionType.DEL_PRODCATEGORY_FAILED,
  payload,
});

//CREATE
export const AddProdCategoryRequest = (payload: any) => ({
  type: ActionType.ADD_PRODCATEGORY_REQUEST,
  payload,
});

export const AddProdCategorySuccess = (payload: any) => ({
  type: ActionType.ADD_PRODCATEGORY_SUCCESS,
  payload,
});

export const AddProdCategoryFailed = (payload: any) => ({
  type: ActionType.ADD_PRODCATEGORY_FAILED,
  payload,
});

//EDIT
export const EditProdCategoryRequest = (payload: any) => ({
  type: ActionType.EDIT_PRODCATEGORY_REQUEST,
  payload,
});

export const EditProdCategorySuccess = (payload: any) => ({
  type: ActionType.EDIT_PRODCATEGORY_SUCCESS,
  payload,
});

export const EditProdCategoryFailed = (payload: any) => ({
  type: ActionType.EDIT_PRODCATEGORY_FAILED,
  payload,
});
