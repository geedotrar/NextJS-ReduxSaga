import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddVendorProductRequest } from "@/redux-saga/action/vendorProductAction";
import { GetStockRequest } from "@/redux-saga/action/stocksAction";
import { AddPurchaseOrderHeaderRequest } from "@/redux-saga/action/purchaseOrderHeaderAction";
import { AddPurchaseOrderDetailRequest } from "@/redux-saga/action/purchaseOrderDetailAction";

export default function AddPoDetail(props: any) {
  const dispatch = useDispatch();
  const { PurchaseOrderHeaders } = useSelector((state: any) => state.PurchaseOrderHeaderState);
  const { stocks } = useSelector((state: any) => state.stocksState);

  const formik = useFormik({
    initialValues: {
      podePoheId: props.id,
      podeStock: undefined,
      podeOrderQty: undefined,
      podePrice: undefined,
      podeReceivedQty: undefined,
      podeRejectedQty: undefined,
      podeLineTotal: undefined,
    },
    onSubmit: async (values: any) => {
      console.log(values);
      dispatch(AddPurchaseOrderDetailRequest(values));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(!props.refresh);
    },
  });

  useEffect(() => {
    dispatch(GetStockRequest());
  }, []);

  //   console.log(stocks);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Add Details</h3>
              <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => props.setDisplay(false)}>
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
              </button>
            </div>
            {/*body*/}
            <div>
              <div>
                <div className="flex items-center justify-center p-12">
                  <div>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="w-full md:w-1/8 px-3 mb-6 md:mb-0">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">StockName</label>
                        <select
                          onChange={formik.handleChange}
                          id="podeStock"
                          name="podeStock"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        >
                          <option selected>Choose Stock</option>
                          {stocks &&
                            stocks.map((stock: any) => {
                              return (
                                <option key={stock.stockId} value={stock.stockId}>
                                  {stock.stockName}
                                </option>
                              );
                            })}
                        </select>
                      </div>

                      <div className="flex flex-wrap mt-6 -mx-3 mb-6">
                        <div className="w-48 px-5 mb-6 md:mb-0">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">Qty</label>
                          <input
                            id="podeOrderQty"
                            name="podeOrderQty"
                            onChange={formik.handleChange}
                            type="number"
                            min="0"
                            placeholder="0"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                        <div className="w-48 px-5 mb-6 md:mb-0">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">Price</label>
                          <input
                            id="podePrice"
                            name="podePrice"
                            onChange={formik.handleChange}
                            type="number"
                            min="0"
                            placeholder="0"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>

                        <div className="flex -mx-3 mb-6">
                          <div className="w-48 px-5 ">
                            <label className="mb-3 block text-base font-medium text-[#07074D]">Receive</label>
                            <input
                              id="podeReceivedQty"
                              name="podeReceivedQty"
                              onChange={formik.handleChange}
                              type="number"
                              min="0"
                              placeholder="0"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap mt-6 -mx-3 mb-6">
                        <div className="w-1/8 px-5 mb-6 md:mb-6">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">Rejected</label>
                          <input
                            id="podeRejectedQty"
                            name="podeRejectedQty"
                            onChange={formik.handleChange}
                            type="number"
                            min="0"
                            placeholder="0"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>

                        <div className="flex -mx-3 mb-6">
                          <div className="w-1/8 px-5 mb-6 md:mb-6">
                            <label className="mb-3 block text-base font-medium text-[#07074D]">Line Total</label>
                            <input
                              id="podeLineTotal"
                              name="podeLineTotal"
                              onChange={formik.handleChange}
                              type="number"
                              min="0"
                              placeholder="0"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          </div>
                        </div>
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
          </div>
        </div>
      </div>
    </>
  );
}
