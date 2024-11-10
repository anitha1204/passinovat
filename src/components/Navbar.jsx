
// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import logoImg from "../assets/Asset 1 1.png";
// import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
// import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
// import { FaInstagram } from "react-icons/fa";
// import { RiFacebookBoxLine } from "react-icons/ri";
// import { CiLinkedin } from "react-icons/ci";
// import ResponsiveMenu from "./ResponsiveMenu.jsx";


// const Navbars = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <>
//       <nav className="fixed top-0 w-full bg-white text-secondary shadow-md z-10">
//         {/* Top bar */}

//         {/* Main navbar */}
//         <div className="container mx-auto py-3 sm:py-0 px-4 lg:px-0">
//           <div className="flex justify-between items-center">
//             {/* Logo section */}
//             <Link to="/" onClick={() => window.scrollTo(0, 0)}>
//               <img src={logoImg} alt="Logo" className="h-16 sm:h-20 sm:ml-10 lg:ml-20" />
//             </Link>
//             {/* Navlinks section */}
//             <div className="hidden md:block">
//               <ul className="flex items-center gap-4 lg:gap-8 xl:gap-10 text-lg lg:text-xl xl:text-2xl ">
//                 <li className="py-2 hover:text-primary">
//                   <NavLink
//                     exact
//                     to="/"
//                     activeClassName="text-primary"
//                     onClick={() => window.scrollTo(0, 0)}
//                   >
//                     Home
//                   </NavLink>
//                 </li>
//                 <li className="py-2 hover:text-primary">
//                   <NavLink
//                     to="/aboutUs"
//                     activeClassName="text-primary"
//                     onClick={() => window.scrollTo(0, 0)}
//                   >
//                     About Us
//                   </NavLink>
//                 </li>
//                 <li className="py-2 hover:text-primary">
//                   <NavLink
//                     to="/menu"
//                     activeClassName="text-primary"
//                     onClick={() => window.scrollTo(0, 0)}
//                   >
//                     Menu
//                   </NavLink>
//                 </li>
//                 <li className="py-2 hover:text-primary">
//                   <NavLink
//                     to="/blog"
//                     activeClassName="text-primary"
//                     onClick={() => window.scrollTo(0, 0)}
//                   >
//                     Blog
//                   </NavLink>
//                 </li>
//                 <li className="py-2 hover:text-primary">
//                   <NavLink
//                     to="/contact"
//                     activeClassName="text-primary"
//                     onClick={() => window.scrollTo(0, 0)}
//                   >
//                     Contact
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//             {/* User and Cart icons */}
//             <div className="flex items-center space-x-4">
//               <div className="hidden md:flex items-center space-x-2 mr-20">
//                 <AiOutlineUser className="text-2xl cursor-pointer hover:text-primary" />
//                 <Link to="/cart" className="relative">
//                    <AiOutlineShoppingCart className="text-2xl cursor-pointer hover:text-primary" />
//                    <div className="absolute w-4 h-4 bg-primary text-white flex items-center justify-center rounded-full text-xs bottom-1 ml-4 mb-3"></div>
//                  </Link>
//               </div>
//               {/* Table Booking button */}
//               <button
//               //  onClick={<Popup/>}
//                 className=" bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
//               >
//                 Table Booking
//               </button> 

//               {/* Mobile Hamburger Menu */}
//               <div className="md:hidden">
//                 {showMenu ? (
//                   <HiMenuAlt1
//                     onClick={toggleMenu}
//                     className="cursor-pointer"
//                     size={30}
//                   />
//                 ) : (
//                   <HiMenuAlt3
//                     onClick={toggleMenu}
//                     className="cursor-pointer"
//                     size={30}
//                   />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Responsive menu */}
//         <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
//       </nav>
//     </>
//   );
// };

// export default Navbars;



import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/Asset 1 1.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import img from '../assets/3d_avatar_10.png'

const Navbars = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <nav className=" py-10 w-full bg-white">
                {/* Top bar */}

                {/* Main navbar */}
                <div className="container  lg:px-0">
                    <div className="flex justify-between items-center">
                        {/* Logo section */}
                        <Link to="/" >
                            <img src={logoImg} alt="Logo" className="h-16 sm:h-20 ml-10 lg:ml-0" />
                        </Link>
                        {/* Navlinks section */}
                        <div className="hidden md:block">
                            <ul className="flex items-center gap-4 lg:gap-8 xl:gap-10 text-md lg:text-md xl:text-lg lg:ml-60 font-semibold" >

                                <li className="py-2" >
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `${isActive ? 'text-primary underline' : ''}`
                                        }
                                    >
                                        About us
                                    </NavLink>
                                </li>



                                <li className="py-2">
                                    <NavLink
                                        to="/products"
                                        className={({ isActive }) =>
                                            ` ${isActive ? 'text-primary underline' : ''
                                            }`
                                        }

                                    >
                                        Products
                                    </NavLink>
                                </li>
                                <li className="py-2 ">
                                    <NavLink
                                        to="/technologystack"
                                        className={({ isActive }) =>
                                            ` ${isActive ? 'text-primary underline' : ''
                                            }`
                                        }

                                    >
                                        Technology Stack
                                    </NavLink>
                                </li>
                                <li className="py-2 ">
                                    <NavLink
                                        to="/internshipsprojects"
                                        className={({ isActive }) =>
                                            ` ${isActive ? 'text-primary underline' : ''
                                            }`
                                        }

                                    >
                                        Internships & Projects
                                    </NavLink>
                                </li>
                                <button className=" bg-primary text-white px-5 py-2 rounded-full ml-2">
                                    Contact us
                                </button>

                                <div className=""><img src={img} alt="User" className="" /></div>
                            </ul>

                        </div>
                        {/* User and Cart icons */}
                        <div className="flex items-center mr-8 lg:mr-0">
                            {/* <div className="ml-2"><img src={img} alt="User" className="" /></div> */}

                            {/* Mobile Hamburger Menu */}
                            <div className="md:hidden">
                                {showMenu ? (
                                    <HiMenuAlt1
                                        onClick={toggleMenu}
                                        className="cursor-pointer"
                                        size={30}
                                    />
                                ) : (
                                    <HiMenuAlt3
                                        onClick={toggleMenu}
                                        className="cursor-pointer"
                                        size={30}
                                    />
                                )}
                            </div>

                        </div>

                    </div>
                </div>

                {/* Responsive menu */}
                <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
            </nav>
        </>
    );
};

export default Navbars;