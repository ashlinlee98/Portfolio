import Navigation from "./Navigation/Navigation";

const Header = () => {
  return (
    <header className= "fixed z-10 w-full bg-gray-900 drop-shadow-cyanGlow p-6 font-sans font-bold font-weight-600 flex justify-between items-center">
      <h1 className="text-gray-900 lg:text-8xl text-shadow-cyanGlow">Ashlin Lee </h1>
      <Navigation />
    </header>
  );
};

export default Header;