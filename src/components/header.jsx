// import { useEffect, useState } from "react";
// import { Dialog, DialogPanel } from "@headlessui/react";
// import { Link, NavLink } from "react-router-dom";
// import Icons from "../assets/icons";
// import Images from "../assets/images";

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "Find a job", href: "/find-job" },
//   { name: "Explore companies" },
//   { name: "Compare salaries", href: "#" },
//   { name: "Recruiter area", href: "#" },
//   { name: "Pages", href: "#" },
// ];

// const Header = () => {
//   /////////////////////////
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [headerColor, setHeaderColor] = useState("");
//   console.log("🚀 ~ Header ~ headerColor:", headerColor)
//   const handleColor=(item)=>{
//     setHeaderColor(item)
//   }
//   return (
//     <header className="bg-white shadow-md ">
//       <nav
//         aria-label="Global"
//         className="xl:flex items-center xl:w-[1280px] justify-between  xl:mx-auto   mx-7 py-6"
//       >
//         <div
//           className={`xl:w-[1280px]  flex  justify-between 
//            items-center xl:gap-[82px] gap-3`}
//         >
//           <div className="">
//             <Link to="/" className="flex items-center">
//               <img
//                 alt="Logo"
//                 src={Images.jobyzlogo}
//                 className={`lg:h-15 h-12 -mt-2  w-auto `}
//               />
//             </Link>
//           </div>
//           <div className="flex justify-between items-center gap-5  lg:flex-1">
//             <div className="hidden lg:flex xl:gap-x-9 gap-4">
//               {navigation.map((item) => (
//                 <NavLink
//                   key={item.name}
//                   to={item.href}
//                   className={({ isActive }) =>
//                     headerColor === item.name
//                       ? "text-[16px] font-semibold text-primaryBlue  "
//                       : "text-[16px] font-semibold text-[#2E2E2E]"
//                   }
//                   onClick={() => handleColor(item.name)}
//                 >
//                   {item.name}
//                 </NavLink>
//               ))}
//             </div>

//             <div className="lg:flex items-center gap-x-2 hidden ">
//               <Icons.FaUser /> Login/Register
//               {/* {isAuthenticated ? (
//                 <Menu as="div" className="relative ml-3">
//                   <div>
//                     <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                       <span className="absolute -inset-1.5" />
//                       <span className="sr-only">Open user menu</span>
//                       <img
//                         alt="profile"
//                         // src={
//                         //   profile?.profile?.profile?.profilePic
//                         //     ? `${baseUrl}/profile/${profile?.profile?.profile?.profilePic}`
//                         //     : profilePic
//                         //     ? `${baseUrl}/profile/${profilePic}`
//                         //     : emptyAvatar
//                         // }
//                         className="size-15 object-cover rounded-xl"
//                       />
//                     </MenuButton>
//                   </div>
//                   <MenuItems
//                     transition
//                     className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//                   >
//                     <MenuItem>
//                       <a
//                         href="/profile"
//                         className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
//                       >
//                         Your Profile
//                       </a>
//                     </MenuItem>
//                     <MenuItem>
//                       <a
//                         href="#"
//                         className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
//                       >
//                         Settings
//                       </a>
//                     </MenuItem>
//                     <MenuItem>
//                       <a
//                         href="#"
//                         className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
//                         onClick={handleLogout}
//                       >
//                         Log out
//                       </a>
//                     </MenuItem>
//                   </MenuItems>
//                 </Menu>
//               ) : ( */}
//               {/* <Link to="/sign-in">
//                   <Button
//                     text="Log In"
//                     type="button"
//                     className="bg-[#0047FF] text-title-md rounded-lg border hover:text-[#0047FF] hover:border-2 hover:border-[#0047FF] hover:bg-transparent text-white font-bold py-3 px-10 focus:outline-none"
//                   />
//                 </Link> */}
//               {/* )} */}
//             </div>
//             {/* <div className="flex justify-center items-center gap-x-6 lg:hidden"> */}
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(true)}
//               className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 lg:hidden"
//             >
//               <span className="sr-only">Open main menu</span>
//               <Icons.HiOutlineBars3CenterLeft
//                 aria-hidden="true"
//                 className="h-6 w-6"
//               />
//             </button>
//           </div>
//         </div>
//       </nav>
//       <Dialog
//         open={mobileMenuOpen}
//         onClose={setMobileMenuOpen}
//         className="lg:hidden"
//       >
//         <div className="fixed inset-0 z-10" />
//         <DialogPanel className="fixed inset-y-0 right-0 z-10 w-[50%] overflow-y-auto bg-white px-8 py-8 lg:max-w-lg sm:ring-1 sm:ring-gray-900/10">
//           <div className="flex items-center justify-end gap-x-6">
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(false)}
//               className="-m-2.5 rounded-md p-2.5 text-gray-700 "
//             >
//               <span className="sr-only">Close menu</span>
//               <Icons.HiXMark aria-hidden="true" className="h-6 w-6" />
//             </button>
//           </div>
//           <div className="mt-6 flow-root">
//             <div className="-my-6 ">
//               <div className="space-y-2  border-b-2 border-[#C6C6C6]">
//                 <Link
//                   to="/get-listed"
//                   className=" block rounded-lg  py-2.5 text-title-sm font-normal text-black"
//                 >
//                   Login/Register
//                 </Link>
//               </div>
//               <div className=" border-b-2 border-[#C6C6C6]">
//                 {/* {isAuthenticated ? (
//                   <button
//                     onClick={() => {
//                       handleLogout();
//                       setMobileMenuOpen(false);
//                     }}
//                     className=" block rounded-lg  py-2.5 text-title-sm font-normal text-black"
//                   >
//                     Log out
//                   </button>
//                 ) : ( */}
//                 <Link
//                   // to="/sign-in"
//                   onClick={() => setMobileMenuOpen(false)}
//                   className=" block rounded-lg  py-2.5 text-title-sm font-normal text-black"
//                 >
//                   Home
//                 </Link>
//                 {/* )} */}
//               </div>
//               <div className="space-y-2  border-b-2 border-[#C6C6C6]">
//                 <Link
//                   // to="/get-listed"
//                   className=" block rounded-lg  py-2.5 text-title-sm font-normal text-black"
//                 >
//                   Find a job
//                 </Link>
//               </div>
//               <div className="space-y-2  border-b-2 border-[#C6C6C6]">
//                 <Link
//                   // to="/get-listed"
//                   className="-mx-3 block rounded-lg px-3 py-2.5 text-title-sm font-normal text-black"
//                 >
//                   Explore Companies
//                 </Link>
//               </div>
//               <div className="space-y-2  border-b-2 border-[#C6C6C6]">
//                 <Link
//                   // to="/get-listed"
//                   className=" block rounded-lg  py-2.5 text-title-sm font-normal text-black"
//                 >
//                   Compare Salaries
//                 </Link>
//               </div>
//               <div className="space-y-2  border-b-2 border-[#C6C6C6]">
//                 <Link
//                   // to="/get-listed"
//                   className=" block rounded-lg  py-2.5 text-title-sm font-normal text-black"
//                 >
//                   Recruiter area
//                 </Link>
//               </div>
//               <div className="space-y-2  border-b-2 border-[#C6C6C6]">
//                 <Link
//                   // to="/get-listed"
//                   className=" block rounded-lg  py-2.5 text-title-sm font-normal text-black"
//                 >
//                   Pages
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </DialogPanel>
//       </Dialog>
//     </header>
//   );
// };
// export default Header;




import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";
import Icons from "../assets/icons";
import Images from "../assets/images";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Find a job", href: "/find-job" },
  { name: "Explore companies", href: "#" },
  { name: "Compare salaries", href: "#" },
  { name: "Recruiter area", href: "#" },
  { name: "Pages", href: "#" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState("");
  
  const handleColor = (item) => {
    setHeaderColor(item);
  };

  return (
    <header className="bg-white shadow-md ">
      <nav
        aria-label="Global"
        className="xl:flex items-center xl:w-[1280px] justify-between xl:mx-auto mx-7 py-6"
      >
        <div className={`xl:w-[1280px] flex justify-between items-center xl:gap-[82px] gap-3`}>
          <div>
            <Link to="/" className="flex items-center">
              <img
                alt="Logo"
                src={Images.jobyzlogo}
                className={`lg:h-15 h-12 -mt-2 w-auto`}
              />
            </Link>
          </div>
          <div className="flex justify-between items-center gap-5 lg:flex-1">
            <div className="hidden lg:flex xl:gap-x-9 gap-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name} // Ensures unique keys based on the name
                  to={item.href}
                  className={({ isActive }) =>
                    headerColor === item.name
                      ? "text-[16px] font-semibold text-primaryBlue"
                      : "text-[16px] font-semibold text-[#2E2E2E]"
                  }
                  onClick={() => handleColor(item.name)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="lg:flex items-center gap-x-2 hidden">
              <Icons.FaUser /> Login/Register
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 lg:hidden"
            >
              <span className="sr-only">Open main menu</span>
              <Icons.HiOutlineBars3CenterLeft aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-[50%] overflow-y-auto bg-white px-8 py-8 lg:max-w-lg sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end gap-x-6">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <Icons.HiXMark aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6">
              {navigation.map((item) => (
                <Link
                  key={`${item.name}-mobile`} // Unique keys for mobile links
                  to={item.href}
                  className="block rounded-lg py-2.5 text-title-sm font-normal text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;

