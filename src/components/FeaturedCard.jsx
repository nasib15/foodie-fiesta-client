/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const FeaturedCard = ({ food }) => {
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
    <div>
      <div className="hover:cursor-pointer group sm:flex rounded-xl">
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden min-h-[200px] sm:max-w-[250px] sm:min-h-[350px] w-full">
          <img
            className="size-full absolute top-0 start-0 object-cover"
            src={food_image}
            alt="Image Description"
          />
        </div>

        <div className="grow">
          <div className="p-4 flex flex-col h-full sm:p-6">
            <div className="mb-4 flex gap-4">
              <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-semibold bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200">
                Quantity: {food_quantity}
              </p>
              <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-semibold bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200">
                By: {new Date(expired_date).toLocaleDateString("en-UK")}
              </p>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-[#ED4C67] dark:text-neutral-300 dark:group-hover:text-white">
              {food_name}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400 font-semibold">
              Location: {location}
            </p>
            <h4 className="mt-2 text-lg font-semibold text-gray-800 dark:text-neutral-300">
              Additional Notes:
            </h4>
            <p
              className="mt-1 text-gray-600 dark:text-neutral-400"
              title={additional_notes.length > 55 ? additional_notes : ""}
            >
              {additional_notes.slice(0, 55)}
              {additional_notes.length > 55 ? "...." : ""}
            </p>

            <div className="mt-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="size-[46px] object-cover rounded-full"
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
              <div className="mt-4">
                <Button size="md" className="bg-[#ED4C67] hover:bg-[#B53471]">
                  <Link to={`/food/${_id}`}>View Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
