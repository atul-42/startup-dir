// import React from 'react'

// const Card = ({card}) => {

// return (
//   <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
//     <h2 className="text-2xl font-bold text-indigo-600 mb-4">{card.StartupName}</h2>
//     <div className="grid grid-cols-2 gap-4">
//       <div>
//         <p className="text-gray-600 text-sm">Funding Amount:</p>
//         <p className="text-lg font-bold text-indigo-700">${card.AmountInUSD}</p>
//       </div>
//       <div>
//         <p className="text-gray-600 text-sm">City:</p>
//         <p className="text-lg font-bold">{card.CityLocation}</p>
//       </div>
//     </div>
//     <div className="mt-4 flex justify-between items-center text-gray-600">
//       <div>
//         <p className="text-sm">Year: {card.Date.slice(-4)}</p>
//       </div>
//     </div>
//   </div>
// );
// };

// export default Card;



// import React from 'react';

// const Card = ({ card }) => {
//   return (
//     <div className="bg-gradient-to-br from-indigo-400 to-purple-600 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
//       <h2 className="text-3xl font-semibold text-white mb-4">{card.StartupName}</h2>
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <p className="text-white text-lg font-semibold">Funding Amount:</p>
//           <p className="text-xl font-bold text-yellow-300">${card.AmountInUSD}</p>
//         </div>
//         <div>
//           <p className="text-white text-lg font-semibold">City:</p>
//           <p className="text-xl font-bold text-yellow-300">{card.CityLocation}</p>
//         </div>
//       </div>
//       <div className="mt-4 flex justify-between items-center text-white">
//         <div>
//           <p className="text-lg">Year: {card.Date.slice(-4)}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;



import React from 'react';

const Card = ({ card }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-400 to-purple-600 p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4 truncate">{card.StartupName}</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-white text-base md:text-lg lg:text-xl font-semibold mb-1">Funding Amount:</p>
          <p className="text-lg lg:text-xl font-bold text-yellow-300">${card.AmountInUSD}</p>
        </div>
        <div>
          <p className="text-white text-base md:text-lg lg:text-xl font-semibold mb-1">City:</p>
          <p className="text-lg lg:text-xl font-bold text-yellow-300 truncate">{card.CityLocation}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center text-white">
        <div>
          <p className="text-base md:text-lg lg:text-xl">Year: {card.Date.slice(-4)}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
