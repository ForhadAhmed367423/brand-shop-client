/* eslint-disable no-unused-vars */
import { Link, NavLink,useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/UserContext";


const Navbar = () => {
    const navStyle={
        backgroundColor: '#3957DB',

    }

    const navigate = useNavigate();

    const {logout,user} = useContext(AuthContext);

    const handleLogout = () => {
        logout()
        .then(result => {
          console.log(result.user);
        })
        .then(error => {
          console.log(error);
        })
    }

     
    return (
        
        

<div className="flex justify-between text-white py-6 items-center px-4" style={navStyle}>
  <div className="">
    <div >
    <h1 className="text-3xl font-bold ">Brand Shop</h1>
        <p className="text-sm text-center">Online shop</p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className='flex gap-12 max-[992px]:gap-24'>
                        <li className='text-lg  text-white font-bold'>
                            <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#17DD1F] underline text-lg font-bold" : ""
                            }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className='text-lg  text-white font-bold'>
                            <NavLink
                            to="/addProduct"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#17DD1F] underline font-bold" : ""
                            }
                            >
                                Add-Product
                            </NavLink>
                        </li>
                        <li className='text-lg  text-white font-bold'>
                            <NavLink
                            to="/myCart"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#17DD1F] underline font-bold" : ""
                            }
                            >
                                My Cart
                            </NavLink>
                        </li>
                </ul>
  </div>
  
<div>
    
  {user? 
        <div className='flex gap-[10px] items-center'>
        <img src={user?.photoURL} className="rounded-full w-[50px] h-[50px]"  alt="" />
        <h1>{user?.displayName}</h1>
        <button  onClick={handleLogout} className='text-[20px] py-[12px] px-[28px] border text-[#fff] bg-black font-semibold transition-all duration-300'>Log Out</button>
    </div>

    :
    <div className='flex gap-[10px] items-center'>
        <Link to={'/login'}>
            <span className='text-[20px] py-[10px] px-[20px] border  text-[#fff] bg-black font-semibold  transition-all duration-300'>Log In</span>
        </Link>
        <Link to={'/register'}>
            <span className='text-[20px] py-[10px] px-[20px] border  text-[#fff] bg-black font-semibold  transition-all duration-300'>Sign Up</span>
        </Link>
    </div>                
                }
</div>

</div>

        
    );
};

export default Navbar;

// {(user.uid) ? 
//     <div className='flex gap-[10px] items-center'>
//         <img src={user?.photoURL} className="rounded-full w-[50px] h-[50px]"  alt="" />
//         <h1>{user?.displayName}</h1>
//         <button onClick={()=>{logOutHandler()}} className='text-[20px] py-[12px] px-[28px] border text-[#fff] bg-black font-semibold transition-all duration-300'>Log Out</button>
//     </div>

//     :
//     <div className='flex gap-[10px] items-center'>
//         <Link to={'/login'}>
//             <span className='text-[20px] py-[10px] px-[20px] border  text-[#fff] bg-black font-semibold  transition-all duration-300'>Log In</span>
//         </Link>
//         <Link to={'/register'}>
//             <span className='text-[20px] py-[10px] px-[20px] border  text-[#fff] bg-black font-semibold  transition-all duration-300'>Sign Up</span>
//         </Link>
//     </div>
//     }