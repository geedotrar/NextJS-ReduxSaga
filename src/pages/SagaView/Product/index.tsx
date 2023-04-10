import React, { useState, useEffect } from "react";
import Layout from "@/component/layout";
import { useDispatch, useSelector } from "react-redux";
import { DelProductRequest, GetProductRequest } from "@/redux-saga/action/productAction";
import ProductCreate from "./ProductCreate";
import ProductEdit from "./ProductEdit";

export default function ProductSaga() {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState<any>(false);
  const [refresh, setRefresh] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState<any>(false);
  const { products } = useSelector((state: any) => state.ProductState);
  const [id, setId] = useState<any>();

  useEffect(() => {
    dispatch(GetProductRequest());
    setRefresh(false);
  }, [refresh]);

  const onDelete = async (id: any) => {
    dispatch(DelProductRequest(id));
    window.alert("Data Successfully Delete");
    setDisplay(false);
    setRefresh(!refresh);
  };

  const onClick = (id: any) => {
    setDisplayEdit(true);
    setId(id);
  };
  return (
    <div>
      <Layout>
        {displayEdit ? (
          <ProductEdit refresh={refresh} setDisplay={setDisplayEdit} id={id} setRefresh={setRefresh} />
        ) : display ? (
          <ProductCreate setRefresh={setRefresh} setDisplay={setDisplay} />
        ) : (
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
                              ID
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Name
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Description
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Category ID jc
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Price
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Image
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              CreatedAt
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              UpdatedAt
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {products &&
                            products.map((product: any) => {
                              return (
                                <>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.id}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{product.name}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{product.description}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{product.category ? product.category.id : "undefined"}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{product.price}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{product.image ? product.image : "NULL"}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{product.createdat}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{product.updatedat}</td>
                                    <td>
                                      <button
                                        onClick={() => onClick(product.id)}
                                        className="bg-yellow-500 mx-2 inline-block px-1 py-2 border-2 border-yellow-600 text-black-600 font-dark font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                      >
                                        Edit
                                      </button>
                                      <button
                                        onClick={() => onDelete(product.id)}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
}
