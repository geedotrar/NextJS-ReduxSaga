import * as ActionType from "../constant/productConstant";

const INIT_STATE = {
  products: [],
  product: [],
};

const ProductReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_PRODUCT_REQUEST:
      return { ...state };
    case ActionType.GET_PRODUCT_SUCCESS:
      return GetProductSuccessfully(state, action);

    case ActionType.ADD_PRODUCT_REQUEST:
      return { ...state };
    case ActionType.ADD_PRODUCT_SUCCESS:
      return AddProductSuccessfully(state, action);

    case ActionType.FIND_PRODUCT_REQUEST:
      return { ...state };
    case ActionType.FIND_PRODUCT_SUCCESS:
      return FindProductSuccessfully(state, action);

    case ActionType.EDIT_PRODUCT_REQUEST:
      return { ...state };
    case ActionType.EDIT_PRODUCT_SUCCESS:
      return EditProductSuccessfully(state, action);

    case ActionType.DEL_PRODUCT_REQUEST:
      return { ...state };
    case ActionType.DEL_PRODUCT_SUCCESS:
      return DeleteProductSuccessfully(state, action);

    default:
      return { ...state };
  }
};

const GetProductSuccessfully = (state: any, action: any) => {
  console.log(state);
  return {
    ...state,
    products: action.payload,
  };
};

const AddProductSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    products: [...state.products, payload],
  };
};

const FindProductSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    product: payload,
  };
};

const EditProductSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DeleteProductSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default ProductReduce;
