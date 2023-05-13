import React, { useState, useEffect } from "react";
import Layout from "@/component/layout";
import { useDispatch, useSelector } from "react-redux";
import { DelStockDetailRequest, FindStockDetailRequest, GetStockDetailByStockIdRequest, GetStockDetailRequest } from "@/redux-saga/action/stockDetailAction";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import StatusModalEdit from "./StatusModalEdit";
import api from "@/api/StockDetailApi";
import { GetStockRequest } from "@/redux-saga/action/stocksAction";

// import { DelStockRequest, GetStockRequest } from "@/redux-saga/action/stocksAction";
// import StocksCreate from "./StocksCreate";
// import StocksEdit from "./StocksEdit";

export default function StocksSaga() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { id } = router.query;

  const [stockUsed, setStockUsed] = useState<any>("");
  const [status, setStatus] = useState<any>(null);
  const [stodId, setStodId] = useState<any>();
  const [display, setDisplay] = useState<any>(false);
  const [refresh, setRefresh] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState<any>(false);
  const { stocks } = useSelector((state: any) => state.stocksState);
  const stock = stocks.find((item: any) => item.stockId == id);

  const { stockDetails } = stock;
  console.log(stock.stockName);
  console.log(stockDetails);

  useEffect(() => {
    dispatch(GetStockRequest());
  }, [refresh]);

  console.log(refresh);

  const onDelete = async (id: any) => {
    dispatch(DelStockDetailRequest(id));
    window.alert("Data Successfully Delete");
    setRefresh(!refresh);
    setDisplay(false);
  };

  const onClick = (id: any, statusId: any, stock: any) => {
    setDisplayEdit(true);
    setStodId(id);
    setStatus(statusId);
    setStockUsed(stock);
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
          {displayEdit && <StatusModalEdit stockUsed={stockUsed} status={status} stodId={stodId} refresh={refresh} setDisplay={setDisplayEdit} id={id} setRefresh={setRefresh} />}
          <div>
            <div className="mt-20">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-h-screen">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden min-h-screen">
                      <div className="mb-12">
                        <span className="text-Black self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">{stock.stockName}</span>
                      </div>
                      <table className="p-0 text-center	min-w-full mb-5">
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
                            stockDetails.map((stockDetail: any) => {
                              return (
                                <>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{stockDetail.stodBarcodeNumber}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{stodStatus(stockDetail.stodStatus)}</td>

                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{stockDetail.stodNotes}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{stockDetail.stodPohe.poheNumber}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">Room-{stockDetail.stodFaci.faciRoomNumber}</td>
                                    <td>
                                      <button
                                        onClick={() => onClick(stockDetail.stodId, stockDetail.stodStatus, stockDetail.stodFaci.faciRoomNumber)}
                                        className="bg-yellow-500 mx-2 inline-block px-1 py-2 border-2 border-yellow-600 text-black-600 font-dark font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                      >
                                        Edit
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
          </div>
          {/* )} */}
        </div>
      </Layout>
    </div>
  );
}
