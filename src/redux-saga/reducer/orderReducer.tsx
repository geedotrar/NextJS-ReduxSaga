// import * as ActionType from "../constant/customerConstant";
import * as ActionType from "../constant/orderConstant";

const INIT_STATE = {
  orders: [],
  order: [],
};

const OrdersReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_ORDERS_REQUEST:
      return { ...state };
    case ActionType.GET_ORDERS_SUCCESS:
      return GetOrderSuccessfully(state, action);

    case ActionType.ADD_ORDERS_REQUEST:
      return { ...state };
    case ActionType.ADD_ORDERS_SUCCESS:
      return AddOrderSuccessfully(state, action);

    case ActionType.FIND_ORDERS_REQUEST:
      return { ...state };
    case ActionType.FIND_ORDERS_SUCCESS:
      return FindOrderSuccessfully(state, action);

    case ActionType.EDIT_ORDERS_REQUEST:
      return { ...state };
    case ActionType.EDIT_ORDERS_SUCCESS:
      return EditOrderSuccessfully(state, action);

    case ActionType.DEL_ORDERS_REQUEST:
      return { ...state };
    case ActionType.DEL_ORDERS_SUCCESS:
      return DeleteOrderSuccessfully(state, action);

    default:
      return { ...state };
  }
};

const GetOrderSuccessfully = (state: any, action: any) => {
  console.log(state);
  return {
    ...state,
    orders: action.payload,
  };
};

const AddOrderSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    orders: [...state.orders, payload],
  };
};

const FindOrderSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    order: payload,
  };
};

const EditOrderSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DeleteOrderSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default OrdersReduce;
