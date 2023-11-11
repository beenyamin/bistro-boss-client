import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";


const PopularMenu = () => {

    const [menu , setMenu] = useState ([]);


    useEffect ( () => {

        fetch ('menu.json')
        .then (res => res.json ())
        .then (data => {
            const popularITem =data.filter ( item => item.category === 'popular' )
            setMenu(popularITem)
        })
    } , [])



    return (
        <div className="mb-12">

            <SectionTitle 
            heading={'From Our Menu'}
            subHeading={'Popular Items'}
            ></SectionTitle>
              <div className="grid md:grid-cols-2 gap-10">
      
                {
                      menu.map (item => <MenuItem key={item._id}  item={item} ></MenuItem> )
                }


              </div>
             <div className="text-center mt-5">
             <button className="btn btn-outline  border-0 border-b-4 ">View Full Menu</button>
             </div>

            
        </div>
    );
};

export default PopularMenu;