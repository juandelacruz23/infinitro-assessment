import BoxSearch from "./BoxSearch";
import Footer from "./Footer/Footer";
import Header from "./Header";

const LandingPage = () => {
  return (
    <>
      <main className="flex flex-col gap-10 p-4 pt-6 ">
        <Header />
        <BoxSearch />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
