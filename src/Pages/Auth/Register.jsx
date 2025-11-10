import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Aos from 'aos';

const Register = () => {
    const { createUser, setUser, googleRegister } = use(AuthContext)
    const [error, setError] = useState("")
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }

    const location = useLocation();
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();

        ////validation of password


        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        if (!password) {
            toast.error("Password is required!");
            return;
        }
        if (password.length < 6) {
            return setError("Password must be at least 6 characters long!");
        }
        if (!/[a-z]/.test(password)) {
            return setError("Password must contain at least one lowercase letter!");
        }
        if (!/[A-Z]/.test(password)) {
            return setError("Password must contain at least one uppercase letter!");
        }
        // email password login
        createUser(email, password).then((res) => {

            const user = res.user;
            updateProfile(user, {
                displayName: name,
                photoURL: photo,
            }).then((res) => {

                toast.success("SignUp Successfull")

            })
            setUser(user);
            navigate(`${location.state ? location.state : "/"}`)

        }).catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage)
            // alert(errorCode)

        });

        // google login
    }
    const handleGoogle = () => {

        googleRegister().then((res) => {

            const user = res.user;
            toast.success("SignUp Successfull")
            setUser(user);
            navigate(`${location.state ? location.state : "/"}`)



        }).catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage)
            // alert(errorCode)
            console.error("Google sign-in error code:", error.code);
            console.error("Google sign-in error message:", error.message);
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
        <div data-aos="flip-right" className=' flex items-center justify-center flex-col mt-6 mb-9'>
            <form onSubmit={handleRegister}> <fieldset className="fieldset  bg-white  border-base-300 rounded-box w-xs border p-4 relative">
                {/* <legend className="fieldset-legend">Login </legend> */}
                <h2 className='font-bold text-xl text-center p-5'>Register your account</h2>

                <label className="label">Your Name</label>
                <input name='name' type="text" className="input" placeholder="Enter your name" required />

                <label className="label">Photo URL</label>
                <input name='photo' type="text" className="input" placeholder="Photo URL" required />


                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" required />

                <label className="label">Password</label>
                <input name='password' type={show ? "text" : "password"} className="input" placeholder="Password" required />
                <span className='absolute right-8 top-85 cursor-pointer z-30' onClick={handleShow}>{
                    show ? <FaEyeSlash /> : <FaEye />
                }


                </span>
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

                <button type='submit' className="btn btn-neutral mt-4">Register</button>
            </fieldset></form>
            {/* */}
            <button onClick={handleGoogle} className=" pl-16 pr-16 btn border-2 border-black bg-white text-black ">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Signin  with Google
            </button>


            <p className='text-sm font-semibold text-gray-500 text-center p-2'> Have An Account!! <Link to="/login"><span className='text-blue-700'>Login</span></Link> </p>
        </div>
    );
};

export default Register;