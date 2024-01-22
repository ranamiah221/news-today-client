import useArticle from "../../hook/useArticle";
import ScetionTitle from "../ScetionTitle/ScetionTitle";
import Article from "./Article";

const AllArticle = () => {
    const [articles]=useArticle([]);
    return (
        <>
            <ScetionTitle heading='Top 10 Article'></ScetionTitle>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
            {
                articles.slice(0,10).map(article=><Article key={article._id}article={article}></Article>)
            }
        </div>
        </>
        
    );
};

export default AllArticle;