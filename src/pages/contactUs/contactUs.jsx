import Icons from "../../assets/icons";
import Images from "../../assets/images";
import Button from "../../components/button";
import InputField from "../../components/inputField";
import DefaultLayout from "../../layouts/defaultLayout";

const ContactUs = () => {
  return (
    <DefaultLayout heading={"Contact Us"}>
      <div className="bg-white  ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          {/* Right Section - Contact Information */}
          <div className="bg-white p-8 order-1 md:order-2">
            <h3 className="text-primaryBlue font-semibold md:text-[22px] text-[16px]">
              Need any help
            </h3>
            <h2 className="font-bold mt-2 mb-6 md:text-[46px] text-[28px] max-md:my-0">
              Get in touch with us
            </h2>
            <p className="text-[#696969] mb-6 md:text-[18px] text-[12px] leading-6 font-medium">
              We’d love to hear from you! Whether you have a question about our
              services, need assistance, or just want to discuss how we can help
              with your project, feel free to reach out.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-primaryBlue p-3 rounded text-white">
                  <Icons.MdLocalPhone size={29} />
                </div>
                <div>
                  <p className="font-semibold text-base text-black">
                    Have any question?
                  </p>
                  <p className="text-[#696969] text-sm">+000 000 000</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-primaryBlue p-3 rounded text-white">
                  <Icons.MdEmail size={29} />
                </div>
                <div>
                  <p className="font-semibold text-base text-black">
                    Write email
                  </p>
                  <p className="text-[#696969] text-sm">needhelp@company.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-primaryBlue p-3 rounded text-white">
                  <Icons.MdPlace size={30} />
                </div>
                <div>
                  <p className="font-semibold text-base text-black">
                    Visit anytime
                  </p>
                  <p className="text-[#696969] text-sm">
                    Santa Fe, New Mexico USA, New York
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Left Section - Contact Form */}
          <div className="bg-white p-8 order-2 md:order-1">
            <h3 className="text-primaryBlue font-semibold md:text-[22px] text-[16px]">
              Send us email
            </h3>
            <h2 className="font-semibold mt-2 mb-6 md:text-[46px] text-[28px] ">
              Feel free to write
            </h2>
            <form className="space-y-4">
              <InputField
                type="text"
                placeholderColor="placeholder:text-[#696969]"
                borderShape="rounded"
                paddingY="py-3"
                placeholder="Your name"
                className="border border-gray-300 bg-[#f1f1f1] focus:outline-none"
              />
              <InputField
                type="text"
                placeholderColor="placeholder:text-[#696969]"
                borderShape="rounded"
                paddingY="py-3"
                placeholder="Email address"
                className="border border-gray-300 bg-[#f1f1f1] focus:outline-none"
              />
              <InputField
                type="text"
                placeholderColor="placeholder:text-[#696969]"
                borderShape="rounded"
                paddingY="py-3"
                placeholder="Phone number"
                className="border border-gray-300 bg-[#f1f1f1] focus:outline-none"
              />
              <InputField
                type="textarea"
                placeholderColor="placeholder:text-[#696969]"
                borderShape="rounded"
                paddingY="py-4"
                placeholder="Write a message"
                className="border border-gray-300 bg-[#f1f1f1] focus:outline-none"
              />
              <Button
                type="submit"
                background="bg-primaryBlue"
                className="text-white py-3 px-4 rounded-lg font-semibold hover:bg-white hover:text-primaryBlue transition"
              >
                Send message
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#F6F6F6]  my-12 lg:h-[236px] lg:py-0 pb-8 ">
          <div className=" grid lg:grid-cols-2 grid-cols-1 max-lg:gap-8 items-center  justify-between max-w-7xl mx-auto">
            <div className="order-2 lg:order-1  mx-4 ">
              <h2 className="text-4xl font-bold mb-2">Find your dream job!</h2>
              <p className="text-gray-600">
                Find your dream job or perfect candidate with us. Millions of
                users, 15M+ CVs in our database.
              </p>
            </div>
            <div className=" relative  avatar-background max-lg:w-full flex justify-center items-center order-1 lg:order-2">
              <img
                src={Images?.avatar}
                alt="3D illustration"
                className="w-64 h-[21rem] z-20  absolute -bottom-4  "
              />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ContactUs;
