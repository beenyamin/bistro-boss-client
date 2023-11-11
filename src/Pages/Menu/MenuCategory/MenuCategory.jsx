import { Link } from "react-router-dom";
import MenuItem from "../../Home/MenuItem/MenuItem";
import Cover from "../../Shared/Footer/Cover/Cover";


const MenuCategory = ({ items , title , coverImg}) => {


    return (
        <div className="pt-8 ">
            { title && <Cover img={coverImg} title={title} desc={"Would you like to try a dish?"} ></Cover>}

            <div className="grid md:grid-cols-2 gap-10 my-16 ">

                {
                    items.map(item => <MenuItem key={item._id} item={item} ></MenuItem>)
                }

            </div>

            <div className="text-center mt-5">
             <Link to={`/order/${title}`}> <button className="btn btn-outline  border-0 border-b-4 ">Order Your Favorites Food</button></Link>
             </div>


        </div>
    );

};

export default MenuCategory;