import React, { useState, useEffect } from "react";
import Layout from "@/component/layout";
import { useDispatch, useSelector } from "react-redux";
import { DelStockRequest, GetStockRequest } from "@/redux-saga/action/stocksAction";
import StocksCreate from "./StocksCreate";
import StocksEdit from "./StocksEdit";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import ModalCreate from "./StockModalCreate";
import ModalEdit from "./StockModalEdit";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function StocksSaga() {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState<any>(false);
  const [refresh, setRefresh] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState<any>(false);
  const { stocks } = useSelector((state: any) => state.stocksState);
  const [id, setId] = useState<any>();

  useEffect(() => {
    dispatch(GetStockRequest());
    setRefresh(false);
  }, [refresh]);

  const onDelete = async (id: any) => {
    dispatch(DelStockRequest(id));
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
  const currentItems = stocks.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(stocks.length / 5);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 5) % stocks.length;
    setItemOffset(newOffset);
  };
  return (
    <div>
      <Layout>
        <div className="p-4 sm:ml-64">
          <div>
            {display && <ModalCreate setDisplay={setDisplay} />}
            {displayEdit && <ModalEdit setDisplay={setDisplayEdit} id={id} setRefresh={setRefresh} />}
            <div className="mt-20">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-h-screen">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden min-h-screen">
                      <table className="p-0 text-center	min-w-full mb-5">
                        <thead className="bg-blue-400 border-b">
                          <tr>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Stock
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Re-OrderPoint
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Qty
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Used
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Scrap
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Size Color
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              <button onClick={() => setDisplay(true)}>+ Add</button>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {stocks &&
                            currentItems.map((stock: any) => {
                              return (
                                <>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{stock.stockName}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{stock.stockReorderPoint}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{stock.stockQuantity}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{stock.stockUsed}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{stock.stockScrap}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">
                                      {stock.stockSize}-{stock.stockColor}
                                    </td>
                                    <td>
                                      {/* dropDown  */}
                                      <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                                            </svg>
                                          </Menu.Button>
                                        </div>

                                        <Transition
                                          as={Fragment}
                                          enter="transition ease-out duration-100"
                                          enterFrom="transform opacity-0 scale-95"
                                          enterTo="transform opacity-100 scale-100"
                                          leave="transition ease-in duration-75"
                                          leaveFrom="transform opacity-100 scale-100"
                                          leaveTo="transform opacity-0 scale-95"
                                        >
                                          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                              <Menu.Item>
                                                {({ active }) => (
                                                  <li onClick={() => onClick(stock.stockId)} className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                                                    Edit
                                                  </li>
                                                )}
                                              </Menu.Item>
                                            </div>
                                            <div>
                                              <Menu.Item>
                                                {({ active }) => (
                                                  <Link href="#" className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                                                    Upload Photo
                                                  </Link>
                                                )}
                                              </Menu.Item>
                                            </div>
                                            <div>
                                              <Menu.Item>
                                                {({ active }) => (
                                                  <li onClick={() => onDelete(stock.stockId)} className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                                                    Delete
                                                  </li>
                                                )}
                                              </Menu.Item>
                                            </div>
                                            <div>
                                              <Menu.Item>
                                                {({ active }) => (
                                                  <Link href={`/SagaView/Stocks/${stock.stockId}`} className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                                                    Detail Info Stock
                                                  </Link>
                                                )}
                                              </Menu.Item>
                                            </div>
                                          </Menu.Items>
                                        </Transition>
                                      </Menu>
                                      {/* dropDown */}
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
        </div>
      </Layout>
    </div>
  );
}
