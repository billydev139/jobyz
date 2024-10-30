import Icons from "../../assets/icons";
import Images from "../../assets/images";
import Button from "../../components/button";
import StarRating from "../../components/starRating";

const JobListing = () => {
  const handleRatingChange = (newRating) => {
    console.log("User selected rating:", newRating); // Logs rating out of 5
  };
  const jobListings = [
    {
      id: 1,
      date: "14 Oct",
      recommended: true,
      title:
        "Project Manager (with Focus on Sustainability Regulation) (Ref. 2671)",
      location: "United Arab Emirates",
      workload: "100%",
      contractType: "Unlimited employment",
      company: "Standard Chartered Bank",
    },
    {
      id: 2,
      date: "20 Oct",
      recommended: false,
      title: "Senior Officer – Transfer Agency – Private Equity Fund Of Funds",
      location: "United Arab Emirates",
      workload: "100%",
      contractType: "Unlimited employment",
      company: "AOZ",
    },
    {
      id: 3,
      date: "16 Oct",
      recommended: true,
      title:
        "Scientific Solutions Architect – Life Science Electron Microscopy",
      location: "United Arab Emirates",
      workload: "100%",
      contractType: "Unlimited employment",
      company: "AOZ",
    },
    {
      id: 4,
      date: "16 Oct",
      recommended: true,
      title:
        "Scientific Solutions Architect – Life Science Electron Microscopy",
      location: "United Arab Emirates",
      workload: "100%",
      contractType: "Unlimited employment",
      company: "AOZ",
    },
    {
      id: 5,
      date: "16 Oct",
      recommended: true,
      title:
        "Scientific Solutions Architect – Life Science Electron Microscopy",
      location: "United Arab Emirates",
      workload: "100%",
      contractType: "Unlimited employment",
      company: "AOZ",
    },
  ];

  const infoData = [
    { icon: <Icons.FaBell />, label: "Publication date", value: "14 Oct 2024" },
    { icon: <Icons.FaRegClock />, label: "Workload", value: "100%" },
    {
      icon: <Icons.AiOutlineFileDone />,
      label: "Contract type",
      value: "Unlimited employment",
    },
    {
      icon: <Icons.GrLanguage />,
      label: "Language",
      value: "English (Fluent)",
    },
    {
      icon: <Icons.MdPlace />,
      label: "Place of Work",
      value: "United Arab Emirates",
    },
  ];

  return (
    <div className="container mx-auto bg-gray-50">
      <h2 className="text-gray-700 font-semibold  p-4">85,971 jobs</h2>
      <div className="flex p-4  ">
        {/* Left Sidebar */}
        <div className="w-1/4 pr-4">
          {jobListings.map((job) => (
            <div key={job.id} className="bg-white shadow rounded-lg p-4 mb-4">
              <p className="text-gray-600 text-sm flex items-center">
                {job.date}
                {job.recommended && (
                  <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                    Recommended
                  </span>
                )}
                <span className="  text-gray-400 cursor-pointer ml-auto">
                  <img src={Images.save} alt="save" className="w-3 h-4" />
                </span>
              </p>
              <h3 className="text-blue-600 font-medium">{job.title}</h3>
              <p className="text-[#696969] text-sm mt-1 flex items-center gap-1 mb-1">
                <span>
                  <Icons.MdPlace size={18} />
                </span>
                {job.location}
              </p>
              <p className="text-[#696969] text-sm flex items-center gap-1 mb-1 ml-[2px]">
                <span>
                  <Icons.FaRegClock size={15} />
                </span>
                {job.workload}
              </p>
              <p className="text-[#696969] text-sm flex items-center gap-1">
                <span>
                  <Icons.TbFileSettings size={18} />
                </span>
                {job.contractType}
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className={`w-10 h-10 bg-blue-500 rounded-full `}></div>
                <p className="text-gray-600 text-sm font-semibold mt-2">
                  {job.company}
                </p>
              </div>
            </div>
          ))}
          {/* Additional job listings */}
          {/* Repeat the structure above for each listing in the sidebar */}
        </div>

        {/* Main Job Details */}
        <div className="flex justify-between bg-white shadow rounded-lg p-6 w-full">
          <div className="max-w-[70%]">
            <h1 className="text-gray-800 font-bold text-xl">
              Project Manager (with Focus on Sustainability Regulation) (Ref.
              2671)
            </h1>
            <h2 className="text-gray-600 font-medium mt-2">
              Standard Chartered Bank
            </h2>
            <p className="text-gray-500 text-sm">United Arab Emirates</p>

            <section className="mt-6">
              <h3 className="text-gray-700 font-semibold mb-2">About us</h3>
              <p className="text-gray-600 text-sm">
                As a leading sustainable private bank, we offer dynamic and
                personalized services in investment advisory and asset
                management for private and institutional clients. Our success
                depends on the enthusiasm and commitment of our employees and we
                value each person with their unique technical expertise,
                professional qualifications and social skills.
                <br /> We are successfully operating for more than 180 years
                across 27 locations worldwide and offer our employees the chance
                to be a part of our success. Our employees are our most valuable
                asset, we are proud of our unique culture that fosters
                entrepreneurship and is fueled by a high team spirit and the
                positive attitude of each individual. Join our international
                team and be part of the next chapter of the Standard Chartered
                Bank.
                {/* Additional paragraphs */}
              </p>
            </section>

            <section className="mt-6">
              <h3 className="text-gray-700 font-semibold mb-2">Your role</h3>
              <p className="text-gray-600 text-sm">
                As Project Manager with focus on Sustainability Regulation
                at Bank J. Safra Sarasin you are an experienced change manager
                who is keen to build on his/her competency in managing complex
                projects in the area of sustainability and related regulations
                and provide end-to-end implementation of regulations such as
                CSRD for affected Swiss and international entities. While the
                initial focus will be on sustainability, a later diversification
                into other areas is possible.
              </p>
            </section>

            <section className="mt-6">
              <h3 className="text-gray-700 font-semibold mb-2">
                Your responsibilities
              </h3>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                <li>
                  Conduct gap analysis and solution development as well as
                  implementation and documentation of key primarily regulatory
                  sustainability projects throughout our banking group
                </li>
                <li>
                  Conduct requirement analysis and detailed gap assessments and
                  create business requirement documents, i.e. translate
                  conceptual business requirements in a clear manner that is
                  comprehensible to IT developers and stakeholders
                </li>
                <li>
                  Conduct requirement analysis and detailed gap assessments and
                  create business requirement documents, i.e. translate
                  conceptual business requirements in a clear manner that is
                  comprehensible to IT developers and stakeholders
                </li>
                <li>
                  Conduct requirement analysis and detailed gap assessments and
                  create business requirement documents, i.e. translate
                  conceptual business requirements in a clear manner that is
                  comprehensible to IT developers and stakeholders
                </li>
              </ul>
            </section>
            <section className="mt-6">
              <h3 className="text-gray-700 font-semibold mb-2">Your Profile</h3>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                <li>
                  Higher education (university / FH) in Business or Finance
                </li>
                <li>
                  At least 5 years of practical experience in the field
                  of Project Management in Swiss Private Banks or leading
                  consultancy firm
                </li>
                <li>
                  Experience in implementing sustainability or reporting related
                  regulations 
                </li>
                <li>Knowledge in Avaloq is an advantage</li>
                <li>
                  Higher education (university / FH) in Business or Finance
                </li>
                <li>
                  At least 5 years of practical experience in the field
                  of Project Management in Swiss Private Banks or leading
                  consultancy firm
                </li>
                <li>
                  Experience in implementing sustainability or reporting related
                  regulations 
                </li>
                <li>Knowledge in Avaloq is an advantage</li>
              </ul>
              <p className="mt-8">
                Please note that{" "}
                <strong>only direct applications will be considered.</strong>
              </p>
              <p className="mt-8">
                Please note that if you submit your application, Standard
                Chartered Bank Ltd will process your personal data for the
                purpose of the hiring and employment process. For further
                information, please read the Data Privacy Statement for
                applicants available on the Bank&apos;s website. By submitting your
                application, you then confirm your understanding and acceptance
                of the above.
              </p>
            </section>
            <section className="mt-6">
              <h3 className="text-gray-700 font-semibold mb-2">Contact</h3>

              <p className="">Standard Chartered Bnak</p>
              <StarRating onRatingChange={handleRatingChange} />
              <p className="mt-8">21 new jobs</p>
              <p className="text-primaryBlue">Standardcharteredbank.com</p>
            </section>
          </div>
          <div>
            <div className="  bg-white shadow rounded-lg p-4 border-2  ">
              <Button
                background={"bg-primaryBlue"}
                className="w-full mb-3 rounded"
              >
                Apply now
              </Button>
              <button className="w-full border border-gray-300 text-blue-600 font-semibold py-2 rounded mb-4">
                Save for later
              </button>

              <div className="text-sm text-gray-600 mt-4 leading-6">
                {infoData.map((item, index) => (
                  <p key={index} className="flex items-center space-x-2">
                    {item.icon} <strong>{item.label}:</strong> {item.value}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Key Information Sidebar
      <div className="w-1/4 bg-white shadow rounded-lg p-6">
        <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded mb-4">Apply now</button>
        <button className="w-full border border-gray-300 text-blue-600 font-semibold py-2 rounded mb-4">Save for later</button>

        <div className="text-sm text-gray-600 mt-4">
          <p><strong>Publication date:</strong> 14 Oct 2024</p>
          <p><strong>Workload:</strong> 100%</p>
          <p><strong>Contract type:</strong> Unlimited employment</p>
          <p><strong>Language:</strong> English (Fluent)</p>
          <p><strong>Place of Work:</strong> United Arab Emirates</p>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default JobListing;
