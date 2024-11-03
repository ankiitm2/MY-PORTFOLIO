import { useTheme } from "@/context/ThemeContext";

const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <button>
      <label className="switch">
        <input type="checkbox" onClick={toggleTheme} />
        <span className="slider"></span>
      </label>
    </button>
  );
};

export default ThemeSwitcher;
