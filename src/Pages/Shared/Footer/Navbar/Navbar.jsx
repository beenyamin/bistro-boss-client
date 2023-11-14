import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { FaCartPlus } from 'react-icons/fa';
import useCart from "../../../../Hooks/useCart";



const Navbar = () => {


  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart ();

  const handleLogout = () => {
    logOut()
      .then(() => {

      })

      .catch(error => console.log(error));

  }

  const navLink = <>
    <div className="space-x-6">
      <NavLink to={'/'}> Home</NavLink>
      <NavLink to={'/menu'}>Our Menu</NavLink>
      <NavLink to={'order/salad'}>Order</NavLink>
      <NavLink to={'/secret'}>Secret</NavLink>

        <Link to="/dashboard/cart"> 
          <button className="btn btn-ghost">
          <FaCartPlus></FaCartPlus>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>

    

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

        {
          user ? <>
            <span>{user?.displayName}</span>

            <button onClick={handleLogout} className="btn btn-ghost">Logout</button>
          </>

            :

            <><NavLink className="btn btn-ghost" to={'/login'}>Login</NavLink>
            </>
        }

      </div>


    </div>
  );
};

export default Navbar;