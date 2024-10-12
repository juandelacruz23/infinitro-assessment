import Link from "../../common/Link";

const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <h2>Logo</h2>
      <p>Here goes a short description of the company</p>
      <div>Brands</div>
      <p>Copyrights 2023</p>
      <nav className="flex">
        <ul>
          <li>Links</li>
          <li><Link>Home</Link></li>
          <li><Link>Battles</Link></li>
          <li><Link>Rewards</Link></li>
        </ul>
        <ul>
          <li>Other</li>
          <li><Link>Help</Link></li>
          <li><Link>Support</Link></li>
          <li><Link>Contact</Link></li>
        </ul>
        <ul>
          <li>Legal</li>
          <li><Link>Terms</Link></li>
          <li><Link>Conditions</Link></li>
          <li><Link>Cookies</Link></li>
        </ul>
      </nav>
      <div>
        <h3 className="text-center">Payment options</h3>
        <div className="text-center">
          Visa - Bitcoin
        </div>
      </div>
    </div>
  );
};

export default Footer;