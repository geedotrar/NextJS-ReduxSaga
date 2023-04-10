import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { EditOrderDetailRequest, FindOrderDetailRequest } from "@/redux-saga/action/orderDetailAction";

export default function OrderDetailEdit(props: any) {
  const dispatch = useDispatch();
  const { orderDetail } = useSelector((state: any) => state.OrderDetailState);
  console.log(orderDetail);
  useEffect(() => {
    dispatch(FindOrderDetailRequest(props.id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: props.id,
      order: orderDetail.order ? orderDetail.order.id : null,
      product: orderDetail.product ? orderDetail.product.id : null,
      quantity: orderDetail.quantity,
      updatedat: orderDetail.updatedat,
    },

    onSubmit: async (values) => {
      console.log(values);
      dispatch(EditOrderDetailRequest(values));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(!props.refresh);
    },
  });

  return (
    <div>
      <div>
        <div className="flex items-center justify-center p-12">
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">ID</label>
                <input disabled type="text" placeholder={props.id} className="w-full rounded-md border border-[#e0e0e0] bg-black py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Order ID</label>
                <input
                  id="order"
                  name="order"
                  defaultValue={orderDetail.order ? orderDetail.order.id : null}
                  type="text"
                  placeholder="Order ID "
                  onChange={formik.handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Product ID</label>
                <input
                  id="product"
                  name="product"
                  defaultValue={orderDetail.product ? orderDetail.product.id : null}
                  type="text"
                  placeholder="Product ID "
                  onChange={formik.handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Quantity</label>
                <input
                  id="quantity"
                  name="quantity"
                  defaultValue={orderDetail.quantity}
                  type="text"
                  placeholder="Quantity"
                  onChange={formik.handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">UpdatedAt</label>
                <input
                  disabled
                  type="text"
                  placeholder={new Date().toString()}
                  className="w-full rounded-md border border-[#e0e0e0] bg-black py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div>
                <button type="submit" className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                  Submit
                </button>
                <button onClick={() => props.setDisplay(false)} className="mx-2 hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
