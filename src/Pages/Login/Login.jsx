import { useContext } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from '../../Providers/AuthProvider';

import Swal from 'sweetalert2'

const Login = () => {


    const { signInUser, googleSingIn} = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from.pathname || '/';

    const hendelsubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
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

                setTimeout(() => {
                    navigate(from, { replace: true })
                }, 2000);
            })
    }
    const hendelGoogleSingUp =()=>{
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

            setTimeout(() => {
                navigate(from, { replace: true })
            }, 2000);
        })
    } 

    return (

        <div className="flex  items-center justify-center">
            <div className="relative h-[1100px] w-full overflow-hidden ">
                <div className="h-full w-full bg-[100%] bg-no-repeat bg-cover  " style={{ backgroundImage: `url(${'https://i.ibb.co/tXWZZ4k/painting-woman-s-portrait.jpg'})`, }}></div>
                <div className="absolute bottom-0 flex h-3/4 w-full flex-col rounded-t-3xl bg-white bg-opacity-20 shadow">
                    <form onSubmit={hendelsubmit} className="mt-10 space-y-8 px-10 py-10 w-[500px] mx-auto text-center">
                        <div className="group relative">
                            <input type="email" name="email" id="username" required className="peer h-14 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none" />
                            <label className="absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white">Username</label>
                        </div>

                        <div className="group relative">
                            <input type="password" name="password" id="password" required className="peer h-14 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none" />
                            <label className="absolute left-2 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white">password</label>
                        </div>


                        <button type='submit' className="h-12 w-full rounded-3xl bg-blue-900 text-white transition-all duration-300 hover:bg-blue-800">Login</button>

                        <a className="inline-flex !w-auto justify-center font-medium text-white">Forgot password?</a>
                    </form>
                    <p className=' text-center font-semibold text-white text-lg'>New Hear Go To <Link to='/signup'> Singup Page</Link> </p>
                    <p className="gap-2 text-center text-white">
                        <a className="font-semibold text-blue-900 hover:text-blue-800">Sign up</a>
                    </p>

                    <a className="border-white-500 group m-auto mb-4 mt-5 inline-flex h-12 w-[320px] items-center justify-center space-x-2 rounded-3xl border px-4 py-2 transition-colors duration-300 hover:border-blue-500 hover:bg-blue-500 focus:outline-none">
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

export default Login