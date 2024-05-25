import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import useAuth from "./useAuth"


const useCarts = () => {
    const axiosScoure = useAxiosSecure()
    const {user}= useAuth()

    const { data: cart = [], refetch } = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async () => {
            const res = await axiosScoure.get(`/carts?email=${user.email}`)
            return res.data
        }
    })

    return [cart,refetch]
}

export default useCarts