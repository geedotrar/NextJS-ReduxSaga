import { AddOrdersRequest } from "@/redux-saga/action/orderAction";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
// import { AddCustomerRequest } from "@/redux-saga/action/customerAction";

export default function OrdersCreate(props: any) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      user: undefined,
      totalproduct: undefined,
      totalprice: undefined,
    },
    onSubmit: async (values: any) => {
      console.log(values);
      dispatch(AddOrdersRequest(values));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
  });
  return (
    <div>
      <div>
        <div className="flex items-center justify-center p-12">
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">User ID</label>
                <input
                  id="user"
                  name="user"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="User ID"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Total Product</label>
                <input
                  id="totalproduct"
                  name="totalproduct"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="totalproduct"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Total Price</label>
                <input
                  id="totalprice"
                  name="totalprice"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="totalprice"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">CreatedAt</label>
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
