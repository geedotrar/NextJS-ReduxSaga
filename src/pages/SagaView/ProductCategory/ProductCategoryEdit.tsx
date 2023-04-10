import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { EditProdCategoryRequest, GetOneProdCategoryRequest } from "@/redux-saga/action/productCategoryAction";

export default function ProdCategoryEdit(props: any) {
  const dispatch = useDispatch();
  const { prodCat } = useSelector((state: any) => state.ProdCategoryState);
  console.log(prodCat);
  useEffect(() => {
    dispatch(GetOneProdCategoryRequest(props.id));
  }, []);

  // console.log(props.id);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: props.id,
      name: prodCat.name,
      description: prodCat.description,
    },

    onSubmit: async (values) => {
      console.log(values);
      dispatch(EditProdCategoryRequest(values));
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
                <label className="mb-3 block text-base font-medium text-[#07074D]">Category Name</label>
                <input
                  id="name"
                  name="name"
                  defaultValue={prodCat.name}
                  type="text"
                  placeholder="Category Name"
                  onChange={formik.handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Description</label>
                <input
                  id="description"
                  name="description"
                  defaultValue={prodCat.description}
                  type="text"
                  placeholder="Description"
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
