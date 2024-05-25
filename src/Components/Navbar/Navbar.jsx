
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../Providers/AuthProvider"
import { MdShoppingCart } from "react-icons/md";
import useCarts from "../../../hooks/useCarts";



const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);
    const [cart] = useCarts()
    const hendelLogout = () => {
        signOutUser()
    }

    const NavbarUl = <div className=" flex justify-center items-center cursor-pointer">
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/menu'>OUR MENU</Link></li>
        <li><Link to='/ourShop/salad'>OUR SHOP</Link></li>
        <li><Link to='/secrat'>secrat</Link></li>
        <li>
            <Link to='deshboard/cart'> <MdShoppingCart className=" text-2xl"></MdShoppingCart> <div className="badge  badge-secondary">+{cart.length}</div></Link>
        </li>

        {user ?
            <li onClick={hendelLogout}>LOGOUT</li>
            :
            <li><Link to='/login'>Login</Link></li>
        }
    </div>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl mx-auto text-white bg-black ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm  text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavbarUl}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    {NavbarUl}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    )
}

export default Navbar