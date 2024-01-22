import Swal from "sweetalert2";
import useAuth from "../../hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { axiosSecure } from './../../hook/useAxiosSecure';
import useCart from "../../hook/useCart";




const Article = ({article}) => {
    const {title, image, publisher, category, description, views, _id}=article;
  const {user}=useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate= useNavigate();
  const location= useLocation();
  const[,refetch]=useCart();
    const handleDetail=(id)=>{
       console.log(id, user?.email); 
       if(user && user?.email){
          // send item to the data base..
          const articleItem={
            email: user.email,
            title,
            articleId:id,
          }
          axiosSecure.post('/myArticle',articleItem)
          .then(res=>{
            console.log(res.data);
            if (res.data.insertedId){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${title} added to the my article`,
                showConfirmButton: false,
                timer: 1500
              });
              refetch();
            }
          })
       }
       else{
        Swal.fire({
          title: "You are not login !!",
          text: "please login see to the details page",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login !"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login',{state:{from: location}})
          }
        });
       }
   }
    return ( 
      
      <div className="card card-compact w-full bg-base-100 shadow-xl mb-10">
        <figure><img src={image} alt="Shoes" className="h-[300px]" /></figure>
        <div className="card-body text-justify">
          <h2 className="card-title">{title}</h2>
          <p>{description.slice(0,90)}...<span>
             <button onClick={()=>handleDetail(_id)} className="btn">Details</button>
            </span></p>
          <h2 className="text-xl font-normal">Publisher: {publisher}</h2>
          <h2 className="text-xl font-normal">Tags: {category}</h2>
          <p>Views: {views}</p>
        </div>
      </div>
        
    );
};

export default Article;