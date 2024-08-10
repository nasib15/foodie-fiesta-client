/* eslint-disable react/no-unescaped-entities */
import { Button, Carousel, Typography } from "@material-tailwind/react";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="py-6">
      <Carousel
        transition={{ duration: 1 }}
        autoplay={true}
        loop={true}
        autoplayDelay={5000}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {/* Banner img */}
        <div className="relative h-[70vh] w-full rounded-3xl">
          <img
            src="https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?t=st=1715317386~exp=1715320986~hmac=74193dce2ca831837b2b22ba04725d032be8a9136f94036eb0d4705d2065f0a2&w=1380"
            alt="image 1"
            className="h-[70vh] w-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 grid h-[70vh] w-full place-items-center bg-black/50 rounded-3xl">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                <Typewriter
                  words={["Savor the Flavors"]}
                  loop={0}
                  cursor={true}
                  cursorStyle="_"
                  delaySpeed={1500}
                ></Typewriter>
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Experience culinary bliss with our mouthwatering dishes.
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" className="bg-[#ED4C67] hover:bg-[#B53471]">
                  <a href="#foods">Explore</a>
                </Button>
                <Button size="lg" color="white" variant="text">
                  <a href="#reviews">Reviews</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[70vh] w-full rounded-3xl">
          <img
            src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?t=st=1715317705~exp=1715321305~hmac=af288f09d1d0d589bc5a7a92da40589c79fa06eff4e45113c2d1b5f7a92c3f08&w=1380"
            alt="image 2"
            className="h-[70vh] w-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 grid h-[70vh] w-full items-center bg-black/50 rounded-3xl">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                <Typewriter
                  words={["Taste the Difference"]}
                  loop={0}
                  cursor={true}
                  cursorStyle="_"
                  delaySpeed={1500}
                ></Typewriter>
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Indulge in our chef-crafted creations for an unforgettable
                dining experience.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" className="bg-[#ED4C67] hover:bg-[#B53471]">
                  <a href="#foods">Explore</a>
                </Button>
                <Button size="lg" color="white" variant="text">
                  <a href="#reviews">Reviews</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[70vh] w-full rounded-3xl">
          <img
            src="https://img.freepik.com/free-photo/tortilla-wrap-with-falafel-fresh-salad-vegan-tacos-vegetarian-healthy-food_2829-6193.jpg?t=st=1715317592~exp=1715321192~hmac=1218922c315260388de90a0b010b1dc62ba1c9cf5597fe36aa8a6ba3ffa79dd8&w=1380"
            alt="image 3"
            className="h-[70vh] w-full object-cover rounded-3xl"
          />
          <div className="absolute inset-0 grid h-[70vh] w-full items-end bg-black/50 rounded-3xl">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                <Typewriter
                  words={["Foodie Delights Await"]}
                  loop={0}
                  cursor={true}
                  cursorStyle="_"
                  delaySpeed={1500}
                ></Typewriter>
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Explore our diverse menu and discover your new favorite dish.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" className="bg-[#ED4C67] hover:bg-[#B53471]">
                  <a href="#foods">Explore</a>
                </Button>
                <Button size="lg" color="white" variant="text">
                  <a href="#reviews">Reviews</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
