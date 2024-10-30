import DefaultLayout from "../../layouts/defaultLayout";
import DiscoveredJob from "./discoveredJob";
import FeaturedJobs from "./featuredJobs";
import GetInTouch from "./getInTouch";
import NumberSection from "./homeNumbersSection";
import InfoHomePage from "./homePageInfo";
// import JobSearch from "./homePageSearch";
import AnotherJobSearch from "./jobSearch";
import RecentSearch from "./recentSearch";

const HomePage=()=>{

    return(
        <DefaultLayout>
        {/* <JobSearch/> */}
        <RecentSearch/>
        <InfoHomePage/>
        <NumberSection/>
        <FeaturedJobs/>
        <AnotherJobSearch/>
        <DiscoveredJob/>
        <GetInTouch/>
        </DefaultLayout>
    )
}
export default HomePage;