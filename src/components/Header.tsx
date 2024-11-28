import { useEffect, useState } from "react";
import Logo from "./logo";
import { Switch } from "@/components/ui/switch"
import { Button } from "./ui/button";


const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = (checked:boolean) => {
    setIsDarkMode(checked);
  };

  return (
    <header className="w-full flex items-center flex-col mt-2">
      <nav className="flex justify-between items-center w-full mb-10">
        <Logo/>
        <div className="flex items-center gap-4">
        <Button
          type="button"
          onClick={() => {
            window.open("https://github.com/YorauKen/CAPSTONE");
          }}
          className="black_btn"
          >
          GitHub
        </Button>
        {/* <div className="flex items-center gap-2">
            <span className="text-sm"><img src="light.png" alt="sun" className="h-20 w-20" /></span>
            <Switch
              checked={isDarkMode}
              onCheckedChange={toggleTheme}
              className="bg-gray-300 dark:bg-gray-700"
              />
            <span className="text-sm"><img src="moon-and-stars.png" alt="moon" className="h-20 w-20" /></span>
              </div> */}
              <div className="flex items-center gap-4">
  {/* Conditional Theme Icon */}
  <button 
    aria-label={isDarkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
    className="focus:outline-none"
    onClick={()=>toggleTheme(isDarkMode)}
  >
    {isDarkMode ? (
      <img src="moon-and-stars.png" alt="Moon Icon" className="h-7 w-7" />
    ) : (
      <img src="light.png" alt="Sun Icon" className="h-10 w-10" />
    )}
  </button>

  {/* Theme Toggle Switch */}
  <Switch
    checked={isDarkMode}
    onCheckedChange={toggleTheme}
    className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 ${
      isDarkMode ? "bg-gray-700" : "bg-gray-300"
    }`}
  >
    <span
      className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform ${
        isDarkMode ? "translate-x-6" : "translate-x-1"
      }`}
    />
  </Switch>
</div>


          </div>
      </nav>

      <h1 className="head_text">
        Generate your Indian  <br className="max-md:hidden" />
        <span className="orange_gradient">Ethnic Wear</span>
      </h1>

      <h2 className="desc">
        Prompt your outfit description , we'll find a suitable dress for you
      </h2>

      
      
    </header>
  );
};

export default Header;
