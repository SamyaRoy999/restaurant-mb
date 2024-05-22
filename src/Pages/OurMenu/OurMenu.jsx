
import { Helmet } from 'react-helmet-async';
import Cover from '../../sheard/Cover/Cover';
import img from '../../assets/menu/banner3.jpg'
import Manu from '../../Components/Menu/Manu';
import useMenu from '../../../hooks/useMenu';
import SectionHeading from '../../Components/SectionHeading/SectionHeading';

import dessertimg from '../../assets/menu/dessert-bg.jpeg'
import soupimg from '../../assets/menu/soup-bg.jpg'
import saladimg from '../../assets/menu/salad-bg.jpg'
import pizzaimg from '../../assets/menu/pizza-bg.jpg'

const OurMenu = () => {
    const [menu] = useMenu()
    const offereds = menu.filter(item => item.category === "offered")
    const desserts = menu.filter(item => item.category === "dessert")
    const soups = menu.filter(item => item.category === "soup")
    const salads = menu.filter(item => item.category === "salad")
    const pizzas = menu.filter(item => item.category === "pizza")

    return (
        <div>
            <Helmet>
                <title>MENU || BISTRO</title>
            </Helmet>
            <Cover img={img} title="OUR MENU" des="Would you like to try a dish?" />
            {/* TODAY'S OFFER */}

            <SectionHeading heading={'TODAY\'S OFFER'} subHeading={'---Don\'t miss---'} />
            <Manu item={offereds} />

            {/* DESSERTS */}
            <Cover img={dessertimg} title="DESSERTS " des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <Manu item={desserts} />

            {/* PIZZA */}
            <Cover img={pizzaimg} title="PIZZA " des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <Manu item={pizzas} />

            {/* SALADS*/}
            <Cover img={saladimg} title="SALADS" des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <Manu item={salads} />

            {/* SOUPS*/}
            <Cover img={soupimg} title="SOUPS" des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <Manu item={soups} />
        </div>
    )
}

export default OurMenu