// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
// import ResponsiveMenu from "./ResponsiveMenu";
// import logoImg from "../assets/s2 logo 2.jpeg"; 

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <>
//       <nav className="fixed top-0 w-full bg-[#1a1a2e] text-white shadow-lg z-50">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             {/* Logo section */}
//            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
//                <img src={logoImg} alt="Logo" className="h-20 sm:h-20 " />
//              </Link>

//             {/* Desktop Navigation Links */}
//             <div className="hidden md:flex items-center space-x-20">
//               <div className="relative group">
//                 <NavLink
//                   to="/"
//                   className="text-white hover:text-orange-400 transition-colors duration-200 flex items-center gap-1"
//                 >
//                   HOME 
                 
//                 </NavLink>
                
//                 {/* Dropdown Menu */}
               
//               </div>
              
//               <div className="relative group">
//                 <NavLink
//                   to="/about"
//                   className="text-white hover:text-orange-400 transition-colors duration-200 flex items-center gap-1"
//                 >
//                   ABOUT US
                 
//                 </NavLink>
                
//                 {/* WHO WE ARE Dropdown Menu */}
                
//               </div>
              
//               <div className="relative group">
//                 <NavLink
//                   to="/menu"
//                   className="text-white hover:text-orange-400 transition-colors duration-200 flex items-center gap-1"
//                 >
//                   MENU
                  
//                 </NavLink>
                
//                 {/* RESOURCES Dropdown Menu */}
              
//               </div>
              
//               <NavLink
//                 to="/blog"
//                 className="text-white hover:text-orange-400 transition-colors duration-200"
//               >
//                 BLOG
//               </NavLink>
              
//               <NavLink
//                 to="/contact"
//                 className="text-white hover:text-orange-400 transition-colors duration-200"
//               >
//                 CONTACT US
//               </NavLink>
//             </div>

//             {/* Get In Touch Button */}
//             <div className="hidden md:block">
//               <Link
//                 to="/contact"
//                 className="bg-blue-600 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors duration-200 font-medium"
//               >
//                 Get In Touch
//               </Link>
//             </div>

//             {/* Mobile Hamburger Menu */}
//             <div className="md:hidden">
//               {showMenu ? (
//                 <HiMenuAlt1
//                   onClick={toggleMenu}
//                   className="cursor-pointer text-white"
//                   size={30}
//                 />
//               ) : (
//                 <HiMenuAlt3
//                   onClick={toggleMenu}
//                   className="cursor-pointer text-white"
//                   size={30}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
        
//         {/* Responsive menu */}
//         <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
//       </nav>
//     </>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import logoImg from "../assets/s2 logo 2.jpeg";

const Navbar = () => {
 const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  const navLinkClasses = ({ isActive }) =>
    `relative px-2 py-1 font-medium transition 
     ${isActive ? "text-orange-400 after:w-full" : "text-white hover:text-orange-400"}
     after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-orange-400 after:w-0 after:transition-all after:duration-300 hover:after:w-full`;
  return (
    <nav className="fixed top-0 w-full bg-[#1a1a2e] text-white shadow-lg z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={logoImg} alt="Logo" className="h-16 sm:h-20" />
          </Link>
  <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClasses}>HOME</NavLink>
            <NavLink to="/about" className={navLinkClasses}>ABOUT</NavLink>
            <NavLink to="/menu" className={navLinkClasses}>MENU</NavLink>
            <NavLink to="/blog" className={navLinkClasses}>BLOG</NavLink>
            <NavLink to="/contact" className={navLinkClasses}>CONTACT</NavLink>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-2 rounded-full shadow-lg transition"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            {showMenu ? (
              <HiMenuAlt1 onClick={toggleMenu} size={30} className="cursor-pointer text-white" />
            ) : (
              <HiMenuAlt3 onClick={toggleMenu} size={30} className="cursor-pointer text-white" />
            )}
          </div>
        </div>
      </div>

      {/* Responsive Menu */}
      <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
