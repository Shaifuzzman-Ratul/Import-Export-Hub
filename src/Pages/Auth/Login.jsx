import React, { use, useEffect, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
// import { AuthContext } from '../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import Aos from 'aos';

const Login = () => {
    // const { LogIn, signInWithGoole, setUser } = use(AuthContext)
    const { LogIn, googleRegister, setUser } = use(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    const [show, setShoe] = useState(false)
    const [Email, setEmail] = useState("");
    const handleShow = () => {
        setShoe(!show)
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setEmail(email);
        LogIn(email, password).then(() => {

            navigate(`${location.state ? location.state : "/"}`)
            toast.success('Successfully Login !')
        }).catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage)


        })


    }
    const handleForget = () => {
        navigate("/forget", { state: { Email } });
    }
    const handleGoogle = () => {

        googleRegister().then((res) => {
            const user = res.user;
            setUser(user)
            toast.success('Successfully Login !')

            navigate(`${location.state ? location.state : "/"}`)
        }).catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage)
            // alert(errorCode)


        })
    }
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
            offset: 100,
        });
    }, []);
    return (
        <div data-aos="flip-left" className='flex flex-col items-center justify-center mb-20 mt-20'>
            <form onSubmit={handleLogin} ><fieldset className="fieldset  bg-white  border-base-300 rounded-box w-xs border p-4 relative">

                <h2 className='font-bold text-xl text-center p-5'>Login Your account</h2>

                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={Email}
                    required />

                <label className="label">Password</label>
                <input name='password' type={show ? "text" : "password"} className="input" placeholder="Password" required />
                <span className='absolute right-8 top-50 cursor-pointer z-30' onClick={handleShow}>{
                    show ? <FaEyeSlash /> : <FaEye />
                }


                </span>


                <p onClick={handleForget} className='cursor-pointer hover:underline'>Forget password?</p>
                <button type='submit' className="btn btn-neutral mt-4">Login</button>

            </fieldset></form>
            <div> <button onClick={handleGoogle} className="btn pl-18 pr-18 border-2 border-black bg-white text-black ">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
            </button>

                <p className='text-sm font-semibold text-gray-500 text-center p-2'>Dont’t Have An Account ? <Link to="/register"><span className='text-blue-700'>Register</span></Link> </p></div>

        </div>
    );
};

export default Login;