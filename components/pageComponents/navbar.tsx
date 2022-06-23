import React from 'react'

const Navbar = () => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col flex-1">
        <div className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
          <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
            <div className="flex justify-center flex-1 lg:mr-32"></div>
            <ul className="flex items-center flex-shrink-0 space-x-6">
              <li className="relative">
                <button
                  className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                  aria-label="Account"
                  aria-haspopup="true"
                >
                  <img
                    className="object-cover w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                    alt=""
                    aria-hidden="true"
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <main className="h-full pb-16 overflow-y-auto">
          <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
              Dashboard
            </h2>
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Total clients
                  </p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    6389
                  </p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Account balance
                  </p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    $ 46,760.89
                  </p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    New sales
                  </p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    376
                  </p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <div className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    Pending contacts
                  </p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                    35
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-6 mb-8 md:grid-cols-2">
              <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
                  Bars
                </h4>
                <canvas id="bars"></canvas>
                <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 mr-1 bg-teal-500 rounded-full"></span>
                    <span>Shoes</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
                    <span>Bags</span>
                  </div>
                </div>
              </div>

              <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
                  Lines
                </h4>
                <canvas id="line"></canvas>
                <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 mr-1 bg-teal-500 rounded-full"></span>
                    <span>Organic</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
                    <span>Paid</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-6 mb-8 md:grid-cols-2">
              <div>
                <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                  Approve smart contracts
                </h4>
                <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400">
                      smart contract
                    </span>
                    <div className="relative text-gray-500 focus-within:text-purple-600">
                      <input
                        className="block p-2 w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                        placeholder="0x343c43a37d37dff08ae8c4a11544c718abb4fcf8"
                      />
                      <button className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                        Approve
                      </button>
                    </div>
                  </label>
                </div>
              </div>
              <div>
                <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                  Market percentage commission
                </h4>
                <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400">
                      percentage commission
                    </span>
                    <div className="relative text-gray-500 focus-within:text-purple-600">
                      <input
                        className="block p-2 w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                        placeholder="15"
                      />
                      <button className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                        Update
                      </button>
                    </div>
                  </label>
                </div>
              </div>
              <div>
                <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                  Royalty fee
                </h4>
                <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400">
                      royalty fee
                    </span>
                    <div className="relative text-gray-500 focus-within:text-purple-600">
                      <input
                        className="block p-2 w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                        placeholder="15"
                      />
                      <button className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                        Update
                      </button>
                    </div>
                  </label>
                </div>
              </div>
              <div>
                <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                  Remove item
                </h4>
                <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                  <label className="block mt-4 text-sm">
                    <span className="text-gray-700 dark:text-gray-400">
                      remove item
                    </span>
                    <div className="relative text-gray-500 focus-within:text-purple-600">
                      <input
                        className="block p-2 w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                        placeholder="15"
                      />
                      <button className="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-r-md active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-red">
                        Remove
                      </button>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Navbar
