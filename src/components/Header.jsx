import "./Header.css";
import Logo from "../assets/logo.svg";

function Header() {
  return (
    <header>
      <div>
        <p>My balance</p>
        <h2>$921.48</h2>
      </div>
      <img src={Logo} alt="" />
    </header>
  );
}
export default Header;
