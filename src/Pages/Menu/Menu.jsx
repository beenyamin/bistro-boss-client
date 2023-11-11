
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Footer/Cover/Cover';
import MenuImg from '../../assets/menu/banner3.jpg';
import DessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu ();
    const dessert = menu.filter (item => item.category === "dessert")
    const soup = menu.filter (item => item.category === "soup")
    const salad = menu.filter (item => item.category === "salad")
    const pizza = menu.filter (item => item.category === "pizza")
    const offered = menu.filter (item => item.category === "offered")


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>

            </Helmet>

            <Cover img={MenuImg} title={'Our Menu'} desc={"Would you like to try a dish?"} ></Cover>
            <SectionTitle subHeading="Don't Miss " heading={'Todays Offer'}></SectionTitle>
            {/* offered menu items */}
             <MenuCategory items={offered}></MenuCategory>

             {/* dessert */}             
             <MenuCategory items={dessert} title='dessert' coverImg={DessertImg} ></MenuCategory>
             <MenuCategory items={pizza} title='pizza' coverImg={pizzaImg} ></MenuCategory>
             <MenuCategory items={salad}  title='salad' coverImg={saladImg} ></MenuCategory>
             <MenuCategory items={soup} title='soup'coverImg={soupImg} ></MenuCategory>
          

        </div>
    );
};

export default Menu;