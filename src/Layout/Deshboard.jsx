import { MdBookOnline, MdHome, MdShoppingCart } from "react-icons/md"
import { NavLink, Outlet } from "react-router-dom"
import { FaCalendar, FaHome } from "react-icons/fa";
import { MdReviews } from "react-icons/md";

const Deshboard = () => {
    return (
        <div className=" flex min-h-screen ">
            <ul className="menu uppercase w-72 bg-[#D1A054]">
                <li><NavLink to='cart'><MdShoppingCart></MdShoppingCart> My Cart</NavLink></li>
                <li><NavLink to='/deshboard/userName'><FaHome></FaHome>User Home</NavLink></li>
                <li><NavLink to='/deshboard/regervation'><FaCalendar></FaCalendar>regervation</NavLink></li>
                <li><NavLink to='/deshboard/addReview'><MdReviews></MdReviews>User Home</NavLink></li>
                <li><NavLink to='/deshboard/booking'><MdBookOnline></MdBookOnline>my booking</NavLink></li>
              
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