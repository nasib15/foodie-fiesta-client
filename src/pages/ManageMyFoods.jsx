import React from "react";
import { Helmet } from "react-helmet";
import useAxios from "./../hooks/useAxios";
import useAuth from "../providers/useAuth";
import { useQuery } from "@tanstack/react-query";
import Loading from "./../components/Loading";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageMyFoods = () => {
  const { user } = useAuth();
  const axiosFetch = useAxios();
  const {
    data: myFoods,
    isError,
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myFoods", user?.email],
    queryFn: async () => {
      const { data } = await axiosFetch(`/foods/${user?.email}`);
      return data;
    },
  });

  // Delete Food
  const handleDeleteFood = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { data } = await axiosFetch.delete(`/food/${id}`);
          if (data.deletedCount === 1) {
            Swal.fire("Deleted!", "Your food has been deleted.", "success");
            refetch();
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          }
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  if (isLoading) return <Loading />;
  if (isError) {
    console.log(error.message);
  }

  return (
    <section className="container px-4 mx-auto py-10">
      <Helmet>
        <title>FFiesta | My Foods</title>
      </Helmet>
      <div className="flex items-center gap-x-3">
        <h2 className="text-2xl font-bold text-gray-800 ">Manage My Foods</h2>

        <span className="px-3 py-1 text-xs bg-[#ED4C67] text-white hover:bg-[#B53471] rounded-full ">
          {myFoods.length} {myFoods.length > 1 ? "Foods" : "Food"}
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-2 -my-2 overflow-x-auto sm:-mx-2">
          <div className="inline-block min-w-full py-2 align-middle ">
            <div className="overflow-hidden border border-gray-200  rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-base text-left rtl:text-right font-semibold text-gray-700"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Food Name</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-base text-left rtl:text-right font-semibold text-gray-700"
                    >
                      <span>Pickup Location</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-base text-left rtl:text-right font-semibold text-gray-700"
                    >
                      <div className="flex items-center gap-x-2">
                        <span>Quantity</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-base text-left rtl:text-right font-semibold text-gray-700"
                    >
                      Expiry Date
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-base text-left rtl:text-right font-semibold text-gray-700"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-base text-left rtl:text-right font-semibold text-gray-700"
                    >
                      Additional Notes
                    </th>

                    <th className="px-4 py-3.5 text-base text-left rtl:text-right font-semibold text-gray-700">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {myFoods?.map((food) => (
                    <tr key={food._id}>
                      <td className="px-4 py-4 text-sm text-gray-600  whitespace-nowrap">
                        {food.food_name}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-600  whitespace-nowrap">
                        {food.location}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-600  whitespace-nowrap">
                        {food.food_quantity}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p
                            className="px-3 py-1 rounded-full text-blue-500 bg-blue-100/60
                               text-xs"
                          >
                            {new Date(food.expired_date).toLocaleDateString(
                              "en-UK"
                            )}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          {food.status === "Available" ? (
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
                              {food.status}
                            </span>
                          ) : (
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full dark:bg-red-500/10 dark:text-red-500">
                              <svg
                                className="size-2.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                              </svg>
                              {food.status}
                            </span>
                          )}
                        </div>
                      </td>
                      <td
                        title=""
                        className="px-4 py-4 text-sm text-gray-600  whitespace-nowrap"
                      >
                        <div>
                          {
                            <p
                              className="text-gray-600"
                              title={
                                food.additional_notes.length > 50
                                  ? food.additional_notes
                                  : ""
                              }
                            >
                              {food.additional_notes.slice(0, 50)}
                              {food.additional_notes.length > 50 ? "...." : ""}
                            </p>
                          }
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button
                            onClick={() => {
                              handleDeleteFood(food._id);
                            }}
                            className="text-gray-600 transition-colors duration-200   hover:text-red-500 focus:outline-none"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>

                          <Link
                            to={`/update-food-info/${food._id}`}
                            className="flex items-center"
                          >
                            <button className="text-gray-600 transition-colors duration-200   hover:text-yellow-700 focus:outline-none ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                              </svg>
                            </button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageMyFoods;
