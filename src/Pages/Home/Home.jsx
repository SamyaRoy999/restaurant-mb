import { Helmet } from "react-helmet-async"
import Banner from "../../Components/Banner/Banner"
import Category from "../../Components/Category/Category"
import Feachurd from "../../Components/Feachurd/Feachurd"
import PopulerMenu from "../../Components/PopulerMenu/PopulerMenu"
import Testimunial from "../../Components/Testimunial/Testimunial"

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>HOME || BISTRO</title>
            </Helmet>

            <Banner/>
            <Category/>
            <PopulerMenu/>
            <Feachurd/>
            <Testimunial/>
        </div>
    )
}

export default Home
