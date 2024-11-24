import Logo from "./logo";


const Header = () => {
  return (
    <header className="w-full flex items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10">
        <Logo/>
        <button
          type="button"
          onClick={() => {
            window.open("https://bangyournotes.vercel.app/");
          }}
          className="black_btn"
        >
          GitHub
        </button>
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
