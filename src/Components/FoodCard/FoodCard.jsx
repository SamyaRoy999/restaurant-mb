

const FoodCard = ({item}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={item.image} alt="Shoes" /></figure>
                <p className="bg-[#111827] text-white absolute right-5 top-5 py-3 px-6">${item.price}</p>
                <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.recipe}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-outline mx-auto border-0 border-b-4 text-[#BB8506]">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard