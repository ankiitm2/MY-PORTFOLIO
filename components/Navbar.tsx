import ThemeSwitcher from "../components/ThemeSwitcher";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center uppercase">
      <div className="logo"></div>
      <ul className="flex items-center space-x-4">
        <li>about</li>
        <li>projects</li>
        <li>experience</li>
        <li>contact</li>
      </ul>
      <ThemeSwitcher />
    </div>
  );
};

export default Navbar;
