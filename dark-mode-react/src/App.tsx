import { Article } from "./Article";
import { Button } from "./Button";
import { useTheme } from "./ThemeProvider";

function App() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } min-h-screen`}
    >
      <nav className="w-full px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-4xl capitalize tracking-wide text-red-400">
            Override
          </h1>
          <Button darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-10">
        <Article />
      </main>
    </div>
  );
}

export default App;
