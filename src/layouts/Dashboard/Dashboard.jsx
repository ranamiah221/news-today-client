import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 h-min bg-amber-500">
                 <ul className="menu">
                      <li><NavLink to='/dashboard/allUser'>All User</NavLink></li>
                      <li><NavLink to='/dashboard/addPublisher'>Add Publisher</NavLink></li>
                      <li><NavLink to='/dashboard/allArticle'>All Article</NavLink></li>
                 </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;