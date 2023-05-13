import React, { useState, useEffect } from "react";
import Layout from "@/component/layout";
import { useDispatch, useSelector } from "react-redux";
import { DelVendorProductRequest, GetVendorProductRequest } from "@/redux-saga/action/vendorProductAction";
import VendorProductCreate from "./vendorProductCreate";
import VendorProductEdit from "./VendorProductEdit";
import ReactPaginate from "react-paginate";

export default function ProdCategorySaga() {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState<any>(false);
  const [refresh, setRefresh] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState<any>(false);
  const { vendorProducts } = useSelector((state: any) => state.vendorProductState);
  const [id, setId] = useState<any>();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(GetVendorProductRequest());
    setRefresh(false);
  }, [refresh]);

  const onDelete = async (id: any) => {
    dispatch(DelVendorProductRequest(id));
    window.alert("Data Successfully Delete");
    setRefresh(!refresh);
    setDisplay(false);
  };

  const onClick = (id: any) => {
    setDisplayEdit(true);
    setId(id);
  };

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 5;
  const currentItems = vendorProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(vendorProducts.length / 5);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 5) % vendorProducts.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="mt-20">
      <Layout>
        <div className="p-4 sm:ml-64">
          {displayEdit ? (
            <VendorProductEdit refresh={refresh} setDisplay={setDisplayEdit} id={id} setRefresh={setRefresh} />
          ) : display ? (
            <VendorProductCreate setRefresh={setRefresh} setDisplay={setDisplay} />
          ) : (
            <div className="mb-0">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="p-0 text-center	min-w-full">
                        <thead className="bg-blue-400 border-b">
                          <tr>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Stock
                            </th>
                            {/* <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Vendor Product ID
                            </th> */}
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Qty Stocked
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Qty Remaining
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Price
                            </th>

                            {/* <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Vendor Product Vendor ID
                            </th> */}
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              <button onClick={() => setDisplay(true)}>+ Add</button>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {vendorProducts &&
                            currentItems.map((vepro: any) => {
                              return (
                                <>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    {/* <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vepro.veproStock ? vepro.veproStock.stockName : "undefined"}</td> */}
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vepro.veproStock ? vepro.veproStock.stockName : "undefined"}</td>
                                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{vepro.veproId}</td> */}
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vepro.veproQtyStocked}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vepro.veproQtyRemaining}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vepro.veproPrice}</td>
                                    {/* <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vepro.veproVendor.vendorId}</td> */}
                                    <td>
                                      <button
                                        onClick={() => onClick(vepro.veproId)}
                                        className="bg-yellow-500 mx-2 inline-block px-1 py-2 border-2 border-yellow-600 text-black-600 font-dark font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                      >
                                        Edit
                                      </button>
                                      <button
                                        onClick={() => onDelete(vepro.veproId)}
                                        className="bg-red-500 inline-block px-1 py-2 border-2 border-red-600 font-dark text-black-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                      >
                                        Delete
                                      </button>
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                        </tbody>
                      </table>
                      <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={2}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        containerClassName="flex gap-1 justify-center"
                        renderOnZeroPageCount={null}
                        activeLinkClassName="bg-red-500"
                        nextLinkClassName="btn btn-sm bg-blue-500 border-none"
                        pageLinkClassName="btn btn-sm bg-blue-500 border-none"
                        previousLinkClassName="btn btn-sm bg-blue-500 border-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
}
