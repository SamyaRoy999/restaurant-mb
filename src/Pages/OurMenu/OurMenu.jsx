
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
          
            <Manu item={desserts} img={dessertimg} title="dessert"  des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />

            {/* PIZZA */}
            <Manu item={pizzas}  img={pizzaimg} title="pizza " des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>

            {/* salads*/}
            <Manu item={salads} img={saladimg} title="salad" des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
            
            {/* SOUPS*/}
            <Manu item={soups} img={soupimg} title="soup"  des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
        </div>
    )
}

export default OurMenu