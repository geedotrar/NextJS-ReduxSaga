import { AddProductRequest } from "@/redux-saga/action/productAction";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function ProductCreate(props: any) {
  const dispatch = useDispatch();

  const [previewImg, setPreviewImg] = useState<any>();
  const [upload, setUpload] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: undefined,
      description: undefined,
      category: undefined,
      price: undefined,
      file: undefined,
    },
    onSubmit: async (values: any) => {
      let payload = new FormData();
      payload.append("name", values.name);
      payload.append("description", values.description);
      payload.append("category", values.category);
      payload.append("price", values.price);
      payload.append("file", values.file);

      console.log(values);
      dispatch(AddProductRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
  });

  const uploadConfig = (name: any) => (event: any) => {
    let reader = new FileReader();
    const file = event.target.files[0];
    console.log(event.target.files);
    reader.onload = () => {
      formik.setFieldValue("file", file);
      setPreviewImg(reader.result);
    };
    reader.readAsDataURL(file);
    setUpload(true);
  };
  const onClear = (event: any) => {
    event.preventDefault();
    setPreviewImg(null);
    setUpload(false);
  };

  return (
    <div>
      <div>
        <div className="flex items-center justify-center p-12">
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Name</label>
                <input
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Category Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Description</label>
                <input
                  id="description"
                  name="description"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Description"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Category</label>
                <input
                  id="category"
                  name="category"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="Category"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Price</label>
                <input
                  id="price"
                  name="price"
                  onChange={formik.handleChange}
                  type="text"
                  placeholder="price"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              {/* photo*/}
              <div>
                <div className="col-span-full">
                  <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                    Photo
                  </label>

                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    {upload === false ? (
                      <>
                        <span>Kosong</span>
                      </>
                    ) : (
                      <>
                        <div>
                          <img src={previewImg} alt="img" />
                        </div>
                        <div>
                          <button
                            className="text-red-700 hover:text-white text-xs border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                            onClick={onClear}
                          >
                            Remove
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                  <div>
                    <input
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      aria-describedby="user_avatar_help"
                      id="user_avatar"
                      type="file"
                      onChange={uploadConfig("file")}
                    />
                    <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">
                      A profile picture is useful to confirm your are logged into your account
                    </div>
                  </div>
                </div>
              </div>
              {/* photo end */}
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
