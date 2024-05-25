import Swal from "sweetalert2";
import useCarts from "../../../../hooks/useCarts"
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const Cart = () => {
    const [cart, refetch] = useCarts()
    const totalPrice = cart.reduce((totle, item) => totle + item.price, 0)
    const axiosScoure = useAxiosSecure()
    const hendelDelete = (id) => {
        axiosScoure.delete(`/carts/${id}`)
        .then(res => {
            if (res.data.deletedCount > 0) {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                });
                refetch()
            }
        })
     
    }
    return (
        <>
            <div className="flex justify-center items-center gap-32 p-10">
                <h3 className="text-3xl">Items: {cart.length}</h3>
                <h3 className="text-3xl">Total Price: ${totalPrice}</h3>
                <button className="btn btn-primary text-xl">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {cart.map((item, index) => (
                            <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>  <div className="font-bold">{item.name}</div></td>
                                <td>
                                    <p> $ {item.price}</p>
                                </td>
                                <th>
                                    <button onClick={() => hendelDelete(item._id)} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-700"></FaTrashAlt></button>
                                </th>
                            </tr>
                        ))}


                    </tbody>

                </table>
            </div>
        </>
    )
}

export default Cart