
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import useCart from "../../../Hooks/useCart";


const FoodCard = ({item}) => {  
    const {  name , recipe, image , price , _id} = item ;
    const {user} = useAuth();
    const navigate = useNavigate ();
    const location = useLocation ();
    const  axiosSecure = useAxios ();
    const [refetch] = useCart ();

   const handleAddToCart = () => {
    if (user && user.email) {
         //send cart item to the database
        const cartItem = {
            menuId: _id,
            email: user.email,
            name, 
            image, 
            price,
        } 
        console.log(cartItem);

        //Custom Hook-->
        axiosSecure.post('/carts', cartItem)
          .then (res => {
            console.log(res.data);
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${name} Added To Your Cart`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  // refetch cart to update the cart item count
                  refetch ()

                
            }

        })


    }
    else{
        Swal.fire({
            title: " You are Not Logged In?",
            text: "Please Log In To add To the Cart!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log in!"
          }).then((result) => {
            if (result.isConfirmed) {
             //sent the user to the login page
             navigate ('/login' , {state: {from: location}})
            }
          });
    }



   }

    return (
        <div>
    <div className="card w-80 h-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
       <p className="bg-slate-900 right-2 px-3 rounded top-2 absolute text-white ">${price}</p>
        <div className="card-body flex flex-1 items-center">
            <h2 className="card-title ">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-end">
            <button  onClick={handleAddToCart} className="btn btn-outline bg-slate-100  border-orange-300 border-0 border-b-4 ">Add To Cart</button>
            </div>
        </div>
    </div>
        </div>
    );
};

export default FoodCard;