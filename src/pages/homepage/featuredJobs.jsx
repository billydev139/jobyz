import Icons from "../../assets/icons";
import Images from "../../assets/images";

const FeaturedJobs = () => {
  const jobs = [
    {
      id: 1,
      category: "IT & Networking",
      title: "Software Engineer",
      location: "52 Irving Pl, NY",
      date: "October 14, 2024",
      tags: ["Urgent hiring"],
      salary: "$400 - $450 / month",
      logo: "bg-red-500", // Mock logo color
    },
    {
      id: 2,
      category: "IT & Networking",
      title: "Software Engineer",
      location: "52 Irving Pl, NY",
      date: "October 14, 2024",
      tags: ["Full time", "Urgent"],
      salary: "$400 - $450 / month",
      logo: "bg-blue-500",
    },
    {
      id: 3,
      category: "IT & Networking",
      title: "Software Engineer",
      location: "52 Irving Pl, NY",
      date: "October 14, 2024",
      tags: ["On-site"],
      salary: "$400 - $450 / month",
      logo: "bg-yellow-500",
    },
    {
      id: 4,
      category: "IT & Networking",
      title: "Software Engineer",
      location: "52 Irving Pl, NY",
      date: "October 14, 2024",
      tags: ["Remote", "Full time"],
      salary: "$400 - $450 / month",
      logo: "bg-purple-500",
    },
    {
      id: 5,
      category: "IT & Networking",
      title: "Software Engineer",
      location: "52 Irving Pl, NY",
      date: "October 14, 2024",
      tags: ["Urgent hiring"],
      salary: "$400 - $450 / month",
      logo: "bg-orange-500",
    },
  ];

  return (
    <div className="lg:max-w-[85%] max-w-[450px] mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center">Featured Jobs</h2>
      <p className="text-gray-500 text-center mb-6">
        Find the job that's perfect for you. about 800+ new jobs everyday
      </p>

      <div className="bg-white shadow rounded-md mb-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="grid lg:grid-cols-[1fr_1fr_1.2fr_auto_0.1fr] grid-cols-1 gap-4 items-center p-4 border-b last:border-b-0 justify-between"
          >
            <div className="flex items-center">
              <div className={`w-10 h-10 ${job.logo} rounded-full `}></div>
              <div className="ml-4  flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">{job.category}</p>
                  <h3 className="font-semibold text-lg">{job.title}</h3>
                </div>
              </div>
            </div>
            <div className="flex justify-start text-sm text-black mt-1">
              <p className="flex items-center mr-4">
                <span className=" text-black mr-1">
                  <Icons.MdPlace />
                </span>
                {job.location}
              </p>
              <p className="flex items-center">
                <span className=" text-black mr-1">
                  <Icons.FaCalendar />
                </span>
                {job.date}
              </p>
            </div>
            <div className="flex items-center">
            <div className="ml-4 flex items-center space-x-2 ">
              {job.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-2 py-1 text-sm rounded-md flex ${
                    tag === "Urgent hiring" || tag === "Urgent"
                      ? "bg-red-100 text-red-500"
                      : tag === "Full time"
                      ? "bg-gray-100 text-gray-700"
                      : tag === "On-site"
                      ? "bg-gray-200 text-gray-700"
                      : tag === "Remote"
                      ? "bg-black text-white"
                      : ""
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
         
            <div className="ml-4 text-sm text-gray-700 ">{job.salary}</div>
            </div>
            <div>
            <button className="ml-4 text-blue-500 font-semibold border border-blue-500 rounded px-4 py-1">
              Apply now
            </button>
            </div>
            <span className="hidden lg:block ml-4 text-gray-400 cursor-pointer">
              <img src={Images.save} alt="save" className="w-3 h-4" />
            </span>
          </div>
        ))}
      </div>

      <button className="block mx-auto bg-blue-500 text-white font-semibold rounded px-6 py-2">
        Show more
      </button>
    </div>
  );
};

export default FeaturedJobs;
