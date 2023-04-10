import * as ActionType from "../constant/customerConstant";

const INIT_STATE = {
  customers: [],
  customer: [],
};

const CustomerReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_CUSTOMER_REQUEST:
      return { ...state };
    case ActionType.GET_CUSTOMER_SUCCESS:
      return GetCustomerSuccessfully(state, action);

    case ActionType.ADD_CUSTOMER_REQUEST:
      return { ...state };
    case ActionType.ADD_CUSTOMER_SUCCESS:
      return AddCustomerSuccessfully(state, action);

    case ActionType.FIND_CUSTOMER_REQUEST:
      return { ...state };
    case ActionType.FIND_CUSTOMER_SUCCESS:
      return FindCustomerSuccessfully(state, action);

    case ActionType.EDIT_CUSTOMER_REQUEST:
      return { ...state };
    case ActionType.EDIT_CUSTOMER_SUCCESS:
      return EditCustomerSuccessfully(state, action);

    case ActionType.DEL_CUSTOMER_REQUEST:
      return { ...state };
    case ActionType.DEL_CUSTOMER_SUCCESS:
      return DeleteCustomerSuccessfully(state, action);

    default:
      return { ...state };
  }
};

const GetCustomerSuccessfully = (state: any, action: any) => {
  console.log(state);
  return {
    ...state,
    customers: action.payload,
  };
};

const AddCustomerSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    customers: [...state.customers, payload],
  };
};

const FindCustomerSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    customer: payload,
  };
};

const EditCustomerSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DeleteCustomerSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default CustomerReduce;
