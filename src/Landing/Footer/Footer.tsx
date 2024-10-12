import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "../../common/Link";
import Title4 from "../../common/Title4";
import {
  faBitcoin,
  faCcVisa,
  faDiscord,
  faInstagram,
  faReddit,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center p-6 pb-8 gap-8 bg-neutral-900 md:items-stretch md:justify-between md:flex-row">
      <div className="flex flex-col items-center gap-4 md:items-start">
        <h3 className="uppercase font-bold text-lg">Logo</h3>
        <p className="opacity-70">
          Here goes a short description of the company
        </p>
        <div className="flex gap-3">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faDiscord} />
          <FontAwesomeIcon icon={faTiktok} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faReddit} />
        </div>
        <p className="hidden md:block opacity-70 text-xs">Copyrights 2023</p>
      </div>
      <div className="flex flex-col w-full md:justify-between md:w-auto">
        <nav className="flex justify-between">
          <ul>
            <li>
              <Title4>Links</Title4>
            </li>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Battles</Link>
            </li>
            <li>
              <Link>Rewards</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Title4>Other</Title4>
            </li>
            <li>
              <Link>Help</Link>
            </li>
            <li>
              <Link>Support</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Title4>Legal</Title4>
            </li>
            <li>
              <Link>Terms</Link>
            </li>
            <li>
              <Link>Conditions</Link>
            </li>
            <li>
              <Link>Cookies</Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Title4>Payment options</Title4>
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
    </footer>
  );
};

export default Footer;
