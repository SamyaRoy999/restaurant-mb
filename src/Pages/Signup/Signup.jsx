import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'
import useAxiosPublicSecour from "../../hooks/useAxiosPublicSecour";

const Signup = () => {


    const { createUser, updataProfile, googleSingIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublice = useAxiosPublicSecour()
    const {
        register,
        handleSubmit,

    } = useForm()
    const onSubmit = (data) => {
        const name = data.name
        const photoUrl = data.photoUrl
        const email = data.email
        const password = data.password
        createUser(email, password)
            .then(result => {
                const user = result.user
                updataProfile(name, photoUrl)
                    .then(res => {
                        console.log(res);
                        const userInfo = {
                            name,
                            email
                        }
                        axiosPublice.post('/user', userInfo)
                            .then(res => {
                                if (res.data) {
                                    console.log("user added database");
                                }
                            })
                    })
                if (user) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Singup successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

                setTimeout(() => {
                    navigate("/")
                }, 2000);
            })
    }
    const hendelGoogleSingUp = () => {
        googleSingIn()
            .then(result => {
                const user = result.user
                if (user) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Login successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                const userInfo = {
                    name: result.user.displayName,
                    email: result.user.email
                }
                axiosPublice.post('/user', userInfo)
                    .then(res => {
                        if (res.data) {
                            console.log("user added database");
                        }
                    })

                setTimeout(() => {
                    navigate('/')
                }, 2000);
            })
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="relative h-[1000px] w-full overflow-hidden ">
                <div className="h-full w-full bg-[100%] bg-no-repeat bg-cover  " style={{ backgroundImage: `url(${'https://i.ibb.co/tXWZZ4k/painting-woman-s-portrait.jpg'})`, }}></div>
                <div className="absolute bottom-0 flex h-3/4 w-full flex-col rounded-t-3xl bg-white bg-opacity-20 shadow">
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-8 px-10 py-10 w-[500px] mx-auto text-center">
                        <div className="group relative">
                            <input type="name"  {...register("name", { required: true })} name="name" id="username" required className="peer h-14 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none" />
                            <label className="absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white">Username</label>
                        </div>
                        <div className="group relative">
                            <input type="text"  {...register("photoUrl", { required: true })} name="photoUrl" id="username" required className="peer h-14 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none" />
                            <label className="absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white">UserProflie</label>
                        </div>
                        <div className="group relative">
                            <input type="email"  {...register("email", { required: true })} name="email" id="username" required className="peer h-14 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none" />
                            <label className="absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white">Email</label>
                        </div>

                        <div className="group relative">
                            <input type="password"  {...register("password", { required: true })} name="password" id="password" required className="peer h-14 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none" />
                            <label className="absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white">password</label>
                        </div>

                        <button type='submit' className="h-12 w-full rounded-3xl bg-blue-900 text-white transition-all duration-300 hover:bg-blue-800">Login</button>

                        <a href="#" className="inline-flex !w-auto justify-center font-medium text-white">Forgot password?</a>
                    </form>
                    <p className=" text-center font-semibold text-white text-lg">New Hear Go To <Link to='/login'> Login Page</Link> </p>
                    <p className="gap-2 text-center text-white">
                        <a href="#" className="font-semibold text-blue-900 hover:text-blue-800">Sign up</a>
                    </p>

                    <a href="#" className="border-white-500 group m-auto mb-4 mt-5 inline-flex h-12 w-[320px] items-center justify-center space-x-2 rounded-3xl border px-4 py-2 transition-colors duration-300 hover:border-blue-500 hover:bg-blue-500 focus:outline-none">
                        <span>
                            <svg className="text-white" width="20" height="20" fill="currentColor">
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                        </span>
                        <span className="text-sm font-medium text-white">Twitter</span>
                    </a>

                    <a onClick={hendelGoogleSingUp} className="border-white-500 group m-auto my-0 inline-flex h-12 w-[320px] items-center justify-center space-x-2 rounded-3xl border px-4 py-2 transition-colors duration-300 hover:border-black hover:bg-black focus:outline-none">
                        <span>
                        <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                        </span>
                        <span className="text-sm font-medium text-white">Google</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Signup