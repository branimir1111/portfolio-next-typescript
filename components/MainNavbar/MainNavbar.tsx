const MainNavbar = () => {
  return (
    <nav className="fixed grid place-items-center top-6 left-1/2 -translate-x-1/2 z-50 bg-transparent">
      <div className="bg-black-100 flex gap-4 py-4 px-8 border border-violet-900 rounded-full bg-opacity-70 backdrop-blur-md">
        <a href="#home" className="text-white">
          Home
        </a>
        <a href="#about" className="text-white">
          About
        </a>
        <a href="#projects" className="text-white">
          Projects
        </a>
        <a href="#contact" className="text-white">
          Contact
        </a>
      </div>
    </nav>
  );
};
export default MainNavbar;
