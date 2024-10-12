import Card from "../common/Card";
import Footer from "./Footer/Footer";

const LandingPage = () => {
  return (
    <>
      <main className="p-4 pt-6">
        <Card>
          <h2>Refer friends</h2>
          <p>
            Let the whole world know about people here and earn more! Receive
            passive income for each player who follows your link. Create your
            own campaign for unique referral link.
          </p>
          <div>
            <span>2</span>Friends referred
          </div>
          <div>platform.com/link/415rebfiaeubf</div>
        </Card>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
