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

  const navLinkClasses =
    "text-white hover:text-orange-400 transition-colors duration-200";

  return (
    <nav className="fixed top-0 w-full bg-[#1a1a2e] text-white shadow-lg z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={logoImg} alt="Logo" className="h-16 sm:h-20" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <NavLink to="/" className={navLinkClasses}>
              HOME
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              ABOUT US
            </NavLink>
            <NavLink to="/menu" className={navLinkClasses}>
              MENU
            </NavLink>
            <NavLink to="/blog" className={navLinkClasses}>
              BLOG
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses}>
              CONTACT US
            </NavLink>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors font-medium"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer text-white"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer text-white"
                size={30}
              />
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
