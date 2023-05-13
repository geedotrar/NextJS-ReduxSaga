import React, { useState, useEffect } from "react";
import Layout from "@/component/layout";
import { useDispatch, useSelector } from "react-redux";
import { DelPurchaseOrderHeaderRequest, GetPurchaseOrderHeaderRequest } from "@/redux-saga/action/purchaseOrderHeaderAction";
// import { DelOrderDetailRequest, GetOrderDetailRequest } from "@/redux-saga/action/orderDetailAction";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import PoHeaderModalCreate from "./PoHeaderModalCreate";
import SwitchStatusModalEdit from "./SwitchStatusModal";

export default function PurchaseOrderHeaderSaga() {
  const dispatch = useDispatch();

  const [status, setStatus] = useState<any>(null);
  const [display, setDisplay] = useState<any>(false);
  const [refresh, setRefresh] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState<any>(false);
  const { PurchaseOrderHeaders } = useSelector((state: any) => state.PurchaseOrderHeaderState);
  const [id, setId] = useState<any>();

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    dispatch(GetPurchaseOrderHeaderRequest());
    setRefresh(false);
  }, [refresh]);

  const onDelete = async (id: any) => {
    dispatch(DelPurchaseOrderHeaderRequest(id));
    window.alert("Data Successfully Delete");
    setDisplay(false);
    setRefresh(!refresh);
  };

  const onClick = (id: any) => {
    setDisplayEdit(true);
    setId(id);
    // setStatus(statusId);
  };

  // const [itemOffset, setItemOffset] = useState(0);

  // const endOffset = itemOffset + 5;
  // const currentItems = PurchaseOrderHeaders.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(PurchaseOrderHeaders.length / 5);

  // const handlePageClick = (event: any) => {
  //   const newOffset = (event.selected * 5) % PurchaseOrderHeaders.length;
  //   setItemOffset(newOffset);
  // };

  const poStatus = (status: number) => {
    switch (status) {
      case 1:
        return "Pending";
      case 2:
        return "Approve";
      case 3:
        return "Rejected";
      case 4:
        return "Received";
      case 5:
        return "Completed";
    }
  };

  return (
    <div>
      <Layout>
        <div className="p-4 sm:ml-64">
          <div>
            {display && <PoHeaderModalCreate setDisplay={setDisplay} refresh={refresh} setRefresh={setRefresh} />}
            {displayEdit && <SwitchStatusModalEdit setDisplay={setDisplayEdit} refresh={refresh} id={id} setRefresh={setRefresh} />}
            <div className="mt-20">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 min-h-screen">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden min-h-screen">
                      <table className="p-0 text-center	min-w-full mb-5">
                        <thead className="bg-blue-400 border-b">
                          <tr>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              PO Number
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Po Date
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Vendor Target
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Line Items
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Total Amount
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Status
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              <button onClick={() => setDisplay(true)}>+ Add</button>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {PurchaseOrderHeaders &&
                            PurchaseOrderHeaders.map((poHeader: any) => {
                              return (
                                <>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{poHeader.poheNumber}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{poHeader.poheOrderDate}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{poHeader.poheVendor ? poHeader.poheVendor.vendorName : undefined}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">1</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{poHeader.poheTotalAmount}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{poStatus(poHeader.poheStatus)}</td>
                                    <td>
                                      {/* dropDown  */}
                                      <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http:www.w3.org/2000/svg">
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
                                              {/* <Menu.Item>
                                                {({ active }) => (
                                                  <li onClick={() => onClick("#")} className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                                                    Details
                                                  </li>
                                                )}
                                              </Menu.Item> */}
                                            </div>
                                            <div>
                                              <Menu.Item>
                                                {({ active }) => (
                                                  <li onClick={() => onClick(poHeader.poheId)} className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                                                    Switch Status
                                                  </li>
                                                )}
                                              </Menu.Item>
                                            </div>
                                            <div>
                                              <Menu.Item>
                                                {({ active }) => (
                                                  <li onClick={() => onDelete(poHeader.poheId)} className={classNames(active ? "cursor-pointer bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")}>
                                                    Delete
                                                  </li>
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
                      {/* <ReactPaginate
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
                      /> */}
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
