const NavBar = () => {
  return (
    <div className="navbar  px-6 md:px-12 py-4 shadow-sm bg-base-100 ">
   
      <div className="navbar-start">
        <div className="text-purple-700 font-bold text-2xl tracking-wide cursor-pointer">
          DigiTools
        </div>
      </div>

  
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 text-gray-600 font-medium text-sm">
          <li><a className="hover:text-purple-700 transition">Products</a></li>
          <li><a className="hover:text-purple-700 transition">Features</a></li>
          <li><a className="hover:text-purple-700 transition">Pricing</a></li>
          <li><a className="hover:text-purple-700 transition">Testimonials</a></li>
          <li><a className="hover:text-purple-700 transition">FAQ</a></li>
        </ul>
      </div>

   
      <div className="navbar-end gap-6">

        <div className="flex items-center gap-2 text-gray-600 hover:text-purple-700 cursor-pointer transition text-sm font-medium">
     
          <svg xmlns="http://w3.org" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        
        </div>
        
   <span>Login</span>

        <a className="btn bg-purple-600 hover:bg-purple-700 border-none text-white rounded-full px-6 normal-case min-h-0 h-10">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default NavBar;
