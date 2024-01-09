import { Outlet } from "react-router-dom";
import Navbar from "../../pages/sharad/Navbar/Navbar";
import Footer from "../../pages/sharad/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;