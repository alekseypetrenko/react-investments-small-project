import Logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={Logo} alt="Logo showing money back" />
      <h1>Investment calculator</h1>
    </header>
  );
}
