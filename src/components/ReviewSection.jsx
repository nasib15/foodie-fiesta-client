import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewSection = () => {
  return (
    <div id="reviews" className="md:my-16 my-10">
      <div className="text-center space-y-3">
        <h2 className="font-bold text-3xl">Testimonials</h2>
        <p className="opacity-80">
          Explore our curated culinary delights, from appetizers to desserts,
          for an unforgettable dining journey.
        </p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ReviewCard
            review={
              "'As a food critic, I've seen it all. But your website truly stands out. The attention to detail in the recipes and the presentation is unparalleled. Bravo!'"
            }
            name={"Daniel Miller"}
            occupation={"Food Critic"}
            image={
              "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?t=st=1715341516~exp=1715345116~hmac=9b0c481977b19e9610877eb6e36d8611d15ed7e660fadb5b543b8d5363ec99ae&w=740"
            }
          ></ReviewCard>
          <ReviewCard
            review={
              "'I'm impressed by the quality of ingredients and creativity in your recipes. It's evident that your team has a genuine passion for food.'"
            }
            name={"Michael Clark"}
            occupation={"Executive Chef"}
            image={
              "https://img.freepik.com/free-photo/smiling-young-male-posing-meadow-with-arms-crossed_23-2148179874.jpg?t=st=1715341698~exp=1715345298~hmac=e1e695f7c1ee6cb6851d128d1a26b85166d914bd73e06cce3eb503d0ed8e796b&w=740"
            }
          ></ReviewCard>
          <ReviewCard
            review={
              "'Your website has inspired me to try new recipes and techniques. The step-by-step instructions make it easy for even amateur cooks like me to create delicious meals.'"
            }
            name={"John Wilson"}
            occupation={"Home Cook"}
            image={
              "https://img.freepik.com/free-photo/closeup-serious-handsome-young-man-table_1262-3491.jpg?t=st=1715341734~exp=1715345334~hmac=6af0b83a2c9a4bc41a519f43121b54d679d21cf65323ebd54c41b9947ea4f53b&w=740"
            }
          ></ReviewCard>
          <ReviewCard
            review={
              "'I've been following your website for months now, and I'm continuously impressed by the variety of recipes and the beautiful food photography. Keep up the great work!'"
            }
            name={"David Brown"}
            occupation={"Food Blogger"}
            image={
              "https://img.freepik.com/free-photo/portrait-masculinity-portrait-handsome-young-bearded-man-while-standing-against-grey-wall_231208-7770.jpg?t=st=1715341779~exp=1715345379~hmac=25ce3b929c095cc751fa347b8610143ffde0ed619321a99abf35ec0d47cf6601&w=740"
            }
          ></ReviewCard>
          <ReviewCard
            review={
              "'Your website has been a valuable resource for me and my staff. We often turn to your recipes for inspiration and ideas to incorporate into our menu.'"
            }
            name={"Robert Anderson"}
            occupation={"Restaurant Owner"}
            image={
              "https://img.freepik.com/free-photo/happy-business-man-standing-smiling-against-red-wall_155003-9367.jpg?t=st=1715341835~exp=1715345435~hmac=8ead8f740503fdcb1bf37876bc9651af3fbda032ce73883ad63d261572e3932e&w=740"
            }
          ></ReviewCard>
          <ReviewCard
            review={
              "'I've tried numerous recipes from your website, and each one has been a hit with my family and friends. Thank you for helping me become a better cook!'"
            }
            name={"William Harris"}
            occupation={"Food Enthusiast"}
            image={
              "https://img.freepik.com/free-photo/portrait-male-tourist-visiting-great-wall-china_23-2151261922.jpg?t=st=1715341868~exp=1715345468~hmac=c4125e01c698766ec779a8dc93b22d9c036c637e4ff5c7715041fe190ccec38e&w=1380"
            }
          ></ReviewCard>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
