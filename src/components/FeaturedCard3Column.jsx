/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const FeaturedCard3Column = ({ food }) => {
  const {
    _id,
    food_quantity,
    food_name,
    expired_date,
    additional_notes,
    donor_name,
    donor_image,
    location,
    food_image,
  } = food;

  return (
    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <div className=" flex flex-col justify-center items-center  rounded-t-xl">
        <img
          className="h-52 w-full object-cover rounded-t-xl"
          src={food_image}
          alt="food image"
        />
      </div>
      <div className="p-4 md:p-6">
        <div className="mb-4 flex gap-4">
          <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-semibold bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200">
            Quantity: {food_quantity}
          </p>
          <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-semibold bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200">
            By: {new Date(expired_date).toLocaleDateString("en-UK")}
          </p>
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-neutral-300 dark:hover:text-white">
          {food_name}
        </h3>
        <p className="mt-3 font-semibold text-gray-600 dark:text-neutral-500">
          Pickup Location: {location}
        </p>
        <div>
          <h4 className="mt-3 text-lg font-semibold text-gray-700 dark:text-neutral-500">
            Additional Notes:
          </h4>
          <p className="mt-3 text-gray-500 dark:text-neutral-500">
            {additional_notes}
          </p>
        </div>

        <div className="mt-4 flex items-center">
          <div className="flex-shrink-0">
            <img
              className="size-[46px] rounded-full"
              src={donor_image}
              alt="Image Description"
            />
          </div>
          <div className="ms-2.5 sm:ms-4">
            <h4 className="font-semibold text-gray-800 dark:text-neutral-200">
              {donor_name}
            </h4>
          </div>
        </div>
      </div>
      <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
        <Link
          to={`/food/${_id}`}
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-b-xl bg-white text-gray-800 shadow-sm hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCard3Column;
