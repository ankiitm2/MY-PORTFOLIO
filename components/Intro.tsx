import ThemeSwitcher from "./ThemeSwitcher";
import { WordRotate } from "./WordRotateText";

const Intro = () => {
  return (
    <>
      <div className="Intro fixed bottom-5 left-0 px-10">
        <div className="details flex justify-between items-center flex-wrap ">
          <div className="boxes flex gap-12 uppercase mt-9 text-xl sm:text-sm font-thin flex-wrap">
            <div className="wordRotate box flex flex-col  gap-2 text-2xl sm:text-xl">
              <a href="#">
                <WordRotate words={["Frontend Developer", "UI Developer"]} />
              </a>
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
          <ul className="social font-semibold list-circle mt-2 sm:mt-0">
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
                twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute top-10">
        <ThemeSwitcher />
      </div>
    </>
  );
};

export default Intro;
