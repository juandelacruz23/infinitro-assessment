import Card from "../common/Card";
import CardSubtitle from "../common/CardSubtitle";
import CardText from "../common/CardText";
import CardTitle from "../common/CardTitle";
import Footer from "./Footer/Footer";

const LandingPage = () => {
  return (
    <>
      <main className="p-4 pt-6 flex flex-col gap-10">
        <Card>
          <CardTitle>Refer friends</CardTitle>
          <CardText>
            Let the whole world know about people here and earn more! Receive
            passive income for each player who follows your link. Create your
            own campaign for unique referral link.
          </CardText>
          <div>
            <span>2</span>Friends referred
          </div>
          <div>platform.com/link/415rebfiaeubf</div>
        </Card>
        <Card>
          <CardTitle>15%</CardTitle>
          <CardSubtitle>From pure profit</CardSubtitle>
          <CardText>
            15% from platform's house edge will be paid your Referrals winning
            bet.
          </CardText>
        </Card>
        <Card>
          <CardTitle>2.5%</CardTitle>
          <CardSubtitle>From all winnings</CardSubtitle>
          <CardText>
            2,5% from all winnings will be paid to your Referrals winning bet.
          </CardText>
        </Card>
        <Card>
          <CardTitle>1.5%</CardTitle>
          <CardSubtitle>From deposit</CardSubtitle>
          <CardText>
            1,5% from depositing on our platform will be paid back in your
            account.
          </CardText>
        </Card>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
