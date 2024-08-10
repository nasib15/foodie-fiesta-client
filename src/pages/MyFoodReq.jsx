/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet";
import useAxios from "../hooks/useAxios";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const MyFoodReq = () => {
  const axiosFetch = useAxios();

  const {
    data: myFoodReq,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["myFoodReq"],
    queryFn: async () => {
      const { data } = await axiosFetch("/foods?status=Requested");
      return data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError) console.log(error.message);

  return (
    <div>
      <Helmet>
        <title>FFiesta | My Food Request</title>
      </Helmet>
      <div className="container px-4 pt-10">
        <div className="flex items-center gap-x-3">
          <h2 className="text-2xl font-bold text-gray-800 ">
            Manage My Food Request
          </h2>

          <span className="px-3 py-1 text-xs bg-[#ED4C67] text-white hover:bg-[#B53471] rounded-full ">
            {myFoodReq.length} {myFoodReq.length > 1 ? "Requests" : "Request"}
          </span>
        </div>
      </div>
      <div className="max-w-[85rem] px-4 py-6 mx-auto">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 mt-2 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700 ">
                  <thead className=" bg-gray-50 dark:bg-neutral-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            Food Name
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            Donor Info
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            Pickup Location
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            Expire Date
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            Request Date
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            Additional Notes
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            Status
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    {myFoodReq.map((food) => (
                      <tr
                        key={food._id}
                        className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                      >
                        <td className="size-px whitespace-nowrap items-center">
                          <a className="block p-6 hover:cursor-pointer">
                            <div className="flex items-center gap-x-4">
                              <img
                                className="flex-shrink-0 size-[38px] rounded-lg"
                                src={food.food_image}
                                alt="Image Description"
                              />
                              <div>
                                <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                  {food.food_name}
                                </span>
                              </div>
                            </div>
                          </a>
                        </td>
                        <td className="size-px whitespace-nowrap items-center">
                          <a className="block p-6 hover:cursor-pointer">
                            <div className="flex items-center gap-x-3">
                              <img
                                className="inline-block size-[38px] rounded-full"
                                src={food.donor_image}
                                alt="Image Description"
                              />
                              <div className="grow">
                                <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                  {food.donor_name}
                                </span>
                                <span className="block text-sm text-gray-500 dark:text-neutral-500">
                                  {food.donor_email}
                                </span>
                              </div>
                            </div>
                          </a>
                        </td>

                        <td className="size-px whitespace-nowrap items-center">
                          <a className="block p-6 hover:cursor-pointer">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              {food.location}
                            </span>
                          </a>
                        </td>

                        <td className="size-px whitespace-nowrap items-center">
                          <a className="block p-6 hover:cursor-pointer">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              {new Date(food.expired_date).toLocaleString(
                                "en-UK",
                                {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                }
                              )}
                            </span>
                          </a>
                        </td>
                        <td className="size-px whitespace-nowrap items-center">
                          <a className="block p-6 hover:cursor-pointer">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              {new Date(food.requested_date).toLocaleString(
                                "en-UK",
                                {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                }
                              )}
                            </span>
                          </a>
                        </td>
                        <td className="size-px whitespace-nowrap items-center">
                          <a className="block p-6 hover:cursor-pointer">
                            <span
                              className="text-sm text-gray-600 dark:text-neutral-400"
                              title={
                                food.additional_notes.length > 50
                                  ? food.additional_notes
                                  : ""
                              }
                            >
                              {food.additional_notes.slice(0, 50)}
                              {food.additional_notes.length > 50 ? "...." : ""}
                            </span>
                          </a>
                        </td>
                        <td className="size-px whitespace-nowrap items-center">
                          <a className="block p-6 hover:cursor-pointer">
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                              <svg
                                className="size-2.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                              </svg>
                              Requested
                            </span>
                          </a>
                        </td>
                        <td className="size-px whitespace-nowrap items-center">
                          <Link
                            to={"/payment-info"}
                            className="block p-6 hover:cursor-pointer"
                          >
                            <button className="btn h-8 min-h-8 bg-[#ED4C67] text-white hover:bg-[#B53471]">
                              Pay
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFoodReq;
