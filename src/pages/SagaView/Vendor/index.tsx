import React, { useState, useEffect } from "react";
import Layout from "@/component/layout";
import { useDispatch, useSelector } from "react-redux";
import { DelVendorRequest, GetVendorRequest } from "@/redux-saga/action/vendorAction";
import VendorCreate from "../Vendor/VendorCreate";
import VendorEdit from "./VendorEdit";
import VendorFindOne from "./VendorFindOne";
import ReactPaginate from "react-paginate";

export default function ProdCategorySaga() {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState<any>(false);
  const [refresh, setRefresh] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState<any>(false);
  const [displayFindOne, setDisplayFindOne] = useState(false);
  const [search, setSearch] = useState("");

  const { vendors } = useSelector((state: any) => state.vendorState);
  const [id, setId] = useState<any>();

  useEffect(() => {
    dispatch(GetVendorRequest());
    setRefresh(false);
  }, [refresh]);

  const onDelete = async (id: any) => {
    dispatch(DelVendorRequest(id));
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
  const currentItems = vendors.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(vendors.length / 5);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 5) % vendors.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <Layout>
        <div>
          {displayEdit ? (
            <VendorEdit refresh={refresh} setDisplay={setDisplayEdit} id={id} setRefresh={setRefresh} />
          ) : display ? (
            <VendorCreate setRefresh={setRefresh} setDisplay={setDisplay} />
          ) : (
            <div>
              <div className="mb-0">
                <button
                  onClick={() => setDisplay(true)}
                  className="border-4 border-green-700 ml-9 my-10 mb-1 rounded-md bg-green-700 py-3 px-8 text-base font-semibold text-black outline-none hover:bg-green-400 hover:bg-opacity-1 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  Add
                </button>

                <div>
                  <form className="flex items-center justify-center gap-2">
                    <h2>Search Hotel</h2>
                    <label className="sr-only">Search</label>
                    <div className="relative w-1/3">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <input
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        id="simple-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search"
                        required
                      />
                    </div>
                  </form>
                </div>

                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="p-0 text-center	min-w-full mb-5">
                          <thead className="bg-blue-400 border-b">
                            <tr>
                              <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Vendor ID
                              </th>
                              <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Vendor Name
                              </th>
                              <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Vendor Active
                              </th>
                              <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Vendor Priority
                              </th>
                              <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Vendor WebUrl
                              </th>
                              <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Vendor Modified Date
                              </th>
                              <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {vendors &&
                              currentItems.map(
                                (vendore: any) =>
                                  // console.log(vendore.vendorName.toLowerCase().indexOf(search) > -1);
                                  vendore.vendorName.toLowerCase().indexOf(search.toLowerCase()) > -1 && (
                                    <>
                                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{vendore.vendorId}</td>
                                        <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vendore.vendorName}</td>
                                        <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vendore.vendorActive ? "Active" : "Inactive"}</td>

                                        {/* <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vendore.vendorPriority}</td> */}
                                        <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vendore.vendorPriority ? "Priority" : "No Priority"}</td>
                                        <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vendore.vendorWeburl}</td>
                                        <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{vendore.vendorModifiedDate}</td>
                                        <td>
                                          <button
                                            onClick={() => onClick(vendore.vendorId)}
                                            className="bg-yellow-500 mx-2 inline-block px-1 py-2 border-2 border-yellow-600 text-black-600 font-dark font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                          >
                                            Edit
                                          </button>
                                          <button
                                            onClick={() => onDelete(vendore.vendorId)}
                                            className="bg-red-500 inline-block px-1 py-2 border-2 border-red-600 font-dark text-black-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                          >
                                            Delete
                                          </button>
                                        </td>
                                      </tr>
                                    </>
                                  )
                              )}
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
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
}
