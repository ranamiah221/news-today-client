import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet-async';
const Home = () => {
    return (
       <div>
            <div>
                 <Helmet>
                      <title>News Today | Home</title>
                 </Helmet>
             </div>

         <div className=" lg:flex justify-between gap-5">
            <div className="w-[250px] bg-blue-500">div--1</div>
            <div className="flex-1">
                <Banner></Banner>
            </div>
            <div className="w-[250px] bg-slate-400">div---3</div>
           
        </div>
       </div>
    );
};

export default Home;