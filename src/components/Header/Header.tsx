import Navigation from "./Navigation/Navigation";

const Header = () => {
  return (
    <header className= "bg-gray-900 p-6 font-sans font-bold font-weight-600 flex justify-between items-center">
      <h1 className="text-gray-900 lg:text-8xl text-shadow-cyanGlow">Ashlin Lee </h1>
      <Navigation />
    </header>
  );
};

export default Header;