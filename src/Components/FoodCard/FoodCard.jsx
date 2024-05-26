
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom'

// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useCarts from "../../../hooks/useCarts";
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCarts from '../../hooks/useCarts';

const FoodCard = ({ item }) => {
    const { user } = useAuth()
    const axiosScoure = useAxiosSecure()
    const [, refetch] = useCarts()
    const nevigate = useNavigate()
    const location = useLocation()
    const handelAddToCard = (item) => {
        if (user && user.email) {
            const cartItem = {
                menuId: item._id,
                email: user.email,
                name: item.name,
                image: item.image,
                price: item.price
            }
            axiosScoure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data) {

                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${item.name} added you cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not login",
                text: "Pless login and add to cart  ",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then(result => {
                if (result.isConfirmed) {
                    nevigate('/login', { state: { from: location } })
                }
            })
        }

    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={item.image} alt="Shoes" /></figure>
                <p className="bg-[#111827] text-white absolute right-5 top-5 py-3 px-6">${item.price}</p>
                <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handelAddToCard(item)} className="btn btn-outline mx-auto border-0 border-b-4 text-[#BB8506]">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard