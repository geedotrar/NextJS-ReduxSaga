import React, { useEffect, useState } from "react";
// import Hotels from "@/api/Hotels";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { EditVendorRequest } from "@/redux-saga/action/vendorAction";
import VendorApi from "@/api/VendorApi";
// import { EditHotelsRequest } from "@/redux-saga/action/hotelsAction";

export default function VenodrFineOne(props: any) {
  const dispatch = useDispatch();
  const { vendors } = useSelector((state: any) => state.vendorState);
  const [displayEdit, setDisplayEdit] = useState<any>(false);
  const [id, setId] = useState();

  useEffect(() => {
    VendorApi.FindData(props.id);
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: props.id,
      vendorName: vendors.vendorName,
      vendorActive: vendors.vendorActive,
      vendorPriority: vendors.vendorPriority,
      vendorWeburl: vendors.vendorWeburl,
    },

    onSubmit: async (values) => {
      dispatch(EditVendorRequest(values));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
  });

  const onClickUpdate = (id: any) => {
    setDisplayEdit(true);
    setId(id);
  };

  return (
    <div>
      <>
        <div className="flex ">
          <aside id="default-sidebar" className="border left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <h1 className="font-medium text-xl pb-2">Menu</h1>
              <ul className="space-y-2 font-medium">
                <li>
                  <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className="ml-3">Hotel</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className="flex-1 ml-3 whitespace-nowrap">Facilities</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className="flex-1 ml-3 whitespace-nowrap">Reviews</span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          <tbody>
            <label form="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              ID
            </label>
            <input
              type="text"
              name="id"
              id="id"
              value={formik.values.id}
              onChange={formik.handleChange}
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              disabled
            />
            <label form="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              vendorName,
            </label>
            <input
              type="text"
              name="vendorName"
              id="vendorName"
              value={formik.values.vendorName}
              onChange={formik.handleChange}
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              disabled
            />
            <label form="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Hotel Address
            </label>
            <input
              type="text"
              name="vendorActive"
              id="vendorActive"
              value={formik.values.vendorActive}
              onChange={formik.handleChange}
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            />
            <label form="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              vendor Priority
            </label>
            <input
              type="text"
              name="vendorPriority"
              id="vendorPriority"
              value={formik.values.vendorPriority}
              onChange={formik.handleChange}
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            />
          </tbody>
        </div>
      </>
    </div>
  );
}
