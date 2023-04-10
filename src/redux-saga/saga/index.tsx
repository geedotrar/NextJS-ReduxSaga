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
  ]);
}

export default watchAll;
