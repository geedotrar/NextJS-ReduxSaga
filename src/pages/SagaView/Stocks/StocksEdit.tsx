import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { EditStockRequest, FindStockRequest } from "@/redux-saga/action/stocksAction";
// import { EditVendorProductRequest, FindVendorProductRequest } from "@/redux-saga/action/vendorProductAction";

export default function StocksEdit(props: any) {
  const dispatch = useDispatch();
  const { stock } = useSelector((state: any) => state.stocksState);
  console.log(stock);
  useEffect(() => {
    dispatch(FindStockRequest(props.id));
  }, []);

  // console.log(props.id);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: props.id,
      stockName: stock.stockName,
      stockReorderPoint: stock.stockReorderPoint,
      stockQuantity: stock.stockQuantity,
      stockUsed: stock.stockUsed,
      stockScrap: stock.stockScrap,
      stockSize: stock.stockSize,
      stockColor: stock.stockColor,
    },

    onSubmit: async (values) => {
      console.log(values);
      dispatch(EditStockRequest(values));
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
                <label className="mb-3 block text-base font-medium text-[#07074D]">Stock</label>
                <input
                  id="stockName"
                  name="stockName"
                  defaultValue={stock.stockName}
                  type="text"
                  placeholder="Stock"
                  onChange={formik.handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Re-OrderPoint</label>
                <input
                  id="stockReorderPoint"
                  name="stockReorderPoint"
                  defaultValue={stock.stockReorderPoint}
                  type="text"
                  placeholder="Re-OrderPoint"
                  onChange={formik.handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Quantity</label>
                <input
                  id="stockQuantity"
                  name="stockQuantity"
                  defaultValue={stock.stockQuantity}
                  type="text"
                  placeholder="Quantity"
                  onChange={formik.handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Used</label>
                <input
                  id="stockUsed"
                  name="stockUsed"
                  defaultValue={stock.stockUsed}
                  type="text"
                  placeholder="Used"
                  onChange={formik.handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Scrap</label>
                <input
                  id="stockScrap"
                  name="stockScrap"
                  defaultValue={stock.stockScrap}
                  type="text"
                  placeholder="Scrap"
                  onChange={formik.handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Size</label>
                <input
                  id="stockSize"
                  name="stockSize"
                  defaultValue={stock.stockSize}
                  type="text"
                  placeholder="Size"
                  onChange={formik.handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Color</label>
                <input
                  id="stockColor"
                  name="stockColor"
                  defaultValue={stock.stockColor}
                  type="text"
                  placeholder="color"
                  onChange={formik.handleChange}
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
