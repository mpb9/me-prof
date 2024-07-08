function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
      <div className="items-center flex space-x-4">
        <a href="#" className="text-lg font-bold">
          Logo
        </a>
        <a href="#" className="hidden md:block">
          Home
        </a>
        <a href="#" className="hidden md:block">
          About
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="hidden md:block">
          Login
        </a>
        <a href="#" className="hidden md:block">
          Sign Up
        </a>
        <button className="block md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
