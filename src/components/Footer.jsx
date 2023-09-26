import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="ThisMonth">
        <p>Total this month</p>
        <h1>$478.33</h1>
      </div>
      <div className="LastMonth">
        <p>+2.4%</p>
        <p>from last month</p>
      </div>
    </footer>
  );
}
export default Footer;
