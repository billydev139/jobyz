import Icons from "../../assets/icons";
import Images from "../../assets/images";
import Button from "../../components/button";
import InputField from "../../components/inputField";

const Signup = () => {
  return (
    <div className="">
      <div className="flex lg:flex-row flex-col min-h-screen ">
        {/* Left Section */}
        <div className=" relative flex-col lg:flex lg:w-1/2 bg-cover bg-center w-full  ">
          <div className="flex flex-col items-center justify-center w-full h-full  text-white lg:p-8">
            <img
              src={Images.signupImage}
              alt="Jobyz Logo"
              className="lg:w-[100%] lg:h-[974px] max-w-sm:h-[450px] sm:h-[650px] w-full"
            />
            <h2 className="text-3xl absolute lg:bottom-28 bottom-16 font-semibold text-center">
              Proven Success in Achieving Targets
            </h2>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col  items-start lg:max-w-xl sm:max-w-[70%] w-[95%] lg:w-1/2 bg-white mt-24 mx-auto ">
          <h2 className="md:text-4xl text-xl font-bold mb-2 ">
            Create Your Account
          </h2>
          <p className="text-[#696969] font-medium mb-12 md:text-[18px] text-[14px] ">
            Setting up an account takes less than one minute
          </p>

          {/* Form */}
          <form className="">
            <div className="grid grid-cols-2 gap-4 mb-6 ">
              <InputField
                type="text"
                placeholder="first name"
                label={"First Name"}
                firstIcon={<Icons.FaUser />}
                borderShape={"rounded"}
                className={"border border-[#CCCCCC] rounded "}
              />
              <InputField
                type="text"
                placeholder="last name"
                label={"Last Name"}
                firstIcon={<Icons.FaUser />}
                borderShape={"rounded"}
                className={"border border-[#CCCCCC] rounded"}
              />
            </div>
            <div className="mb-6">
              <InputField
                type="email"
                placeholder="example@gmail.com"
                label={"Email Address"}
                firstIcon={<Icons.MdEmail width={13} height={15} />}
                borderShape={"rounded"}
                className={"border border-[#CCCCCC] rounded"}
              />
            </div>
            <div className="mb-6">
              <InputField
                type="password"
                placeholder="*********"
                label={"Password"}
                firstIcon={<Icons.IoIosLock width={13} height={15} />}
                borderShape={"rounded"}
                className={"border border-[#CCCCCC] rounded"}
              />
            </div>
            <div className="mb-6">
              <InputField
                type="password"
                placeholder="*********"
                label={"Confirm Password"}
                firstIcon={<Icons.IoIosLock width={13} height={15} />}
                borderShape={"rounded"}
                className={"border border-[#CCCCCC] rounded"}
              />
            </div>
            <div className="flex items-center mb-6">
              <input type="checkbox" id="terms" className="mr-2 size-6" />
              <label
                htmlFor="terms"
                className="text-[#2E2E2E] md:text-sm font-medium text-xs "
              >
                Creating an account means you agree with our Terms & Conditions,
                Privacy Policy, default Notification Settings.
              </label>
            </div>
            <Button
              type="submit"
              className="w-full p-6 bg-primaryBlue text-white rounded font-semibold text-base flex items-center justify-center gap-4"
            >
              Create an account
              <Icons.FaArrowRightLong className="mt-[2px]" />
            </Button>
          </form>

          {/* Or Register with */}
          <div className="mt-6 mx-auto w-full">
            <div className="flex items-center justify-center gap-4 ">
              <div className="border w-full"></div>
              <span className="text-gray-500 min-w-32 text-center text-sm">
                Or register with
              </span>
              <div className="border w-full"></div>
            </div>
            <div className="flex space-x-4 mt-6 justify-center">
              <div className="p-3 rounded border hover:bg-gray-200">
                <img src={Images.google} alt="Google" className="w-8 h-8" />
              </div>
              <div className="p-3 rounded border hover:bg-gray-200">
                <img src={Images.linkedin} alt="linkedin" className="w-8 h-8" />
              </div>
              <div className="p-3 rounded border hover:bg-gray-200">
                <img src={Images.facebook} alt="facebook" className="w-8 h-8" />
              </div>
              <div className="p-3 rounded border hover:bg-gray-200">
                <img src={Images.x} alt="X" className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Login Link */}
          <p className="mt-6 text-sm text-gray-500 w-full text-center mb-16">
            Already have an account?{" "}
            <a href="/login" className="text-primaryBlue underline font-medium">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
