import React from 'react'

const Search = ({searchTerm, handleSearch}) => {
  return (
    <div className="mb-8">
          <label className="text-lg text-gray-700 font-semibold mb-2">Search:</label>
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full p-3 border rounded-md bg-white focus:outline-none focus:ring focus:border-indigo-300"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-5.2-5.2"></path>
                <circle cx="10" cy="10" r="8"></circle>
              </svg>
            </div>
          </div>
        </div>
  )
}

export default Search