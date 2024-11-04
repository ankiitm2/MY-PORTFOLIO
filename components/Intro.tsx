import ThemeSwitcher from "./ThemeSwitcher";

const Intro = () => {
  return (
    <>
      <div className="navbar fixed bottom-5 left-0 px-10">
        <div className="logo font-extrabold text-7xl">
          <h3>Ankit</h3>
          <h2 className="uppercase">Mishra</h2>
        </div>
        <div className="details flex justify-between items-center">
          <div className="boxes flex gap-12 uppercase mt-9 text-sm font-thin">
            <div className="box flex flex-col  gap-2 text-xl">
              <a href="#">frontend developer</a>
              <a>ui developer</a>
            </div>
            <div className="box flex flex-col gap-2 ">
              <a
                href="mailto:mishraankittm2@gmail.com"
                className="lowercase font-semibold"
              >
                mishraankittm2@gmail.com
              </a>
              <a>gurgaon, india</a>
            </div>
          </div>
          <ul className="social font-semibold list-circle">
            <li>
              <a
                href="https://www.linkedin.com/in/ankit-mishra-3aab7b236"
                target="_blank"
              >
                linkedin
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ankit-mishra-3aab7b236"
                target="_blank"
              >
                git hub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ankit-mishra-3aab7b236"
                target="_blank"
              >
                instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ThemeSwitcher />
    </>
  );
};

export default Intro;
