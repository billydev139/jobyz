import InputField from "../../components/inputField";
import DefaultLayout from "../../layouts/defaultLayout";

const ContactUs=()=> {
  return (
    <DefaultLayout  heading={"Contact Us"}>
    <div className="bg-white  px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Contact Form */}
        <div className="bg-white p-8 ">
          <h3 className="text-primaryBlue font-medium text-[22px]">Send us email</h3>
          <h2 className="font-semibold mt-2 mb-6 text-[46px]">Feel free to write</h2>
          <form className="space-y-4">
            <InputField
              type="text"
              placeholderColor="text-[#696969]"
              borderShape="rounded"
              paddingY={"py-3"}
              placeholder="Your name"
              className=" border border-gray-300  focus:outline-none"
            />
           <InputField
              type="text"
              placeholderColor="text-[#696969]"
              borderShape="rounded"
              paddingY={"py-3"}
              placeholder="Email address"
              className=" border border-gray-300  focus:outline-none"
            />
           <InputField
              type="text"
              placeholderColor="text-[#696969]"
              borderShape="rounded"
              paddingY={"py-3"}
              placeholder="Phone number"
              className=" border border-gray-300  focus:outline-none"
            />
          <InputField
              type="textarea"
              placeholderColor="text-[#696969]"
              borderShape="rounded"
              paddingY={"py-3"}
              placeholder="Write a message"
              className=" border border-gray-300  focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send message
            </button>
          </form>
        </div>

        {/* Right Section - Contact Information */}
        <div className="bg-white p-8 ">
          <h3 className="text-blue-600 font-semibold">Need any help</h3>
          <h2 className="text-2xl font-bold mt-2 mb-6">Get in touch with us</h2>
          <p className="text-gray-700 mb-6">
            We’d love to hear from you! Whether you have a question about our services, need assistance, or just want to discuss how we can help with your project, feel free to reach out.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a1.5 1.5 0 001.62 0L21 8M3 8v7a2 2 0 002 2h14a2 2 0 002-2V8M3 8l7.89 5.26a1.5 1.5 0 001.62 0L21 8m0 0v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Have any question?</p>
                <p className="text-gray-600">+000 000 000</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a1.5 1.5 0 001.62 0L21 8M3 8v7a2 2 0 002 2h14a2 2 0 002-2V8M3 8l7.89 5.26a1.5 1.5 0 001.62 0L21 8m0 0v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Write email</p>
                <p className="text-gray-600">needhelp@company.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a1.5 1.5 0 001.62 0L21 8M3 8v7a2 2 0 002 2h14a2 2 0 002-2V8M3 8l7.89 5.26a1.5 1.5 0 001.62 0L21 8m0 0v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Visit anytime</p>
                <p className="text-gray-600">Santa Fe, New Mexico USA, New York</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white p-8 mt-12 rounded-lg shadow-md flex items-center justify-between max-w-6xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold mb-2">Find your dream job!</h2>
          <p className="text-gray-600">
            Find your dream job or perfect candidate with us. Millions of users, 15M+ CVs in our database.
          </p>
        </div>
        <div className="hidden md:block">
          <img
            src="https://via.placeholder.com/150"
            alt="3D illustration"
            className="w-32 h-32"
          />
        </div>
      </div>
    </div>
    </DefaultLayout>
  );
}

export default ContactUs;
