import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { EditVendorProductRequest, FindVendorProductRequest } from "@/redux-saga/action/vendorProductAction";
// import { EditVendorRequest, FindVendorRequest } from "@/redux-saga/action/vendorAction";

export default function VendorProductEdit(props: any) {
  const dispatch = useDispatch();
  const { vendorProduct } = useSelector((state: any) => state.vendorProductState);
  console.log(vendorProduct);
  useEffect(() => {
    dispatch(FindVendorProductRequest(props.id));
  }, []);

  // console.log(props.id);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: props.id,
      veproStock: vendorProduct.veproStock ? vendorProduct.veproStock.stockId : "undefined",
      veproQtyStocked: vendorProduct.veproQtyStocked,
      veproQtyRemaining: vendorProduct.veproQtyRemaining,
      veproPrice: vendorProduct.veproPrice,
    },

    onSubmit: async (values) => {
      console.log(values);
      dispatch(EditVendorProductRequest(values));
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
                  id="veproStock"
                  name="veproStock"
                  defaultValue={vendorProduct.veproStock ? vendorProduct.veproStock.stockName : "undefined"}
                  type="text"
                  placeholder="Stock"
                  onChange={formik.handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Qty Stocked</label>
                <input
                  id="veproQtyStocked"
                  name="veproQtyStocked"
                  defaultValue={vendorProduct.veproQtyStocked}
                  type="text"
                  placeholder="Qty Stocked"
                  onChange={formik.handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Qty Remaining</label>
                <input
                  id="veproQtyRemaining"
                  name="veproQtyRemaining"
                  defaultValue={vendorProduct.veproQtyRemaining}
                  type="text"
                  placeholder="Qty Remaining"
                  onChange={formik.handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Price</label>
                <input
                  id="veproPrice"
                  name="veproPrice"
                  defaultValue={vendorProduct.veproPrice}
                  type="text"
                  placeholder="Vendor Price"
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
