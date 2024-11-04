import ThemeSwitcher from "./ThemeSwitcher";

const Intro = () => {
  return (
    <>
      <div className="navbar fixed bottom-5">
        <div className="logo font-extrabold text-7xl">
          <h3>Ankit</h3>
          <h2 className="uppercase">Mishra</h2>
        </div>
        <div className="details flex gap-12">
          <div className="box flex flex-col uppercase mt-9 text-sm gap-2 font-thin">
            <a href="#">frontend developer</a>
            <a>ui developer</a>
          </div>
          <div className="box flex flex-col uppercase mt-9 text-sm gap-2 font-thin">
            <a href="mailto:mishraankittm2@gmail.com">
              mishraankittm2@gmail.com
            </a>
            <a>gurgaon, india</a>
          </div>
        </div>
      </div>
      <ThemeSwitcher />
    </>
  );
};

export default Intro;
