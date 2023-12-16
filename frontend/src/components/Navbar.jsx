// // Navbar.js
// import React, { useState } from 'react';
// import { Link as ScrollLink } from 'react-scroll';
// import StartupForm from './StartupForm';

// const Navbar = () => {
//   const [isStartupFormOpen, setIsStartupFormOpen] = useState(false);

//   const openStartupForm = () => {
//     setIsStartupFormOpen(true);
//   };

//   const closeStartupForm = () => {
//     setIsStartupFormOpen(false);
//   };

//   return (
//     <nav className="bg-indigo-500 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Website Name */}
//         <h1 className="text-white text-lg font-bold">Startup Directory</h1>

//         {/* Navigation Buttons */}
//         <div className="flex space-x-4">
//           {/* Submit Startup Button */}
//           <button
//             onClick={openStartupForm}
//             className="bg-white text-indigo-500 px-4 py-2 rounded-md hover:bg-indigo-100"
//           >
//             Submit Startup
//           </button>

//           {/* View Startups Button */}
//           <button className="bg-white text-indigo-500 px-4 py-2 rounded-md hover:bg-indigo-100">
//             <ScrollLink to="viewStartupsSection" spy={true} smooth={true} offset={-70} duration={500}>
//               View Startups
//             </ScrollLink>
//           </button>
//         </div>
//       </div>

//       {/* Popup for StartupForm */}
//       {isStartupFormOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-10">
//           <div className="bg-black opacity-50 fixed inset-0"></div>
//           <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6 z-10">
//             <StartupForm onClose={closeStartupForm} />
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





// Navbar.js
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import StartupForm from './StartupForm';

const Navbar = () => {
  const [isStartupFormOpen, setIsStartupFormOpen] = useState(false);

  const openStartupForm = () => {
    setIsStartupFormOpen(true);
  };

  const closeStartupForm = () => {
    setIsStartupFormOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-400 to-purple-600 p-4">
      <div className="container mx-auto flex items-center flex-wrap gap-4 justify-center px-[6%] sm:justify-between md:justify-between lg:justify-between xl:justify-between">
        {/* Website Name */}
        <h1 className="text-white text-lg font-bold">Startup Directory</h1>

        {/* Navigation Buttons */}
        <div className="flex space-x-4">
          {/* Submit Startup Button */}
          <button
            onClick={openStartupForm}
            className="bg-white text-indigo-500 px-4 py-2 rounded-md hover:bg-indigo-100"
          >
            Submit Startup
          </button>

          {/* View Startups Button */}
          <button className="bg-white text-indigo-500 px-4 py-2 rounded-md hover:bg-indigo-100">
            <ScrollLink to="viewStartupsSection" spy={true} smooth={true} offset={-70} duration={500}>
              View Startups
            </ScrollLink>
          </button>
        </div>
      </div>

      {/* Popup for StartupForm */}
      {isStartupFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-black opacity-50 fixed inset-0"></div>
          <div className="bg-white rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,_0,_0,_0.7)] p-0 z-10">
            <StartupForm onClose={closeStartupForm} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
