// import * as ActionType from "../constant/customerConstant";
import * as ActionType from "../constant/orderDetailConstant";

const INIT_STATE = {
  orderDetails: [],
  orderDetail: [],
};

const OrderDetailReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_ORDERDETAIL_REQUEST:
      return { ...state };
    case ActionType.GET_ORDERDETAIL_SUCCESS:
      return GetOrderDetailSuccessfully(state, action);

    case ActionType.ADD_ORDERDETAIL_REQUEST:
      return { ...state };
    case ActionType.ADD_ORDERDETAIL_SUCCESS:
      return AddOrderDetailSuccessfully(state, action);

    case ActionType.FIND_ORDERDETAIL_REQUEST:
      return { ...state };
    case ActionType.FIND_ORDERDETAIL_SUCCESS:
      return FindOrderDetailSuccessfully(state, action);

    case ActionType.EDIT_ORDERDETAIL_REQUEST:
      return { ...state };
    case ActionType.EDIT_ORDERDETAIL_SUCCESS:
      return EditOrderDetailSuccessfully(state, action);

    case ActionType.DEL_ORDERDETAIL_REQUEST:
      return { ...state };
    case ActionType.DEL_ORDERDETAIL_SUCCESS:
      return DeleteOrderDetailSuccessfully(state, action);

    default:
      return { ...state };
  }
};

const GetOrderDetailSuccessfully = (state: any, action: any) => {
  console.log(state);
  return {
    ...state,
    orderDetails: action.payload,
  };
};

const AddOrderDetailSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    orderDetails: [...state.customers, payload],
  };
};

const FindOrderDetailSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    orderDetail: payload,
  };
};

const EditOrderDetailSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DeleteOrderDetailSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default OrderDetailReduce;
