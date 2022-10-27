import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex items-center h-screen">
      <div class="shadow-lg rounded-2xl w-96 p-4 bg-white dark:bg-gray-800 max-w-lg m-auto">
        <div class="w-full h-full text-center">
          <div class="flex h-full flex-col justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              width="40"
              height="40"
              class="mt-4 w-12 h-12 m-auto text-indigo-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>

            <p class="text-gray-800 dark:text-gray-200 text-xl font-bold mt-4">
              {error.statusText || error.message}
            </p>
            <p class="text-gray-600 dark:text-gray-400 text-xs py-2 px-6">
              Sorry, an unexpected error has occurred.
            </p>
            <div class="flex items-center justify-between gap-4 w-full mt-8">
              <Link
                to="/"
                type="button"
                class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Back to home
              </Link>
              <button
                type="button"
                class="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
