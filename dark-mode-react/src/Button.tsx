import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";

interface Props {
  darkMode: boolean;
  toggleDarkMode?: () => void;
}

export const Button = ({ darkMode, toggleDarkMode }: Props) => {
  return (
    <button className="p-2 rounded-full" onClick={toggleDarkMode}>
      {darkMode ? (
        <LuSun className="text-white" size={24} />
      ) : (
        <FaMoon className="text-gray-600" size={24} />
      )}
    </button>
  );
};
