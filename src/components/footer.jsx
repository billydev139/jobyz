import { Link } from "react-router-dom";

import Icons from "../assets/icons";

const navigationLinks = [
  { name: "Follow us", href: "#" },
  { name: <Icons.FaLinkedin />, href: "#" },
  { name: <Icons.FaInstagram />, href: "#" },
  { name: <Icons.FaFacebook />, href: "#" },
  { name: <Icons.FaXTwitter />, href: "#" },

  
];
const staticLinks = [

  { name: "FAQs", href: "/terms-and-conditions" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/cookie-notice" },
];
const Footer = () => {
  return (
    <header className="bg-white shadow-md  bottom-0 left-0 w-full static border-t">
      <nav
        aria-label="Global"
        className="xl:flex  items-center xl:w-[1280px] justify-between xl:mx-auto md:border-t border-[#9BB7FF] lg:border-t-0  lg:pb-6 pb-8 pt-2 lg:pt-6"
      >
        <div className="xl:w-[1280px] lg:flex    justify-between items-center  gap-12">
          <p className="flex justify-center pb-4 lg:pb-0">
            {" "}
            © 2024 Jobyz All Rights Reserved.
          </p>
          {/* ///////////////for desktop.//////////////// */}
          <div className="text-center">
            <div className="flex justify-evenly items-center xl:gap-15 gap-5 lg:flex-1 ">
              <div className=" flex items-center xl:gap-x-13 gap-4">
                {navigationLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-[20px] font-semibold  font-inter ${
                      item.name === "Follow us" ? "" : "bg-black text-white"
                    }  p-2 rounded-full`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center max-lg:mt-4 ">
            <div className="flex flex-wrap justify-center w-full lg:gap-x-4 gap-x-8 ">
              {staticLinks?.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="lg:text-[20px] text-[16px] font-semibold text-black border-r-2 pr-4 border-[#2E2E2E]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Footer;
