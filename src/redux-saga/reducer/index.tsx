import { combineReducers } from "redux";
import RegionReduce from "./regionReducer";
import CustomerReduce from "./customerReducer";
import OrdersReduce from "./orderReducer";
import ProdCategoryReduce from "./productCategoryReducer";
import ProductReduce from "./productReducer";
import OrderDetailReduce from "./orderDetailReducer";
import UserReducer from "./userReducer";

const rootReducer = combineReducers({
  regionState: RegionReduce,
  ProdCategoryState: ProdCategoryReduce,
  CustomerState: CustomerReduce,
  OrderState: OrdersReduce,
  ProductState: ProductReduce,
  OrderDetailState: OrderDetailReduce,
  userState: UserReducer,
});

export default rootReducer;
