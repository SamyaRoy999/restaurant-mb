import { useContext } from "react"
import { AuthContext } from "../src/Providers/AuthProvider"


const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth
}

export default useAuth