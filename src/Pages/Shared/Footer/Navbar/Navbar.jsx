import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navLink = <>
    <div className="space-x-6"> 
 
    <NavLink to={'/'}> Home</NavLink>
  <NavLink to={'/menu'}>Our Menu</NavLink>
  <NavLink to={'order/salad'}>Order</NavLink>
  <NavLink to={'/'}></NavLink>

    </div>

  


    </>
    return (
        <div className="navbar  max-w-screen-lg fixed bg-opacity-10 z-10 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu flex flex-col text-black space-x-5 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">  
           {navLink}
            </ul>
          </div>
          <a className="normal-case text-xl">Bistro Boss</a>
        </div>

        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Navbar;