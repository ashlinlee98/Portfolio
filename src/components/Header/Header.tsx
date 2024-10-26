import Navigation from "./Navigation/Navigation";

const Header = () => {
  return (
    <header className= "bg-sky-600 p-6 font-Mono font-bold font-weight-600 flex justify-between items-center">
      <h1 className="text-yellow-500 lg:text-8xl">Ashlin Lee </h1>
      <Navigation />
    </header>
  );
};

export default Header;