import { AddVendorProductRequest } from "@/redux-saga/action/vendorProductAction";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
// import { AddProdCategoryRequest } from "@/redux-saga/action/productCategoryAction";
// import { AddVendorRequest } from "@/redux-saga/action/vendorAction";

export default function VendorProductCreate(props: any) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      veproStock: undefined,
      veproQtyStocked: undefined,
      veproQtyRemaining: undefined,
      veproPrice: undefined,
      // vendorWebUrl: undefined,
    },
    onSubmit: async (values: any) => {
      console.log(values);
      dispatch(AddVendorProductRequest(values));
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
                <label className="mb-3 block text-base font-medium text-[#07074D]">Stock Name</label>
                <input
                  id="veproStock"
                  name="veproStock"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Vendor Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Qty Stocked</label>
                <input
                  id="veproQtyStocked"
                  name="veproQtyStocked"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Qty Stocked"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Remaining</label>
                <input
                  id="veproQtyRemaining"
                  name="veproQtyRemaining"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Remaining"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Sell Price</label>
                <input
                  id="veproPrice"
                  name="veproPrice"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Sell Price"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
