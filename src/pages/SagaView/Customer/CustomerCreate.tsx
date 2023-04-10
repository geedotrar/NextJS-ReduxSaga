import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
// import { AddProdCategoryRequest } from "@/redux-saga/action/productCategoryAction";
import { AddCustomerRequest } from "@/redux-saga/action/customerAction";

export default function CustomerCreate(props: any) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: undefined,
      lastname: undefined,
      user: undefined,
    },
    onSubmit: async (values: any) => {
      console.log(values);
      dispatch(AddCustomerRequest(values));
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
                <label className="mb-3 block text-base font-medium text-[#07074D]">First Name</label>
                <input
                  id="firstname"
                  name="firstname"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Last Name</label>
                <input
                  id="lastname"
                  name="lastname"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="lastname"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">User ID</label>
                <input
                  id="user"
                  name="user"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="user"
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
