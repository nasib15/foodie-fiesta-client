import React from "react";

const FeedbackSection = () => {
  return (
    <div>
      <div className="md:my-16 my-10 max-w-[85rem] mx-auto">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
              Feedback Form
            </h2>
          </div>
          <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700">
            <div>
              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="hs-feedback-post-comment-name-1"
                  className="block mb-2 text-lg font-semibold dark:text-white"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="hs-feedback-post-comment-name-1"
                  className="py-3 px-4 block w-full border-gray-300 rounded-lg text-sm focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Full name"
                />
              </div>

              <div className="mb-4 sm:mb-8">
                <label
                  htmlFor="hs-feedback-post-comment-email-1"
                  className="block mb-2 text-lg font-semibold dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="hs-feedback-post-comment-email-1"
                  className="py-3 px-4 block w-full border-gray-300 rounded-lg text-sm focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Email address"
                />
              </div>

              <div>
                <label
                  htmlFor="hs-feedback-post-comment-textarea-1"
                  className="block mb-2 text-lg font-semibold dark:text-white"
                >
                  Feedback
                </label>
                <div className="mt-1">
                  <textarea
                    id="hs-feedback-post-comment-textarea-1"
                    name="hs-feedback-post-comment-textarea-1"
                    rows="3"
                    className="py-3 px-4 block w-full border-gray-300 rounded-lg text-sm focus:border-[#ED4C67] focus:ring-[#ED4C67] disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    placeholder="Leave your feedback here..."
                  ></textarea>
                </div>
              </div>

              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#ED4C67] text-white hover:bg-[#B53471] disabled:opacity-50 disabled:pointer-events-none"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
