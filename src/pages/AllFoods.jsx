import React, { useState } from "react";
import FeaturedCard from "../components/FeaturedCard";
import FeaturedCard3Column from "../components/FeaturedCard3Column";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet";

const AllFoods = () => {
  const [layout, setLayout] = useState(3);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const axiosFetch = useAxios();

  const {
    data: foods = [],
    isLoading,
    error,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["foods", sort],
    queryFn: async () => {
      const { data } = await axiosFetch(
        `/foods?sort=${sort}&status=Available&search=${search}`
      );
      return data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError) {
    console.log(error.message);
  }

  const handleChangeLayout = () => {
    if (layout === 3) {
      setLayout(2);
    } else {
      setLayout(3);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div>
      <Helmet>
        <title>FFiesta | All Foods</title>
      </Helmet>
      <div className="my-10">
        <div className="text-center space-y-3">
          <h1 className=" font-bold text-3xl">All Foods</h1>
          <p className="opacity-80">
            Discover a variety of fresh ingredients, culinary products, and menu
            offerings available for your culinary adventures.
          </p>
        </div>
        <div className="md:navbar">
          <div className="md:w-10/12 w-full">
            <form
              onSubmit={handleSearch}
              className="flex items-center w-full lg:w-[80%] md:mr-8"
            >
              <label
                htmlFor="hs-as-table-product-review-search"
                className="sr-only"
              >
                Search
              </label>
              <div className="relative mt-5 w-full">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  id="hs-as-table-product-review-search"
                  name="hs-as-table-product-review-search"
                  className="py-3 px-3 ps-11 w-full border-gray-200 rounded-lg text-sm focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Enter Food Name"
                  value={search}
                />

                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                  <svg
                    className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <button className="btn absolute bg-[#ED4C67] text-white hover:bg-[#B53471] rounded-lg inset-y-[7px] end-2 flex items-center pointer-events-auto btn-sm">
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="navbar p-0 justify-between">
            <div className="dropdown">
              <button className="mt-4 btn bg-[#ED4C67] text-white hover:bg-[#B53471] rounded-lg">
                Sorting
              </button>
              <ul
                tabIndex={0}
                className="space-y-2 dropdown-content z-[10] p-3 shadow bg-base-100 rounded-box w-52"
              >
                <li
                  onClick={() => {
                    setSort("asc");
                    refetch();
                  }}
                >
                  <option className="hover:bg-[#ED4C67] hover:text-white hover:cursor-pointer px-3 py-2 rounded-lg w-full inline-block">
                    Ascending Order
                  </option>
                </li>

                <li
                  onClick={() => {
                    setSort("dsc");
                    refetch();
                  }}
                >
                  <option className="hover:bg-[#ED4C67] hover:text-white hover:cursor-pointer px-3 py-2 rounded-lg w-full inline-block">
                    Descending Order
                  </option>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <button
                onClick={handleChangeLayout}
                className="mt-4 btn bg-[#ED4C67] text-white hover:bg-[#B53471] rounded-lg"
              >
                Change Layout
              </button>
            </div>
          </div>
        </div>
        {/* Cards */}

        <div>
          {layout === 3 ? (
            <div className="mt-6 max-w-[85rem] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {foods?.map((food) => (
                <FeaturedCard3Column key={food._id} food={food} />
              ))}
            </div>
          ) : (
            <div className="mt-10 grid lg:grid-cols-2 gap-8 max-w-[85rem] mx-auto">
              {foods?.map((food) => (
                <FeaturedCard key={food._id} food={food} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllFoods;
