import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Navbar/Navbar"

const Layout = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout