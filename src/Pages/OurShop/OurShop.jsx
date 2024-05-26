import Cover from "../../sheard/Cover/Cover"
import shopimg from '../../assets/shop/banner2.jpg'
import { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import OrderTab from "../../Components/OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import useMenu from "../../hooks/useMenu";



const OurShop = () => {

    const  categorys =  ["salad" , "pizza", "soup", "dessert", "drink"];
    const [menu] = useMenu()
    const {category} =useParams()
    
    const initalIndex = categorys.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initalIndex);


    const drinks = menu.filter(item => item.category === "drinks")
    const desserts = menu.filter(item => item.category === "dessert")
    const soups = menu.filter(item => item.category === "soup")
    const salads = menu.filter(item => item.category === "salad")
    const pizzas = menu.filter(item => item.category === "pizza")

    return (
        <>
            <Cover img={shopimg} title="OUR SHOP" des="Would you like to try a dish?" />
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soup</Tab>
                    <Tab>desserts</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel >
                    <OrderTab item={salads}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={pizzas}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={soups}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab item={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </>
    )
}

export default OurShop