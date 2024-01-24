import { FaHome, FaReadme, FaUser, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    const isAdmin= true;
    return (
        <div className="flex gap-8 ">
            <div className="w-64 min-h-screen bg-amber-500 pt-10">
                 <ul className="menu">
                     {
                        isAdmin? <>
                        <li><NavLink to='/dashboard/allUser'> <FaUsers></FaUsers> All User</NavLink></li>
                        <li><NavLink to='/dashboard/addPublisher'> <FaUser></FaUser> Add Publisher</NavLink></li>
                        <li><NavLink to='/dashboard/allArticle'> <FaReadme></FaReadme> All Article</NavLink></li>
                        <div className="divider divider-primary"></div>
                      <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                        </>:<>
                       
                        </>
                     }
                      
                      
                 </ul>
            </div>
            <div className="flex-1 pt-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;