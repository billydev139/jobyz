import Icons from "../../assets/icons";

const GetInTouch=()=>{
return(
    <div className="w-full  lg:px-6   max-lg:py-6 h-[250px]">
        <div className="w-[80%] mx-auto ">
            <div>
            <div className="flex items-center justify-between ">
      <p className="text-blue-600 ">
      Get in touch
      </p>
      <div className="bg-custom-gradient p-4 rounded-full mt-16">
        <Icons.MdArrowOutward size={30} className="text-white  "/>
      </div>
      </div>
        <h2 className="text-3xl font-bold mb-2 -mt-12">
        Ready To Get Focused?
      </h2>
      <h2 className="text-3xl font-bold mb-2">
        Get In Touch
      </h2>
      </div>
     
      </div>
    </div>

)
}

export default GetInTouch;