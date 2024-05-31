import React, { useState } from "react";
import useAuth from "./../providers/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddFood = () => {
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const axiosFetch = useAxios();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationFn: async (newFoodData) => {
      const { data } = await axiosFetch.post("/foods", newFoodData);
      return data;
    },

    onSuccess: () => {
      toast.success("Food added successfully");
      queryClient.invalidateQueries(["foods"]);
    },
  });

  const handleAddFood = async (e) => {
    e.preventDefault();
    const form = e.target;
    const food_name = form.foodName.value;
    const food_image = form.image.value;
    const food_quantity = form.quantity.value;
    const expired_date = selectedDate;
    const location = form.location.value;
    const additional_notes = form.notes.value;
    const status = form.status.value;
    const donor_name = user?.displayName;
    const donor_email = user?.email;
    const donor_image = user?.photoURL;

    const newFoodData = {
      food_name,
      food_image,
      food_quantity,
      expired_date,
      location,
      additional_notes,
      status,
      donor_name,
      donor_email,
      donor_image,
    };
    console.log(newFoodData);

    // post data to the server
    await mutateAsync(newFoodData);
    navigate("/manage-my-foods", { replace: true });
  };

  return (
    <div>
      <Helmet>
        <title>FFiesta | Add Food</title>
      </Helmet>
      {/* Form */}
      <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
        <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800">
          <div className="mb-8">
            <h2 className="text-2xl text-center font-bold text-gray-800 dark:text-neutral-200">
              Add A Food
            </h2>
          </div>
          <form onSubmit={handleAddFood}>
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-full-name"
                  className="inline-block text-base font-semibold text-gray-600 mt-2.5 dark:text-neutral-200"
                >
                  Food name
                </label>
              </div>

              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <input
                    id="af-account-full-name"
                    type="text"
                    name="foodName"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Enter Your Food Name Here"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-email"
                  className="inline-block text-base font-semibold text-gray-600 mt-2.5 dark:text-neutral-200"
                >
                  Food Image URL
                </label>
              </div>

              <div className="sm:col-span-9">
                <input
                  id="af-account-email"
                  type="url"
                  name="image"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Enter URL of the image"
                  required
                />
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-password"
                  className="inline-block text-base font-semibold text-gray-600 mt-2.5 dark:text-neutral-200"
                >
                  Food Quantity
                </label>
              </div>

              <div className="sm:col-span-9">
                <input
                  id="af-account-password"
                  type="number"
                  name="quantity"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Enter Food Quantity"
                  required
                />
              </div>

              <div className="sm:col-span-3">
                <div className="inline-block">
                  <label
                    htmlFor="af-account-phone"
                    className="inline-block text-base font-semibold text-gray-600 mt-2.5 dark:text-neutral-200"
                  >
                    Pickup Location
                  </label>
                </div>
              </div>

              <div className="sm:col-span-9">
                <select
                  defaultValue={"Dhaka"}
                  name="location"
                  className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                >
                  <option value="Dhaka">Dhaka</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Barishal">Barishal</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Sylhet">Sylhet</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-gender-checkbox"
                  className="inline-block text-base font-semibold text-gray-600 mt-2.5 dark:text-neutral-200"
                >
                  Expired Date/Time
                </label>
              </div>

              <div className="sm:col-span-9 ">
                <div className="sm:flex ">
                  <DatePicker
                    className="focus:border-[#ED4C67] focus:ring-[#ED4C67] border-gray-200 shadow-sm text-base rounded-lg"
                    showIcon
                    toggleCalendarOnIconClick
                    dateFormat="dd/MM/yyyy"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-bio"
                  className="inline-block text-base font-semibold text-gray-600 mt-2.5 dark:text-neutral-200"
                >
                  Additional Notes
                </label>
              </div>

              <div className="sm:col-span-9">
                <textarea
                  id="af-account-bio"
                  name="notes"
                  className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  rows="6"
                  placeholder="Type your message..."
                  required
                ></textarea>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-email"
                  className="inline-block text-base font-semibold text-gray-600 mt-2.5 dark:text-neutral-200"
                >
                  Food Status
                </label>
              </div>

              <div className="sm:col-span-9">
                <select
                  defaultValue={"Available"}
                  name="status"
                  className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                >
                  <option value="Available">Available</option>
                  <option value="Not Available">Not Available</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <label className="inline-block text-base font-semibold text-gray-600 mt-2.5 dark:text-neutral-200">
                  Donator Name
                </label>
              </div>

              <div className="sm:col-span-9">
                <input
                  disabled
                  defaultValue={user.displayName}
                  type="text"
                  name="donatorName"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Enter Your Name"
                />
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="af-account-password"
                  className="inline-block text-base font-semibold text-gray-600 mt-2.5 dark:text-neutral-200"
                >
                  Donator Email
                </label>
              </div>

              <div className="sm:col-span-9">
                <input
                  disabled
                  id="af-account-password"
                  type="email"
                  name="donatorEmail"
                  defaultValue={user?.email}
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Enter Your Email Address"
                />
              </div>
            </div>

            <div className="mt-5 flex justify-end gap-x-2">
              <button
                type="reset"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#ED4C67] text-white hover:bg-[#B53471] disabled:opacity-50 disabled:pointer-events-none"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
