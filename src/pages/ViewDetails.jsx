import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../providers/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxios from "./../hooks/useAxios";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

const ViewDetails = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const axiosFetch = useAxios();
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: food,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["food", id],
    queryFn: async () => {
      const { data } = await axiosFetch(`/food/${id}`);
      return data;
    },
  });

  const {
    food_quantity,
    food_name,
    expired_date,
    additional_notes,
    donor_name,
    donor_image,
    location,
    food_image,
    donor_email,
  } = food || {};

  if (isLoading) return <Loading />;
  if (isError) {
    console.error(error.message);
  }

  const handleRequest = async (e) => {
    e.preventDefault();
    const form = e.target;
    const food_name = form.foodName.value;
    const food_image = form.image.value;
    const requested_date = selectedDate;
    const location = form.location.value;
    const additional_notes = form.notes.value;
    const status = "Requested";

    const requestData = {
      food_name,
      food_image,
      requested_date,
      location,
      additional_notes,
      status,
      donor_name,
      donor_email,
      donor_image,
      expired_date,
    };

    if (user?.email === donor_email) {
      toast.error("You can't request your own food.");
      return;
    }

    try {
      await axiosFetch.patch(`/food/${id}`, requestData);
      toast.success("Your Food has been requested successfully!");
      navigate("/my-food-req", { replace: true });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-36 lg:py-14 mx-auto">
      <Helmet>
        <title>FFiesta | {food_name}</title>
      </Helmet>
      <div className="grid sm:grid-cols-2 sm:items-center gap-8">
        <div className="sm:order-2">
          <div className="relative pt-[50%] sm:pt-[100%] rounded-lg">
            <img
              className="size-full absolute top-0 start-0 object-cover rounded-lg"
              src={food_image}
              alt="Image Description"
            />
          </div>
        </div>

        <div className="sm:order-1">
          <div className="flex gap-4">
            <p className="mb-5 text-base inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md font-medium bg-gray-100 text-gray-700 dark:bg-neutral-800 dark:text-neutral-200">
              Quantity: {food_quantity}
            </p>
            <p className="mb-5 text-base inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md font-medium bg-gray-100 text-gray-700 dark:bg-neutral-800 dark:text-neutral-200">
              By: {new Date(expired_date).toLocaleDateString("en-UK")}
            </p>
          </div>

          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800 dark:text-neutral-200">
            <p className="hover:text-[#ED4C67] dark:text-neutral-300 dark:hover:text-white hover:cursor-pointer">
              {food_name}
            </p>
          </h2>
          <h3 className="mt-6 text-lg text-gray-700">
            Pickup Location: {location}
          </h3>
          <h4 className="mt-4 text-lg font-semibold text-gray-800 dark:text-neutral-300">
            Additional Notes:
          </h4>
          <p className="sm:max-w-[80%] mt-2 text-gray-600 dark:text-neutral-400">
            {additional_notes}
          </p>

          <div className="mt-6 sm:mt-10 flex items-center">
            <div className="flex-shrink-0">
              <img
                className="size-10 sm:h-14 sm:w-14 rounded-full object-cover"
                src={donor_image}
                alt="Image Description"
              />
            </div>

            <div className="ms-3 sm:ms-4">
              <p className="sm:mb-1 font-semibold text-gray-800 dark:text-neutral-200">
                {donor_name}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <button
              className="btn bg-[#ED4C67] hover:bg-[#B53471] text-white px-6"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              REQUEST
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box w-11/12 max-w-4xl  my-auto h-[75vh] rounded-xl">
                <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
                  <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800">
                    <div className="mb-8">
                      <h2 className="text-2xl text-center font-bold text-gray-800 dark:text-neutral-200">
                        Request A Food
                      </h2>
                    </div>
                    <form onSubmit={handleRequest}>
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
                              disabled
                              defaultValue={food_name}
                              type="text"
                              name="foodName"
                              className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                              placeholder="Enter Your Food Name Here"
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
                            disabled
                            type="url"
                            defaultValue={food_image}
                            name="image"
                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Enter URL of the image"
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
                            defaultValue={location}
                            disabled
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
                            Request Date
                          </label>
                        </div>

                        <div className="sm:col-span-9 ">
                          <div className="sm:flex ">
                            <DatePicker
                              disabled
                              className="focus:border-[#ED4C67] focus:ring-[#ED4C67] border-gray-200 shadow-sm text-base rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                              showIcon
                              dateFormat="dd/MM/yyyy"
                              toggleCalendarOnIconClick
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
                            defaultValue={additional_notes}
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
                            disabled
                            defaultValue={"available"}
                            name="status"
                            className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                          >
                            <option value="available">Available</option>
                            <option value="not available">Not Available</option>
                          </select>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="af-account-password"
                            className="inline-block text-base font-semibold text-gray-600 mt-2.5 dark:text-neutral-200"
                          >
                            User Email
                          </label>
                        </div>

                        <div className="sm:col-span-9">
                          <input
                            disabled
                            id="af-account-password"
                            type="email"
                            name="userEmail"
                            defaultValue={user?.email}
                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Enter Your Email Address"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label className="inline-block text-base font-semibold text-gray-600 mt-2.5 dark:text-neutral-200">
                            Donator Name
                          </label>
                        </div>

                        <div className="sm:col-span-9">
                          <input
                            disabled
                            defaultValue={donor_name}
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
                            defaultValue={donor_email}
                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                            placeholder="Enter Your Email Address"
                          />
                        </div>
                      </div>

                      <div className="mt-5 flex justify-end gap-x-2">
                        <button
                          type="button"
                          onClick={() =>
                            document.getElementById("my_modal_1").close()
                          }
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#ED4C67] text-white hover:bg-[#B53471] disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Request
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
