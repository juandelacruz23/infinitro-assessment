
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
          <li>Home</li>
          <li>Battles</li>
          <li>Rewards</li>
        </ul>
        <ul>
          <li>Other</li>
          <li>Help</li>
          <li>Support</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>Legal</li>
          <li>Terms</li>
          <li>Conditions</li>
          <li>Cookies</li>
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