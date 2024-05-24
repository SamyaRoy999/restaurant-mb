import { Outlet, useLocation } from "react-router-dom"
import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Navbar/Navbar"

const Layout = () => {

    const loction = useLocation()

    const isLogin = loction.pathname.includes('login') || loction.pathname.includes('signup') 
    return (
        <div className="max-w-screen-xl mx-auto">
            {isLogin || <Navbar />}
            <Outlet />
            {isLogin || <Footer />}
        </div>
    )
}

export default Layout