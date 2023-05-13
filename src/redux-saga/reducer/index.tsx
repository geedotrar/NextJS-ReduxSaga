import { combineReducers } from "redux";
import RegionReduce from "./regionReducer";
import CustomerReduce from "./customerReducer";
import OrdersReduce from "./orderReducer";
import ProdCategoryReduce from "./productCategoryReducer";
import ProductReduce from "./productReducer";
import OrderDetailReduce from "./orderDetailReducer";
import UserReducer from "./userReducer";
import VendorReducer from "./vendorReducer";
import VendorProductReducer from "./vendorProductReducer";
import StocksReducer from "./stocksReducer";
import StockDetailReducer from "./stockDetailReducer";
import PurchaseOrderHeaderReducer from "./purchaseOrderHeaderReducer";

const rootReducer = combineReducers({
  regionState: RegionReduce,
  ProdCategoryState: ProdCategoryReduce,
  CustomerState: CustomerReduce,
  OrderState: OrdersReduce,
  ProductState: ProductReduce,
  OrderDetailState: OrderDetailReduce,
  userState: UserReducer,

  vendorState: VendorReducer,
  vendorProductState: VendorProductReducer,
  stocksState: StocksReducer,
  stockDetailState: StockDetailReducer,
  PurchaseOrderHeaderState: PurchaseOrderHeaderReducer,
});

export default rootReducer;
