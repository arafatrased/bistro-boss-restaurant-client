import { Link } from "react-router";

const NavBar = () => {

  const navOptions = <>
      <ul className="flex flex-col md:flex-row text-white md:text-white space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/our-menu">Menu</Link></li>
          <li><Link to="/order/salad">Order Food</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/sign-in">Sign In</Link></li>
        </ul>
  </>

  return (
      <nav className="">
          <div className="navbar fixed md:px-20 z-10 bg-opacity-30  bg-black text-white">
              <div className="navbar-start">
                  <div className="dropdown">
                      <label tabIndex={0} className="btn btn-ghost lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                      </label>
                      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                          {navOptions}
                      </ul>
                  </div>
                  <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
              </div>
              <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                      {navOptions}
                  </ul>
              </div>
              <div className="navbar-end">
                  <a className="btn">Get started</a>
              </div>
          </div>
      </nav>
  );
};

export default NavBar;

// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
    
    // <nav className="bg-gray-800 text-white p-4">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <h1 className="text-xl font-bold">Restaurant</h1>
    //     <ul className="flex space-x-4">
    //       <li><Link to="/">Home</Link></li>
    //       <li><Link to="/contact-us">Contact Us</Link></li>
    //       <li><Link to="/dashboard">Dashboard</Link></li>
    //       <li><Link to="/our-menu">Our Menu</Link></li>
    //       <li><Link to="/our-shop">Our Shop</Link></li>
    //       <li><Link to="/sign-in">Sign In</Link></li>
    //     </ul>
    //   </div>
    // </nav>
//   );
// }

// export default Navbar;
