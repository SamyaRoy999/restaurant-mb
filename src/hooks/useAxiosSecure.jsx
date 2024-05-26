import axios from "axios"

const axiosSecour = axios.create({
    baseURL: "http://localhost:5000",
})

const useAxiosSecure = () => {
    return axiosSecour
}

export default useAxiosSecure