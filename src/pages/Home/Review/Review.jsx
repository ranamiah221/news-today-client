import useReview from "../../../hook/useReview";
import ScetionTitle from "../../ScetionTitle/ScetionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Review = () => {
  const [reviews] = useReview();
  return (
    <>
      <ScetionTitle heading="Reviews"></ScetionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
            <div className="w-1/6 mx-auto">
            <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly />
            </div>
          <div className="text-center w-1/2 mx-auto mb-10 ">
         <h2 className="text-xl font-bold text-amber-500 mt-5 mb-5">{review.name}</h2>
        <p>{review.details}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
       
     
    </>
  );
};

export default Review;
