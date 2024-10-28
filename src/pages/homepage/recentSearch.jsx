
import Icons from '../../assets/icons';
import Button from '../../components/button';

const searches = [
  { title: "All jobs", location: "52 Irving Pl, NY", date: "October 14, 2024" },
  { title: "UI/UX Design", location: "52 Irving Pl, NY", date: "October 14, 2024" },
  { title: "Graphic Design", location: "52 Irving Pl, NY", date: "October 14, 2024" },
  { title: "Video Editor", location: "52 Irving Pl, NY", date: "October 14, 2024" },
];

const RecentSearch=()=> {
  return (
    <div className="md:max-w-[80%] max-w-full mx-auto p-4 pt-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-2xl lg:text-[36px] font-semibold">Your recent searches</h2>
          <p className="lg:text-lg text-xs  text-gray-500 lg:leading-10">You can view your entire job history by searching for it in the search bar.</p>
        </div>
        <button className="text-blue-600 text-sm font-medium whitespace-nowrap mt-2">Clear history X</button>
      </div>

      {/* Searches List */}
      <div className="space-y-4">
        {searches?.map((search, index) => (
          <div key={index} className="flex items-center justify-between p-4 border-b border-gray-200">
            <div>
              <h3 className="text-blue-600 lg:text-base text-sm font-medium hover:underline cursor-pointer">{search.title}</h3>
              <div className="flex items-center text-[#2E2E2E] text-[13px] mt-1 space-x-4">
                <div className="flex items-center">
                  <Icons.MdPlace size={18} className="mr-1" />
                  <span>{search.location}</span>
                </div>
                <div className="flex items-center">
                  <Icons.FaCalendar size={16} className="mr-1" />
                  <span>{search.date}</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center px-4 py-1 text-blue-600 border border-blue-600 rounded-sm hover:bg-custom-gradient hover:text-white cursor-pointer text-sm font-medium">
              Set up a job alert <Icons.FaBell className="ml-2" />
            </div>
            <div className="lg:hidden flex items-center px-4 py-1 text-blue-600 hover:bg-custom-gradient hover:text-white cursor-pointer text-sm font-medium">
              <Icons.FaBell className="ml-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentSearch;