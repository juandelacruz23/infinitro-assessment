import Badge from "../common/Badge";
import Card from "../common/Card";
import CardSubtitle from "../common/CardSubtitle";
import CardText from "../common/CardText";
import CardTitle from "../common/CardTitle";
import formatPercentage from "../utils/formatPercentage";

const Header = () => {
  return (
    <header className="flex flex-col gap-6 md:flex-row">
      <Card>
        <div className="flex items-start">
          <div className="flex flex-col mr-5">
            <CardTitle>Refer friends</CardTitle>
            <CardText>
              Let the whole world know about people here and earn more! Receive
              passive income for each player who follows your link. Create your
              own campaign for unique referral link.
            </CardText>
            <div className="leading-none">
              <Badge>2</Badge> Friends referred
            </div>
          </div>
          <img src="/images/refer-friends.png" alt="Refer friends" />
        </div>
        <div>platform.com/link/415rebfiaeubf</div>
      </Card>
      <Card className="flex md:flex-col-reverse md:items-center gap-5">
        <div className="md:flex md:flex-col md:items-center">
          <CardTitle>{formatPercentage(15)}</CardTitle>
          <CardSubtitle>From pure profit</CardSubtitle>
          <CardText textAlign="center">
            {`${formatPercentage(15)} from platform's house edge will be paid your Referrals winning bet.`}
          </CardText>
        </div>
        <img
          className="-mt-10 size-32"
          src="/images/profit.png"
          alt="From Pure Profit"
        />
      </Card>
      <Card className="flex md:flex-col-reverse md:items-center gap-5">
        <div className="md:flex md:flex-col md:items-center">
          <CardTitle>{formatPercentage(2.5)}</CardTitle>
          <CardSubtitle>From all winnings</CardSubtitle>
          <CardText textAlign="center">
            {`${formatPercentage(2.5)} from all winnings will be paid to your Referrals winning bet.`}
          </CardText>
        </div>
        <img
          className="-mt-10 size-32"
          src="/images/winnings.png"
          alt="From all winnings"
        />
      </Card>
      <Card className="flex md:flex-col-reverse md:items-center gap-5">
        <div className="md:flex md:flex-col md:items-center">
          <CardTitle>{formatPercentage(1.5)}</CardTitle>
          <CardSubtitle>From deposit</CardSubtitle>
          <CardText textAlign="center">
            {`${formatPercentage(1.5)} from depositing on our platform will be paid back in your
            account.`}
          </CardText>
        </div>
        <div className="w-32 mx-auto md:w-auto">
          <img
            className="-mt-10"
            src="/images/deposit.png"
            alt="From deposit"
          />
        </div>
      </Card>
    </header>
  );
};

export default Header;
