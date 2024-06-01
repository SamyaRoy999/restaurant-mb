import { MdBookOnline, MdHome, MdShoppingCart } from "react-icons/md"
import { NavLink, Outlet } from "react-router-dom"
import { FaCalendar, FaHome } from "react-icons/fa";
import { MdReviews } from "react-icons/md";

import { FaUtensils } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";
import { FaBook } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import useAdmin from "../hooks/useAdmin";

const Deshboard = () => {
    const [isAdmin] = useAdmin()
     console.log(isAdmin);
    return (
        <div className=" flex min-h-screen ">
            <ul className="menu uppercase w-72 bg-[#D1A054]">
                {
                    isAdmin ?
                        (<>
                            <li><NavLink to='/adminHome'><MdShoppingCart></MdShoppingCart>Admin Home</NavLink></li>
                            <li><NavLink to='/deshboard/addItems'><FaUtensils></FaUtensils>add items</NavLink></li>
                            <li><NavLink to='/deshboard/manageItems'><CgMenuGridO></CgMenuGridO>manage items</NavLink></li>
                            <li><NavLink to='/deshboard/manageBookings'><FaBook></FaBook>Manage bookings</NavLink></li>
                            <li><NavLink to='/deshboard/user'><FaUserGroup></FaUserGroup>all users</NavLink></li>

                        </>) : (<>
                            <li><NavLink to='/deshboard/cart'><MdShoppingCart></MdShoppingCart> My Cart</NavLink></li>
                            <li><NavLink to='/deshboard/userName'><FaHome></FaHome>User Home</NavLink></li>
                            <li><NavLink to='/deshboard/regervation'><FaCalendar></FaCalendar>regervation</NavLink></li>
                            <li><NavLink to='/deshboard/addReview'><MdReviews></MdReviews>User Home</NavLink></li>
                            <li><NavLink to='/deshboard/booking'><MdBookOnline></MdBookOnline>my booking</NavLink></li>

                        </>)
                }
                <div className="divider"></div>

                <li><NavLink to='/'><MdHome></MdHome> home</NavLink></li>
                <li><NavLink to='/menu'><MdHome></MdHome>OUR MENU</NavLink></li>
            </ul>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Deshboard