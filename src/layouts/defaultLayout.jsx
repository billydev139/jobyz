import Header from "../components/header";
import Footer from "../components/footer";
import JobSearch from "../pages/homepage/homePageSearch";

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children,heading }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <JobSearch heading={heading} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
