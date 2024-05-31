/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import error from "./error.json";

const ErrorPage = () => {
  return (
    <div>
      <section className="flex items-center justify-center h-[calc(100vh-80px)] p-16">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-xl text-center">
            <div>
              <Lottie className="" animationData={error} loop={true} />
            </div>
            <Link
              rel="noopener noreferrer"
              to={"/"}
              className="px-8 py-3 font-semibold rounded bg-[#ED4C67] hover:bg-[#B53471] text-white"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
