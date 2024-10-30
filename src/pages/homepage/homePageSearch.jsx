import InputField from "../../components/inputField";
import Button from "../../components/button";
import Icons from "../../assets/icons";

const filters = [
  { label: "Published Since", icon: <Icons.FaBell /> },
  { label: "Workload", icon: <Icons.FaRegClock /> },
  { label: "Occupational field", icon: <Icons.IoBriefcaseOutline /> },
  { label: "Contract type", icon: <Icons.FaRegFile /> },
  { label: "Language", icon: <Icons.GrLanguage /> },
  { label: "All Filters", icon: <Icons.RiListSettingsLine /> },
];

const JobSearch = ({heading}) => {
  return (
    <div>
      {heading==="FAQS" ? (
   <h1 className=" bg-primaryBlue text-white lg:text-[58px] text-[28px] font-bold mb-4  h-[191px]   flex justify-center items-center">
   FAQS
 </h1>
    ):(
      <div className="search-background  text-white  px-4 md:px-8 lg:px-16 text-center lg:h-[423px] h-[562px]  lg:pt-16 md:pt-8 pt-4">
      {/* Title */}
      <h1 className="lg:text-[58px] text-[28px] font-bold mb-4">
        Find The Job That Fits Your Life
      </h1>

      {/* Subtitle */}
      <p className="lg:text-base text-xs mb-8 max-w-5xl  mx-auto">
        Welcome To Jobzy, The Leading Job Search Platform For Professionals
        Across All Industries. We Make It Easy For Job Seekers To Find The
        Perfect Job And For Employers To Discover Top Talent. Join Us Today And
        Take The Next Step In Your Career.
      </p>

      {/* Search Bar */}
      <div className="grid lg:grid-cols-[auto_0.05fr_auto_0.2fr] flex-col items-center max-w-5xl mx-auto bg-white rounded-lg shadow-lg  p-2 ">
        <div className="grid lg:grid-cols-[0.1fr_2fr] grid-cols-[0.01fr_2fr] text-[#2E2E2E] items-center">
          <Icons.CiSearch size={20} />
          <InputField
            type="text"
            placeholder="Job title, keywords, or company"
            className="  outline-none border-none"
          />
        </div>
        <span className="hidden lg:block border-r border-gray-300 h-6 mx-2"></span>
        <span className="lg:hidden block border-b border-gray-300 h-2 "></span>

        <div className="grid grid-cols-[0.1fr_2fr]  text-[#2E2E2E] items-center max-lg:mt-2 lg:mr-2">
          <Icons.MdPlace size={20} />
          <InputField
            type="text"
            placeholder="Place or work region"
            className="    outline-none border-none"
          />
        </div>
        <span className="lg:hidden block border-b border-gray-300 h-2  mb-4"></span>
        <Button background={"bg-custom-gradient"} className="lg:mx-0 mx-4">
          Find Jobs
        </Button>
        {/* <button className="w-full md:w-auto mt-4 md:mt-0 bg-blue-500 text-white p-4 rounded-md font-bold hover:bg-blue-600 transition duration-200">
          Find Jobs
        </button> */}
      </div>

      {/* Filters */}
      <div className="flex justify-center mt-6 gap-4 flex-wrap text-base">
        {filters.map((filter, index) => (
          <button
            key={index}
            className="flex items-center text-white hover:underline"
          >
            <span className=" mr-1">{filter.icon}</span> {filter.label}
          </button>
        ))}
      </div>
      {/* <div className="flex justify-center mt-6 gap-4 flex-wrap text-sm">
        <button className="flex items-center text-white hover:underline">
          <span className="material-icons mr-1">lock</span> Published Since
        </button>
        <button className="flex items-center text-white hover:underline">
          <span className="material-icons mr-1">fitness_center</span> Workload
        </button>
        <button className="flex items-center text-white hover:underline">
          <span className="material-icons mr-1">work</span> Occupational field
        </button>
        <button className="flex items-center text-white hover:underline">
          <span className="material-icons mr-1">document_scanner</span> Contract type
        </button>
        <button className="flex items-center text-white hover:underline">
          <span className="material-icons mr-1">language</span> Language
        </button>
        <button className="flex items-center text-white hover:underline">
          <span className="material-icons mr-1">filter_alt</span> All Filters
        </button>
      </div> */}
    </div>
    )}
    </div>
  );
};

export default JobSearch;
