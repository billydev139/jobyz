import DefaultLayout from "../../layouts/defaultLayout";
import JobSearch from "./homePageSearch";
import RecentSearch from './RecentSearch';
import InfoHomePage from './homePageInfo';
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