import { useState } from 'react';
import orderCover from '../../../assets/shop/order.jpg'
import Cover from '../../Shared/Footer/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import OrderTabs from '../OrderTabs/OrderTabs';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {

    const categories = ['salad', 'pizza' , 'soup', 'dessert', 'drinks']
    const {category} = useParams ();
    const initialIndex = categories.indexOf(category)
    const [tabIndex , setTabIndex] = useState (initialIndex)
    const [menu] = useMenu ();
  

    const dessert = menu.filter (item => item.category === "dessert")
    const soup = menu.filter (item => item.category === "soup")
    const salad = menu.filter (item => item.category === "salad")
    const pizza = menu.filter (item => item.category === "pizza")
    const Drinks = menu.filter (item => item.category === "drinks")



    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Order Food</title>

            </Helmet>


            <Cover img={orderCover} title={'Our Shop'} desc={'Would you like to try a dish?'}></Cover>


            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza </Tab>
                    <Tab>Soups</Tab>
                    <Tab>Dessert </Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                   <OrderTabs items={salad}></OrderTabs>
                </TabPanel>

                <TabPanel>
                <OrderTabs items={pizza}></OrderTabs>
                </TabPanel>

                <TabPanel>
                <OrderTabs items={soup}></OrderTabs>
                </TabPanel>

                <TabPanel>
                <OrderTabs items={dessert}></OrderTabs>
                </TabPanel>

                <TabPanel>
                <OrderTabs items={Drinks}></OrderTabs>
                </TabPanel>

            </Tabs>

        </div>
    );
};

export default Order;