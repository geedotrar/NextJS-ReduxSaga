import React, { useEffect, useState } from "react";
import Region from "../../api/Region";
import Layout from "@/component/layout";
import { useDispatch, useSelector } from "react-redux";
import { DelRegionRequest, GetRegionRequest } from "../../redux-saga/action/regionAction";
import FormikRegionCreate from "./RegionFormikCreate";
import FormikRegionEdit from "./RegionFormikEdit";

export default function RegionRedux() {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState<any>(false);
  const [refresh, setRefresh] = useState<any>(false);
  const [displayEdit, setDisplayEdit] = useState<any>(false);
  const { regions } = useSelector((state: any) => state.regionState);
  const [id, setId] = useState<any>();

  useEffect(() => {
    dispatch(GetRegionRequest());
    setRefresh(false);
  }, [refresh]);

  const onDelete = async (id: any) => {
    dispatch(DelRegionRequest(id));
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
        <>
          {displayEdit ? (
            <FormikRegionEdit refresh={refresh} setDisplay={setDisplayEdit} id={id} setRefresh={setRefresh} />
          ) : display ? (
            <FormikRegionCreate setRefresh={setRefresh} setDisplay={setDisplay} />
          ) : (
            <>
              <button className="mt-3 mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setDisplay(true)}>
                {" "}
                Add Region{" "}
              </button>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        Region ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Region Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {regions &&
                      regions.map((item: any) => {
                        return (
                          <>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {item.regionId}
                              </th>
                              <td className="px-6 py-4">{item.regionName}</td>
                              <button
                                onClick={() => onClick(item.regionId)}
                                className="bg-yellow-500 mx-2 inline-block px-1 py-2 border-2 border-yellow-600 text-black-600 font-dark font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                              >
                                edit
                              </button>
                              <button
                                onClick={() => onDelete(item.regionId)}
                                className="bg-red-500 inline-block px-1 py-2 border-2 border-red-600 font-dark text-black-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                              >
                                Delete
                              </button>
                            </tr>
                          </>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      </Layout>
    </div>
  );
}
