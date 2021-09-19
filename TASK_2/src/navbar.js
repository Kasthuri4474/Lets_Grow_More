import "./navbar.css";

const Navbar = ({ buttonclicked }) => {
  const clicked = () => {
    buttonclicked(true);
  };
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Click On Button</h1>
      <button className="nav-button" onClick={clicked}>
        Get Users
      </button>
    </nav>
  );
};
export default Navbar;
