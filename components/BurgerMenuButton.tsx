import { useState } from "react";

const BurgerMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 mb-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <>
      <button
        className="burgerMenuButton fixed right-6 flex flex-col h-9 w-9 rounded justify-center items-center hidden group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-100"
              : "opacity-100 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-1 opacity-100 group-hover:opacity-100"
              : "opacity-100 group-hover:opacity-100"
          }`}
        />
      </button>
      {/* -------------- */}
      {isOpen && (
        <>
          <div className="dropdown-menu absolute z-50 px-16">
            <div className="flex justify-between flex-wrap items-center">
              <div className="left-col flex flex-col">
                <a
                  href="mailto:mishraankittm2@gmail.com"
                  className="lowercase font-semibold"
                >
                  mishraankittm2@gmail.com
                </a>
                <a>gurgaon, india</a>
              </div>
              <div className="right-col">
                <ul className="social-blade font-semibold list-circle mt-2 sm:mt-0">
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
          </div>
        </>
      )}
    </>
  );
};

export default BurgerMenuButton;
