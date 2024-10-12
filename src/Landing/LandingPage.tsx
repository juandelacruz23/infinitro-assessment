import BoxSearch from "./BoxSearch";
import Footer from "./Footer/Footer";
import Header from "./Header";
import RecentBoxes from "./RecentBoxes";

const LandingPage = () => {
  return (
    <>
      <main className="flex flex-col gap-10 p-4 pt-6 ">
        <Header />
        <BoxSearch />
        <RecentBoxes />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
