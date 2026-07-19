import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-1 rounded-full border"
    >
      {theme === 'dark' 
        ? <Sun size={18} /> 
        : <Moon size={18} />
      }
    </button>
  );
}

export default ThemeToggle