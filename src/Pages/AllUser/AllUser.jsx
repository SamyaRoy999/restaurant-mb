import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../hooks/useAxiosSecure"
import { FaTrashAlt, FaUsers } from "react-icons/fa"
import Swal from "sweetalert2"


const AllUser = () => {
    const useSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users "],
        queryFn: async () => {
            const res = await useSecure.get('/user')
            return res.data
        }
    })

    const hendelAdmit = (id, name) => {
        useSecure.patch(`/user/admin/${id}`)
            .then(res => {
                refetch()
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} is Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
    }

    const hendelDelete = (id) => {
        useSecure.delete(`/user/${id}`)
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
        <div>
            <h1>Totle User : {users.length}</h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <td></td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>ROLE</td>
                                <td>ACTION</td>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {users.map((item, index) => (
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    {item.role ? <td> <h2>Admin</h2> </td>:
                                        <td>
                                            <button onClick={() => hendelAdmit(item._id ,item.name)} className="btn btn-ghost btn-lg"><FaUsers className="text-2xl text-[#D1A054]"></FaUsers></button>
                                        </td>
                                    }
                                    <th>
                                        <button onClick={() => hendelDelete(item._id)} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-700"></FaTrashAlt></button>
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

export default AllUser