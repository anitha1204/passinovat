


// import React, { useState } from 'react';
// import { FaUserCircle, FaChevronDown} from 'react-icons/fa';
// import { Link } from 'react-router-dom';



// const navbarLinks = [
//     {
//         name: "HOME",
//         link: "/",
       
//     },
//     {
//         name: "ABOUT US",
//         link: "/about",
        
//     },
//     {
//         name: "MENU",
//         link: "/menu",
        
//     },
//     {
//         name: "BLOG",
//         link: "/blog",
       
//     },
//     {
//         name: "CONTACT US",
//         link: "/contact",
       
//     },
// ];

// const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
//     const [expandedSubmenu, setExpandedSubmenu] = useState(null);
//     const [activeCategory, setActiveCategory] = useState("By Solutions");

//     const toggleSubmenu = (menuName) => {
//         setExpandedSubmenu(expandedSubmenu === menuName ? null : menuName);
//         if (menuName === "WHAT WE DO") {
//             setActiveCategory("By Solutions");
//         }
//     };

//     return (
//         <div
//             className={`${
//                 showMenu ? "left-0" : "-left-[100%]"
//             } fixed bottom-0 top-0 z-20 flex h-screen w-[90%] sm:w-[85%]
//              flex-col justify-start bg-[#1a1a2e] text-white px-6 pb-6 pt-20 
//              transition-all duration-300 md:hidden shadow-2xl overflow-y-auto`}
//         >
//             <div className='w-full'>
//                 {/* Top user section */}
//                 <div className='mb-6'>
//                     <div className='flex items-center justify-start gap-4 mb-6'>
//                         <FaUserCircle size={40} className='text-orange-500' />
//                         <div>
//                             <h1 className='text-lg font-semibold'>Hello User</h1>
//                             <h1 className='text-sm text-gray-400'>Premium User</h1>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Navigation Links */}
//                 <div className='w-full'>
//                     <ul className='space-y-2'>
//                         {navbarLinks.map(({ name, link, hasDropdown }, index) => (
//                             <li key={index} className='w-full'>
//                                 <div
//                                     className='flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-gray-200 cursor-pointer'
//                                     onClick={() => hasDropdown ? toggleSubmenu(name) : setShowMenu(false)}
//                                 >
//                                     <Link
//                                         to={link}
//                                         className='flex-1 font-medium'
//                                         onClick={(e) => {
//                                             if (hasDropdown) {
//                                                 e.preventDefault();
//                                             } else {
//                                                 setShowMenu(false);
//                                             }
//                                         }}
//                                     >
//                                         {name}
//                                     </Link>
//                                     {hasDropdown && (
//                                         <FaChevronDown 
//                                             className={`text-sm text-gray-400 transition-transform duration-200 ${
//                                                 expandedSubmenu === name ? 'rotate-180' : ''
//                                             }`} 
//                                         />
//                                     )}
//                                 </div>
                                
                               
                                
                            
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Get In Touch Button */}
//                 <div className='mt-8 w-full'>
//                     <Link
//                         to="/contact"
//                         onClick={() => setShowMenu(false)}
//                         className='w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors duration-200 font-medium text-center block'
//                     >
//                         Get In Touch
//                     </Link>
//                 </div>

//                 {/* Close button */}
//                 <div className='mt-6'>
//                     <button
//                         onClick={() => setShowMenu(false)}
//                         className='w-full bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium'
//                     >
//                         Close Menu
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ResponsiveMenu;



import React, { useState } from "react";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const navbarLinks = [
  { name: "HOME", link: "/" },
  { name: "ABOUT US", link: "/about" },
  { name: "MENU", link: "/menu" },
  { name: "BLOG", link: "/blog" },
  { name: "CONTACT US", link: "/contact" },
];

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const [expandedSubmenu, setExpandedSubmenu] = useState(null);

  const toggleSubmenu = (menuName) => {
    setExpandedSubmenu(expandedSubmenu === menuName ? null : menuName);
  };

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed top-0 bottom-0 z-50 h-screen w-[85%] sm:w-[70%] bg-[#1a1a2e] text-white 
        transition-all duration-300 ease-in-out md:hidden shadow-2xl overflow-y-auto px-6 py-8`}
    >
      {/* User Section */}
      <div className="flex items-center gap-4 mb-8">
        <FaUserCircle size={40} className="text-orange-500" />
        <div>
          <h1 className="text-lg font-semibold">Hello User</h1>
          <p className="text-sm text-gray-400">Premium User</p>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="space-y-3">
        {navbarLinks.map(({ name, link, hasDropdown }, index) => (
          <li key={index}>
            <div
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
              onClick={() =>
                hasDropdown ? toggleSubmenu(name) : setShowMenu(false)
              }
            >
              <Link
                to={link}
                className="flex-1 font-medium"
                onClick={(e) => {
                  if (hasDropdown) e.preventDefault();
                }}
              >
                {name}
              </Link>
              {hasDropdown && (
                <FaChevronDown
                  className={`text-sm text-gray-400 transition-transform duration-200 ${
                    expandedSubmenu === name ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Get In Touch Button */}
      <div className="mt-10">
        <Link
          to="/contact"
          onClick={() => setShowMenu(false)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium text-center block transition-colors"
        >
          Get In Touch
        </Link>
      </div>

      {/* Close Button */}
      <div className="mt-6">
        <button
          onClick={() => setShowMenu(false)}
          className="w-full bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Close Menu
        </button>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
