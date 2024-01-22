import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import useArticle from "../../../hook/useArticle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
  const [articles] = useArticle([]);
  console.log(articles);
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {articles.slice(0,6).map((article) => (
        <SwiperSlide key={article._id}>
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src={article.image}
                className="w-full h-[450px]"
              />
              <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                 
                 <div className="w-1/3 pl-10 pt-20">
                 <h2 className="text-white font-medium text-3xl text-pretty">{article.title}</h2>
                 <p className="text-white font-normal text-base text-justify mb-4">{article.description.slice(0,90)}</p>
                </div> 
                <div className="flex pl-10 justify-between w-1/3">
                    <h2 className="text-white font-medium text-2xl">{article.publisher}</h2>
                    <h3 className="text-white font-medium text-2xl">{article.category}</h3>
                </div>
                <p className="text-white font-medium pl-10 pt-4"> Views : {article.views}</p>
              </div>
            </div>
           
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
