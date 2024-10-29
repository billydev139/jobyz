import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";
import Icons from "../assets/icons";
import Images from "../assets/images";

const navigation = [
  { name: "Home", href: "/ranking" },
  { name: "Find a job", href: "/Community" },
  { name: "Explore companies", href: "/get-listed" },
  { name: "Compare salaries", href: "/ranking" },
  { name: "Recruiter area", href: "/Community" },
  { name: "Pages", href: "/get-listed" },
];

const Header = () => {
  /////////////////////////
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md ">
      <nav
        aria-label="Global"
        className="xl:flex items-center xl:w-[1280px] justify-between  xl:mx-auto   mx-7 py-6"
      >
        <div
          className={`xl:w-[1280px]  flex  justify-between 
           items-center xl:gap-[82px] gap-3`}
        >
          <div className="">
            <Link to="/ranking" className="flex items-center">
              <img
                alt="Logo"
                src={Images.jobyzlogo}
                className={`lg:h-15 h-12 -mt-2  w-auto `}
              />
            </Link>
          </div>
          <div className="flex justify-evenly items-center gap-5  lg:flex-1">
            <div className="hidden lg:flex xl:gap-x-9 gap-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[20px] font-semibold text-black underline "
                      : "text-[20px] font-semibold text-black"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
 

            <div className="flex items-center gap-x-2">
              <Icons.FaUser /> Login/Register
              {/* {isAuthenticated ? (
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt="profile"
                        // src={
                        //   profile?.profile?.profile?.profilePic
                        //     ? `${baseUrl}/profile/${profile?.profile?.profile?.profilePic}`
                        //     : profilePic
                        //     ? `${baseUrl}/profile/${profilePic}`
                        //     : emptyAvatar
                        // }
                        className="size-15 object-cover rounded-xl"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      <a
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Your Profile
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Settings
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                        onClick={handleLogout}
                      >
                        Log out
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              ) : ( */}
              {/* <Link to="/sign-in">
                  <Button
                    text="Log In"
                    type="button"
                    className="bg-[#0047FF] text-title-md rounded-lg border hover:text-[#0047FF] hover:border-2 hover:border-[#0047FF] hover:bg-transparent text-white font-bold py-3 px-10 focus:outline-none"
                  />
                </Link> */}
              {/* )} */}
            </div>
            {/* <div className="flex justify-center items-center gap-x-6 lg:hidden"> */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 lg:hidden"
            >
              <span className="sr-only">Open main menu</span>
              {/* <Bars3Icon aria-hidden="true" className="h-6 w-6" /> */}
            </button>
          </div>
          {/* <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button> */}
          {/* </div> */}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#E8EFFF] px-8 py-8 lg:max-w-lg sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end gap-x-6">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 "
            >
              <span className="sr-only">Close menu</span>
              {/* <XMarkIcon aria-hidden="true" className="h-6 w-6" /> */}
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 ">
              <div className="space-y-2 py-6 border-b-2 border-[#C6C6C6]">
                <Link
                  to="/get-listed"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-title-sm font-normal text-black"
                >
                  Get Listed
                </Link>
              </div>
              <div className="py-6 border-b-2 border-[#C6C6C6]">
                {/* {isAuthenticated ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-title-sm font-normal text-black"
                  >
                    Log out
                  </button>
                ) : ( */}
                <Link
                  to="/sign-in"
                  onClick={() => setMobileMenuOpen(false)}
                  className=" block rounded-lg px-3 py-2.5 text-title-sm font-normal text-black"
                >
                  <Icons.FaUser /> Log in
                </Link>
                {/* )} */}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
export default Header;
