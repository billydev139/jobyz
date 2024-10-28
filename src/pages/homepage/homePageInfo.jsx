import Images from "../../assets/images";

const InfoHomePage = () => {
  const benefits = [
    {
      icon: Images.reduce,
      title: "Reduce Hiring bias",
      description:
        "Structured digital interviews increase the predictive validity of your hires by 65%.",
    },
    {
      icon: Images.saveTime,
      title: "Save time & headspace",
      description:
        "Reduce your time-to-hire by up to 80% and free up headspace for other HR priorities.",
    },
    {
      icon: Images.minimize,
      title: "Minimize environmental impact",
      description:
        "Did you know? U.S. office workers use ~10,000 sheets of paper every year.",
    },
    {
      icon: Images.saveTime,
      title: "Save money",
      description:
        "Interview more candidates, more quickly – and still save money.",
    },
  ];
  console.log("🚀 ~ InfoHomePage ~ benefits:", benefits);

  return (
    <div className="md:w-[80%] mx-auto flex flex-col-reverse md:flex-row bg-gray-100  md:rounded-lg">
      {/* Image Section */}
      <div className="flex justify-center  mb-6 md:mb-0">
        <img
          src={Images.info} // Replace with actual image URL
          alt="Woman with laptop"
          className="sm:w-[466px] max-sm:w-[90%] max-sm:h-[476px] sm:h-[608px] object-cover md:rounded-l-lg rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className=" md:ml-8 p-8">
        <h2 className="lg:text-[36px] text-[22px]  font-semibold mb-2">
          What can I do with Jobyz?
        </h2>
        <p className="text-gray-600 mb-6 lg:text-lg text-xs">
          Streamline your hiring process with strategic channels to reach
          qualified candidates.
        </p>

        {/* Benefits List */}
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center">
              <img
                src={benefit.icon}
                className="text-blue-500 w-10 h-10 mr-3"
              />
              <div>
                <h3 className="font-semibold md:text-lg text-sm">{benefit.title}</h3>
                <p className="text-gray-600 max-md:text-xs">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoHomePage;
