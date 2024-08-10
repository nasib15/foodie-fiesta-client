/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const ReviewCard = ({ review, name, occupation, image }) => {
  return (
    <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700">
      <div className="flex-auto p-4 md:p-6">
        <p className="text-base text-gray-800 md:text-xl dark:text-white">
          <em>{review}</em>
        </p>
      </div>

      <div className="p-4 rounded-b-xl md:px-6 flex items-center gap-2">
        <div className="flex items-center justify-center">
          <img
            className="size-10 object-cover rounded-full"
            src={image}
            alt="Person"
          />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-neutral-200">
            {name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            {occupation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
