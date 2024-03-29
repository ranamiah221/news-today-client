import { NavLink } from "react-router-dom";
import logo from '../../../assets/logo.jpg';
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogOut=()=>{
       logOut()
       .then(()=>{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Log Out Successful",
          showConfirmButton: false,
          timer: 1500
        });
       })
       .catch(error=>{
        console.log(error);
       })
  }
    const navLink= <>

       <li><NavLink className='mr-4' to='/'>Home</NavLink></li>
       <li><NavLink className='mr-4' to='/addArticle'>Add Article</NavLink></li>
       <li><NavLink className='mr-4' to='/allArticle'>All Article</NavLink></li>
       <li><NavLink className='mr-4' to='/subscription'>Subscription</NavLink></li>
       <li><NavLink className='mr-4' to='/myArticle'>My Article</NavLink></li>
       <li><NavLink className='mr-4' to='/dashboard/allUser'>Dashboard</NavLink></li>
       {
        user?<>
        <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
        </>:<>
        <li><NavLink to='/login'>Login</NavLink></li>
        </>
       }
       
    </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start w-1/4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}

          </ul>
        </div>
         <div className="flex items-center ">
         <img className="w-[80px] h-[80px]" src={logo} alt="" />
         <h2 className="text-xl font-bold text-red-500">Barta 24</h2>
         </div>
      </div>
      <div className="navbar-end hidden w-3/4 lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navLink}

        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
