import * as ActionType from "../constant/productCategoryConstant";

const INIT_STATE = {
  prodCats: [],
  prodCat: [],
};

const ProdCategoryReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_PRODCATEGORY_REQUEST:
      return { ...state };
    case ActionType.GET_PRODCATEGORY_SUCCESS:
      return GetProdCategorySuccessfully(state, action);

    case ActionType.ADD_PRODCATEGORY_REQUEST:
      return { ...state };
    case ActionType.ADD_PRODCATEGORY_SUCCESS:
      return AddProdCategorySuccessfully(state, action);

    case ActionType.GETONE_PRODCATEGORY_REQUEST:
      return { ...state };
    case ActionType.GETONE_PRODCATEGORY_SUCCESS:
      return FindProdCategorySuccessfully(state, action);

    case ActionType.EDIT_PRODCATEGORY_REQUEST:
      return { ...state };
    case ActionType.EDIT_PRODCATEGORY_SUCCESS:
      return EditProdCategorySuccessfully(state, action);

    case ActionType.DEL_PRODCATEGORY_REQUEST:
      return { ...state };
    case ActionType.DEL_PRODCATEGORY_SUCCESS:
      return DeleteProdCategorySuccessfully(state, action);

    default:
      return { ...state };
  }
};

const GetProdCategorySuccessfully = (state: any, action: any) => {
  return {
    ...state,
    prodCats: action.payload,
  };
};

const AddProdCategorySuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    prodCats: [...state.prodCats, payload],
  };
};

const FindProdCategorySuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    prodCat: payload,
  };
};

const EditProdCategorySuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DeleteProdCategorySuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default ProdCategoryReduce;
