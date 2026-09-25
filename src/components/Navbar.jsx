const Navbar = () => {
  return (
    
    <div className="navbar bg-base-100 sticky top-0 z-50 px-4 md:px-8 border-b border-gray-100">
      
      {}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
            {/* Hamburger Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
            <li><a>Home</a></li>
            <li><a>Technologies</a></li>
            <li><a>Projects</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        
        {}
        <a className="text-xl font-bold flex gap-2 items-center cursor-pointer">
          <div className="w-8 h-8 rounded bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 flex items-center justify-center text-white text-sm">
            DS
          </div>
          {}
          <span className="hidden sm:inline bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
            Dev Stack
          </span>
        </a>
      </div>

      {}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-gray-600">
          <li><a>Home</a></li>
          <li><a>Technologies</a></li>
          <li><a>Projects</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>

      {}
      <div className="navbar-end gap-3">
        <a className="font-semibold text-gray-600 cursor-pointer hover:text-black hidden sm:block">Sign In</a>
        <a className="btn text-white border-none rounded-full px-6 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 hover:opacity-90">
          Sign Up
        </a>
      </div>
      
    </div>
  );
};

export default Navbar;