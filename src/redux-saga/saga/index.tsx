import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeProductCategory from "../constant/productCategoryConstant";
import * as ActionTypeCustomer from "../constant/customerConstant";
import * as ActionTypeOrders from "../constant/orderConstant";
import * as ActionTypeProduct from "../constant/productConstant";
import * as ActionTypeOrderDetail from "../constant/orderDetailConstant";
import * as ActionTypeUser from "../constant/userConstant";
import { DeleteProdCategory, EditProdCategory, FindProdCategory, createProdCategory, handleProdCategory } from "./ProductCategorySaga";
import { createCustomer, deleteCustomer, editCustomer, findCustomer, handleCustomer } from "./CustomerSaga";
import { createOrders, deleteOrders, editOrders, findOrders, handleOrders } from "./OrderSaga";
import { createProduct, deleteProduct, editProduct, findProduct, handleProduct } from "./ProductSaga";
import { createOrderDetail, deleteOrderDetail, editOrderDetail, findOrderDetail, handleOrderDetail } from "./OrderDetailSaga";
import { handleSignin, handleSignout, handleSignup } from "./UserSaga";

import * as ActionTypeVendor from "../constant/vendorConstant";
import * as ActionTypeVendorProduct from "../constant/vendorProductConstant";
import * as ActionTypeStock from "../constant/stocksConstant";
import * as ActionTypeStockDetail from "../constant/stockDetailConstant";

import { createVendor, deleteVendor, editVendor, findVendor, handleVendor } from "./VendorSaga";
import { createVendorProduct, deleteVendorProduct, editVendorProduct, findVendorProduct, handleVendorProduct } from "./VendorProductSaga";
import { createStock, deleteStock, editStock, findStock, handleStock } from "./StocksSaga";
import { createStockDetail, deleteStockDetail, editStockDetail, findStockDetail, handleStockDetail } from "./StockDetailSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionTypeProductCategory.GET_PRODCATEGORY_REQUEST, handleProdCategory),
    takeEvery(ActionTypeProductCategory.ADD_PRODCATEGORY_REQUEST, createProdCategory),
    takeEvery(ActionTypeProductCategory.GETONE_PRODCATEGORY_REQUEST, FindProdCategory),
    takeEvery(ActionTypeProductCategory.EDIT_PRODCATEGORY_REQUEST, EditProdCategory),
    takeEvery(ActionTypeProductCategory.DEL_PRODCATEGORY_REQUEST, DeleteProdCategory),

    takeEvery(ActionTypeCustomer.GET_CUSTOMER_REQUEST, handleCustomer),
    takeEvery(ActionTypeCustomer.ADD_CUSTOMER_REQUEST, createCustomer),
    takeEvery(ActionTypeCustomer.FIND_CUSTOMER_REQUEST, findCustomer),
    takeEvery(ActionTypeCustomer.EDIT_CUSTOMER_REQUEST, editCustomer),
    takeEvery(ActionTypeCustomer.DEL_CUSTOMER_REQUEST, deleteCustomer),

    takeEvery(ActionTypeOrders.GET_ORDERS_REQUEST, handleOrders),
    takeEvery(ActionTypeOrders.ADD_ORDERS_REQUEST, createOrders),
    takeEvery(ActionTypeOrders.FIND_ORDERS_REQUEST, findOrders),
    takeEvery(ActionTypeOrders.EDIT_ORDERS_REQUEST, editOrders),
    takeEvery(ActionTypeOrders.DEL_ORDERS_REQUEST, deleteOrders),

    takeEvery(ActionTypeProduct.GET_PRODUCT_REQUEST, handleProduct),
    takeEvery(ActionTypeProduct.ADD_PRODUCT_REQUEST, createProduct),
    takeEvery(ActionTypeProduct.FIND_PRODUCT_REQUEST, findProduct),
    takeEvery(ActionTypeProduct.EDIT_PRODUCT_REQUEST, editProduct),
    takeEvery(ActionTypeProduct.DEL_PRODUCT_REQUEST, deleteProduct),

    takeEvery(ActionTypeOrderDetail.GET_ORDERDETAIL_REQUEST, handleOrderDetail),
    takeEvery(ActionTypeOrderDetail.ADD_ORDERDETAIL_REQUEST, createOrderDetail),
    takeEvery(ActionTypeOrderDetail.FIND_ORDERDETAIL_REQUEST, findOrderDetail),
    takeEvery(ActionTypeOrderDetail.EDIT_ORDERDETAIL_REQUEST, editOrderDetail),
    takeEvery(ActionTypeOrderDetail.DEL_ORDERDETAIL_REQUEST, deleteOrderDetail),

    takeEvery(ActionTypeUser.USER_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.USER_SIGNOUT_REQUEST, handleSignout),
    takeEvery(ActionTypeUser.USER_SIGNUP_REQUEST, handleSignup),

    // mproject
    takeEvery(ActionTypeVendor.GET_VENDOR_REQUEST, handleVendor),
    takeEvery(ActionTypeVendor.ADD_VENDOR_REQUEST, createVendor),
    takeEvery(ActionTypeVendor.FIND_VENDOR_REQUEST, findVendor),
    takeEvery(ActionTypeVendor.EDIT_VENDOR_REQUEST, editVendor),
    takeEvery(ActionTypeVendor.DEL_VENDOR_REQUEST, deleteVendor),

    takeEvery(ActionTypeVendorProduct.GET_VENDORPRODUCT_REQUEST, handleVendorProduct),
    takeEvery(ActionTypeVendorProduct.ADD_VENDORPRODUCT_REQUEST, createVendorProduct),
    takeEvery(ActionTypeVendorProduct.FIND_VENDORPRODUCT_REQUEST, findVendorProduct),
    takeEvery(ActionTypeVendorProduct.EDIT_VENDORPRODUCT_REQUEST, editVendorProduct),
    takeEvery(ActionTypeVendorProduct.DEL_VENDORPRODUCT_REQUEST, deleteVendorProduct),

    takeEvery(ActionTypeStock.GET_STOCK_REQUEST, handleStock),
    takeEvery(ActionTypeStock.ADD_STOCK_REQUEST, createStock),
    takeEvery(ActionTypeStock.FIND_STOCK_REQUEST, findStock),
    takeEvery(ActionTypeStock.EDIT_STOCK_REQUEST, editStock),
    takeEvery(ActionTypeStock.DEL_STOCK_REQUEST, deleteStock),

    takeEvery(ActionTypeStockDetail.GET_STOCKDETAIL_REQUEST, handleStockDetail),
    takeEvery(ActionTypeStockDetail.ADD_STOCKDETAIL_REQUEST, createStockDetail),
    takeEvery(ActionTypeStockDetail.FIND_STOCKDETAIL_REQUEST, findStockDetail),
    takeEvery(ActionTypeStockDetail.EDIT_STOCKDETAIL_REQUEST, editStockDetail),
    takeEvery(ActionTypeStockDetail.DEL_STOCKDETAIL_REQUEST, deleteStockDetail),
  ]);
}

export default watchAll;
