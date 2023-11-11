import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg';
import './Featured.Css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-4 ">


            <SectionTitle  subHeading={'Check it Out'} heading={'Featured Item'}></SectionTitle>


     <div className="md:flex  bg-slate-200 bg-opacity-50 justify-center pt-10 pb-20 px-16 items-center ">

        <div> 
            <img className="h-64" src={featured} alt="" />
        </div>

        <div className="md:ml-10">
            <h2>March 20, 2023</h2>
            <p> WHERE CAN I GET SOME?</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quibusdam, quaerat dicta est tenetur eveniet? Veritatis asperiores cum, </p>
            <button className="btn btn-outline border-0 border-b-4 ">Order Now</button>
        </div>


     </div>

        </div>
    );
};

export default Featured;