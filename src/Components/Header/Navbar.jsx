import React, { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, NavLink } from 'react-router';
import toast from "react-hot-toast";
import { FaBars } from "react-icons/fa";
// import { AuthContext } from '../../Provider/AuthProvider';
// import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
    const { user, LogOut } = use(AuthContext)

    const handleLogout = () => {
        LogOut().then(() => {
            toast.success('Logout Successfull !');
        }).catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage)
            // alert(errorCode)

        })
    }

    return (
        <div>
            {/* <Toaster></Toaster> */}
            <div className="navbar bg-base-100 shadow-sm lg:pr-6 lg:pl-6">
                <div className="navbar-start">

                    {/*  */}
                    <div className='tooltip tooltip-right' data-tip={user?.displayName || user?.email}
                    >

                        <div className="dropdown dropdown-down">
                            <div tabIndex={0} role="button" className=" flex items-center flex-row-reverse ">
                                <a className="btn btn-ghost text-xl md:text-2xl lg:text-3xl font-extrabold ">Trade<span className='text-indigo-600'>Port</span></a> <FaBars />

                            </div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li>
                                    <NavLink to="/"> <p>Home</p></NavLink>

                                </li>
                                <li>
                                    <NavLink to="/all-products"><p>All Products</p></NavLink>

                                </li>
                                <li>
                                    <NavLink to="/add-exports"><p>Add Exports</p></NavLink>

                                </li>
                                <li>
                                    <NavLink to="/exports"><p>My Exports</p></NavLink>

                                </li>

                                <li>
                                    <NavLink to="/imports"><p>My Imports</p></NavLink>

                                </li>
                            </ul>

                        </div>

                    </div>




                    {/*  */}
                </div>
                <div className="navbar-center flex flex-col ">

                    <div className='lg:grid  lg:grid-cols-2 gap-5 pt-1 text-gray-500 text-sm hidden md:block'>
                        <NavLink to="/profile"><p>My Profile</p></NavLink>
                        <NavLink to="/"> <p>Home</p></NavLink>
                        {/* <NavLink to="/view"><p>Availabe Skills</p></NavLink> */}
                    </div>

                </div>
                <div className="navbar-end gap-3">
                    {

                        user ? <button onClick={handleLogout} className="btn font-bold text-[#422ad5] border-[#422ad5]">Logout</button> : <Link to="/login">
                            <button className="btn font-bold text-[#422ad5] border-[#422ad5]">Login</button></Link>

                    }
                    {
                        user ? "" : <Link to="/register"><button className="btn btn-primary">Sign In</button></Link>
                    }


                </div>
            </div>
        </div >
        // <div>
        //     <p>hek</p>
        // </div>
    );
};

export default Navbar;


