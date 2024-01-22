
import AllArticle from "../../AllArticle/AllArticle";
import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet-async';
import Statistic from "../Statistic/Statistic";
import AllPublisher from "../AllPublisher/AllPublisher";
import Review from "../Review/Review";
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
         <AllArticle></AllArticle>
         <AllPublisher></AllPublisher>
         <Statistic></Statistic>
         <Review></Review>
         </div>
               
       </>
    );
};

export default Home;