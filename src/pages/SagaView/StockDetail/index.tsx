import React, { useState, useEffect } from "react";
import Layout from "@/component/layout";
import { useDispatch, useSelector } from "react-redux";
import { DelStockDetailRequest, GetStockDetailRequest } from "@/redux-saga/action/stockDetailAction";
import ReactPaginate from "react-paginate";
// import { DelStockRequest, GetStockRequest } from "@/redux-saga/action/stocksAction";
// import StocksCreate from "./StocksCreate";
// import StocksEdit from "./StocksEdit";

export default function StocksSaga() {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState<any>(false);
  const [refresh, setRefresh] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState<any>(false);
  const { stockDetails } = useSelector((state: any) => state.stockDetailState);
  const [id, setId] = useState<any>();

  useEffect(() => {
    dispatch(GetStockDetailRequest());
    setRefresh(false);
  }, [refresh]);

  const onDelete = async (id: any) => {
    dispatch(DelStockDetailRequest(id));
    window.alert("Data Successfully Delete");
    setRefresh(!refresh);
    setDisplay(false);
  };

  const onClick = (id: any) => {
    setDisplayEdit(true);
    setId(id);
  };

  const stodStatus = (rating: string) => {
    switch (rating) {
      case "1":
        return "Stocked";
      case "2":
        return "Expired";
      case "3":
        return "Broken";
      case "4":
        return "Used";
    }
  };

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 5;
  const currentItems = stockDetails.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(stockDetails.length / 5);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 5) % stockDetails.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <Layout>
        <div className="p-4 sm:ml-64">
          {/* {displayEdit ? (
            <StocksEdit refresh={refresh} setDisplay={setDisplayEdit} id={id} setRefresh={setRefresh} />
          ) : display ? (
            <StocksCreate setRefresh={setRefresh} setDisplay={setDisplay} />
          ) : ( */}
          <div>
            <div className="mb-0">
              <button
                onClick={() => setDisplay(true)}
                className="border-4 border-green-700 ml-9 my-10 mb-1 rounded-md bg-green-700 py-3 px-8 text-base font-semibold text-black outline-none hover:bg-green-400 hover:bg-opacity-1 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Add
              </button>
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="p-0 text-center	min-w-full">
                        <thead className="bg-blue-400 border-b">
                          <tr>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Barcode
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Status
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Notes
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Po Number
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Used In
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {stockDetails &&
                            currentItems.map((stockDetail: any) => {
                              return (
                                <>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{stockDetail.stodBarcodeNumber}</td>
                                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{stockDetail.stodStatus}</td> */}
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{stodStatus(stockDetail.stodStatus)}</td>

                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{stockDetail.stodNotes}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{stockDetail.stodPohe.poheNumber}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">Room-{stockDetail.stodFaci.faciRoomNumber}</td>
                                    <td>
                                      <button
                                        onClick={() => onClick(stockDetail.stockId)}
                                        className="bg-yellow-500 mx-2 inline-block px-1 py-2 border-2 border-yellow-600 text-black-600 font-dark font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                      >
                                        Edit
                                      </button>
                                      {/* <button
                                        onClick={() => onDelete(stockDetail.stockId)}
                                        className="bg-red-500 inline-block px-1 py-2 border-2 border-red-600 font-dark text-black-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                      >
                                        Delete
                                      </button> */}
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
          </div>
          {/* )} */}
        </div>
      </Layout>
    </div>
  );
}
