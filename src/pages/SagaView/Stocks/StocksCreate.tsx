// import { AddVendorProductRequest } from "@/redux-saga/action/vendorProductAction";
import { AddStockRequest } from "@/redux-saga/action/stocksAction";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";

export default function StocksCreate(props: any) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      stockName: undefined,
      stockReorderPoint: undefined,
      stockQuantity: undefined,
      stockUsed: undefined,
      stockScrap: undefined,
      stockSize: undefined,
      stockColor: undefined,
    },
    onSubmit: async (values: any) => {
      console.log(values);
      dispatch(AddStockRequest(values));
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
                <label className="mb-3 block text-base font-medium text-[#07074D]">Stock</label>
                <input
                  id="stockName"
                  name="stockName"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Stock"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Re-OrderPoint</label>
                <input
                  id="stockReorderPoint"
                  name="stockReorderPoint"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Qty Stocked"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Quantity</label>
                <input
                  id="stockQuantity"
                  name="stockQuantity"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Qty"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Used</label>
                <input
                  id="stockUsed"
                  name="stockUsed"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Used"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Scrap</label>
                <input
                  id="stockScrap"
                  name="stockScrap"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Scrap"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Size</label>
                <input
                  id="stockSize"
                  name="stockSize"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Size"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Color</label>
                <input
                  id="stockColor"
                  name="stockColor"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Color"
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
