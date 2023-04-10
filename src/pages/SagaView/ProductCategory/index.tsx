import React, { useState, useEffect } from "react";
import Layout from "@/component/layout";
import { useDispatch, useSelector } from "react-redux";
import { DelProdCategoryRequest, GetProdCategoryRequest } from "../../../redux-saga/action/productCategoryAction";
import ProdCategoryCreate from "./ProductCategoryCreate";
import ProdCategoryEdit from "./ProductCategoryEdit";

export default function ProdCategorySaga() {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState<any>(false);
  const [refresh, setRefresh] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState<any>(false);
  const { prodCats } = useSelector((state: any) => state.ProdCategoryState);
  const [id, setId] = useState<any>();

  useEffect(() => {
    dispatch(GetProdCategoryRequest());
    setRefresh(false);
  }, [refresh]);

  const onDelete = async (id: any) => {
    dispatch(DelProdCategoryRequest(id));
    window.alert("Data Successfully Delete");
    setRefresh(!refresh);
    setDisplay(false);
  };

  const onClick = (id: any) => {
    setDisplayEdit(true);
    setId(id);
  };
  return (
    <div>
      <Layout>
        <div>
          {displayEdit ? (
            <ProdCategoryEdit refresh={refresh} setDisplay={setDisplayEdit} id={id} setRefresh={setRefresh} />
          ) : display ? (
            <ProdCategoryCreate setRefresh={setRefresh} setDisplay={setDisplay} />
          ) : (
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
                              Category Name
                            </th>
                            <th scope="col" className="text-center text-sm font-medium text-gray-900 px-6 py-4 text-left">
                              Description
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
                          {prodCats &&
                            prodCats.map((prod: any) => {
                              return (
                                <>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{prod.id}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{prod.name}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{prod.description}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{prod.createdat}</td>
                                    <td className="text-sm text-black-900 font-dark px-6 py-4 whitespace-nowrap">{prod.updatedat}</td>
                                    <td>
                                      <button
                                        onClick={() => onClick(prod.id)}
                                        className="bg-yellow-500 mx-2 inline-block px-1 py-2 border-2 border-yellow-600 text-black-600 font-dark font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                      >
                                        Edit
                                      </button>
                                      <button
                                        onClick={() => onDelete(prod.id)}
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
          )}
        </div>
      </Layout>
    </div>
  );
}
