import React from "react";
import FeaturedCard from "./FeaturedCard";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxios from "./../hooks/useAxios";
import Loading from "./Loading";

const FeaturedSection = () => {
  const axiosFetch = useAxios();

  const {
    data: foods = [],
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const { data } = await axiosFetch("/foods?status=Available");
      return data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError) {
    console.error(error.message);
  }

  return (
    <div id="foods" className="md:my-16 my-10">
      <div className="text-center space-y-3">
        <h2 className="font-bold text-3xl">Featured Foods</h2>
        <p className="opacity-80">
          Explore our curated culinary delights, from appetizers to desserts,
          for an unforgettable dining journey.
        </p>
      </div>
      {/* Card */}
      <div className="mt-10 grid lg:grid-cols-2 gap-8">
        {
          // sort food by food quantity and display only 6
          foods
            ?.sort((a, b) => {
              return b.food_quantity - a.food_quantity;
            })
            ?.slice(0, 6)
            ?.map((food) => (
              <FeaturedCard key={food.id} food={food} />
            ))
        }
      </div>
      {/* Show All btn */}
      <div className="flex justify-center mt-6">
        <Button size="lg" className="bg-[#ED4C67] hover:bg-[#B53471]">
          <Link to={`/all-foods`}>Show All</Link>
        </Button>
      </div>
    </div>
  );
};

export default FeaturedSection;
