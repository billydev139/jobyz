import Button from "../../components/button";

const DiscoveredJob = () => {
  return (
    <div className="discover-background w-full mx-auto p-6 flex flex-col items-center justify-center h-[396px]">
      <h2 className="text-3xl font-bold mb-2 text-white text-center">
        Get discovered and connected with the right employers
      </h2>
      <p className="mb-6 text-white lg:w-[50%] text-center">
        Be part of our exclusive talent pool by sharing your profile
        with Spotted by Jobyz. We compare job offers with your profile and get
        in touch with you as soon as there is a match.
      </p>
      <Button background={"bg-white"} textcolor={"text-black"} >Get discovered</Button>
    </div>
  );
};
export default DiscoveredJob;
