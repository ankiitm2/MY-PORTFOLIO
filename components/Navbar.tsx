const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
      <ul className="flex flex-col uppercase text-3xl sm:text-8xl font-extrabold items-end text-indigo-700">
        <li>
          <a href="">ABOUT</a>
        </li>
        <li className="pr-2">
          <a href="">Projects</a>
        </li>
        <li className="pr-5">
          <a href="">experience</a>
        </li>
        <li>
          <a href="">skills</a>
        </li>
        <li className="pr-2">
          <a href="">contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
