import {  FaBook, FaCalendar, FaCartPlus, FaHome,  FaList,  FaShoppingBag,  FaUsers,  FaUtensils,  FaWallet, } from "react-icons/fa";
import {BiSolidCalendarStar  } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { PiListDashesFill } from "react-icons/pi";

import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
    const [cart] = useCart ();

    //TODO : get isAdmin Value from database
    const [isAdmin] = useAdmin () ;


    return (
        <div className="flex">
            {/*  dashboard Side bar */}
            <div className="w-64 min-h-screen text-white bg-[#D1A054]">
                <ul className="menu p-4">
                   {
                    isAdmin? 
                    <>  
                    <li><NavLink to="/dashboard/adminHome"><FaHome></FaHome> Admin Home</NavLink> </li>
                    <li><NavLink to="/dashboard/addItems"> <FaUtensils></FaUtensils>Add Items </NavLink> </li>
                    <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet> Payment History</NavLink> </li>
                    <li><NavLink to="/dashboard/manageItems"> <FaList></FaList> Manage Items</NavLink> </li>
                    <li><NavLink to="/dashboard/bookings"><FaBook></FaBook> Manage Booking </NavLink> </li>
                    <li><NavLink to="/dashboard/allUsers"><FaUsers></FaUsers> All Users</NavLink> </li>

                    </> :
                    <>    
                    <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink> </li>
                    <li><NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar> Reservation</NavLink> </li>
                    <li><NavLink to="/dashboard/payment"><FaWallet></FaWallet> Payment History</NavLink> </li>
                    <li><NavLink to="/dashboard/cart"><FaCartPlus></FaCartPlus>My Cart ({cart.length})</NavLink> </li>
                    <li><NavLink to="/dashboard/review"><BiSolidCalendarStar></BiSolidCalendarStar>  Add Review</NavLink> </li>
                    <li><NavLink to="/dashboard/booking"><FaList></FaList> My Booking</NavLink> </li>              
                   
                    </>

                   }
                  
                  {/* Shared NavLink */}
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/menu"><PiListDashesFill></PiListDashesFill> Menu</NavLink> </li>
                    <li><NavLink to="/"><FaShoppingBag></FaShoppingBag> Shop</NavLink> </li>
                    <li><NavLink to="/"> <MdEmail></MdEmail>Contact</NavLink> </li>

                </ul>
            </div>

            {/*dashboard Content  */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>


        </div>
    );
};

export default DashBoard;