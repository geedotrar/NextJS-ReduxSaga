import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { AddVendorRequest } from "@/redux-saga/action/vendorAction";

export default function VendorModalCreate(props: any) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      vendorName: undefined,
      vendorActive: undefined,
      vendorPriority: undefined,
      vendorWebUrl: undefined,
    },
    onSubmit: async (values: any) => {
      console.log(values);
      dispatch(AddVendorRequest(values));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
  });

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl w-full">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Add Vendor</h3>
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
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">Vendor</label>
                          <input
                            id="vendorName"
                            name="vendorName"
                            onChange={formik.handleChange}
                            type="text"
                            placeholder="Vendor Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">Register Date</label>
                          <input
                            disabled
                            type="text"
                            placeholder={new Date().toString()}
                            className="w-full rounded-md border border-[#e0e0e0] bg-black py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">Status</label>
                          <select
                            onChange={formik.handleChange}
                            id="vendorActive"
                            name="vendorActive"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          >
                            <option selected>Select Status</option>
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                          </select>
                        </div>

                        <div className="w-full md:w-1/2 px-3">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">Priority</label>
                          <select
                            id="vendorPriority"
                            name="vendorPriority"
                            onChange={formik.handleChange}
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          >
                            <option selected>Select Status</option>
                            <option value="1">Priority</option>
                            <option value="0">No Priority</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">Site</label>
                        <input
                          id="vendorWeburl"
                          name="vendorWeburl"
                          onChange={formik.handleChange}
                          type="text"
                          placeholder="Vendor WebUrl"
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
          </div>
        </div>
      </div>
    </>
  );
}
