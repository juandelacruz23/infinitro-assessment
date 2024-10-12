import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "../../common/Link";
import Title3 from "../../common/Title3";
import { faBitcoin, faCcVisa, faDiscord, faInstagram, faReddit, faTiktok, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex flex-col items-center p-6 pb-8 gap-8">
      <div className="flex flex-col items-center gap-4">
        <h2 className="uppercase font-bold text-lg">Logo</h2>
        <p className="opacity-70">Here goes a short description of the company</p>
      </div>
      <div className="flex gap-3">
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faDiscord} />
        <FontAwesomeIcon icon={faTiktok} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faReddit} />
      </div>
      <p className="hidden md:block">Copyrights 2023</p>
      <nav className="flex justify-between w-full">
        <ul>
          <li><Title3>Links</Title3></li>
          <li><Link>Home</Link></li>
          <li><Link>Battles</Link></li>
          <li><Link>Rewards</Link></li>
        </ul>
        <ul>
          <li><Title3>Other</Title3></li>
          <li><Link>Help</Link></li>
          <li><Link>Support</Link></li>
          <li><Link>Contact</Link></li>
        </ul>
        <ul>
          <li><Title3>Legal</Title3></li>
          <li><Link>Terms</Link></li>
          <li><Link>Conditions</Link></li>
          <li><Link>Cookies</Link></li>
        </ul>
      </nav>
      <div className="flex flex-col items-center gap-4">
        <Title3>Payment options</Title3>
        <div className="flex gap-3">
          <FontAwesomeIcon icon={faCcVisa} />
          <FontAwesomeIcon icon={faBitcoin} />
          <FontAwesomeIcon icon={faCcVisa} />
          <FontAwesomeIcon icon={faBitcoin} />
          <FontAwesomeIcon icon={faCcVisa} />
          <FontAwesomeIcon icon={faCcVisa} />
        </div>
        <p className="md:hidden opacity-70 text-xs">© Copyrights 2023</p>
      </div>
    </div>
  );
};

export default Footer;