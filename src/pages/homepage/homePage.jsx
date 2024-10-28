import DefaultLayout from "../../layouts/defaultLayout";
import InfoHomePage from "./homePageInfo";
import JobSearch from "./homePageSearch";
import RecentSearch from "./recentSearch";

const HomePage=()=>{

    return(
        <DefaultLayout>
        <JobSearch/>
        <RecentSearch/>
        <InfoHomePage/>
        </DefaultLayout>
    )
}
export default HomePage;