

const FoodCard = ({item}) => {
    const {  name , recipe, image , price } = item ;
    return (
        <div>
    <div className="card w-80 h-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
       <p className="bg-slate-900 right-2 px-3 rounded top-2 absolute text-white ">${price}</p>
        <div className="card-body flex flex-1 items-center">
            <h2 className="card-title ">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-outline bg-slate-100  border-orange-300 border-0 border-b-4 ">Add To Cart</button>
            </div>
        </div>
    </div>
        </div>
    );
};

export default FoodCard;