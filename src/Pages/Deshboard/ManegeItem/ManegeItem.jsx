import { FaTrashAlt } from "react-icons/fa";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading"
import useMenu from "../../../hooks/useMenu"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ManegeItem = () => {
    const [menu] = useMenu()
    const useSecure = useAxiosSecure()
    const hendelDelete = (item) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
            const res = await useSecure.delete(`/menu/${item._id}`)
            console.log(res);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }


    return (
        <div>
            <SectionHeading heading='MANAGE ALL ITEMS' subHeading='---Hurry up!---'></SectionHeading>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>ITEMS IMGES</th>
                                <th>ITEMS NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {menu.map((item, index) => (
                                <tr key={item._id}>
                                    <th>
                                        <label>
                                            {index + 1}
                                        </label>
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
                                    <td>{item.name}</td>
                                    <td>
                                        $ {item.price}

                                    </td>
                                    <td>Crimson</td>
                                    <th>
                                        <button onClick={() => hendelDelete(item)} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-700"></FaTrashAlt></button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManegeItem