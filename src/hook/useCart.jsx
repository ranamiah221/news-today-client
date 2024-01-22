import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './useAxiosSecure';
import useAuth from "./useAuth";

const useCart = () => {
   const axiosSecure =useAxiosSecure();
   const {user}=useAuth();
    const {refetch, data: article =[]}=useQuery({
        queryKey:['article', user?.email],
        queryFn: async()=>{
            const res= await axiosSecure.get(`/myArticle?email=${user.email}`)
            return res.data;
        }
    })
    return[article, refetch]
};

export default useCart;