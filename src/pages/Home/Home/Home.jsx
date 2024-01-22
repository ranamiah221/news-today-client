
import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet-async';
const Home = () => {
    return (
       <>
        <section>
            <Helmet>
             <title>News Today | Home</title>
            </Helmet>
         </section>
         <div>
         <Banner></Banner>
         </div>
               
       </>
    );
};

export default Home;