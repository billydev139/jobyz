import DefaultLayout from "../../layouts/defaultLayout";
import FeaturedJobs from "./featuredJobs";
import NumberSection from "./homeNumbersSection";
import InfoHomePage from "./homePageInfo";
import JobSearch from "./homePageSearch";
import AnotherJobSearch from "./jobSearch";
import RecentSearch from "./recentSearch";

const HomePage=()=>{

    return(
        <DefaultLayout>
        <JobSearch/>
        <RecentSearch/>
        <InfoHomePage/>
        <NumberSection/>
        <FeaturedJobs/>
        <AnotherJobSearch/>
        </DefaultLayout>
    )
}
export default HomePage;