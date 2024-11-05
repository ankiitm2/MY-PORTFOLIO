import { useState } from "react";

const BurgerMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 mb-1 rounded-full bg-black transition ease transform duration-300`;

  return (
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
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-100 group-hover:opacity-100"
        }`}
      />
    </button>
  );
};

export default BurgerMenuButton;
