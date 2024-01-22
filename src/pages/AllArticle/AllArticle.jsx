import useArticle from "../../hook/useArticle";
import Article from "./Article";

const AllArticle = () => {
    const [articles]=useArticle([]);
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
            {
                articles.map(article=><Article key={article._id}article={article}></Article>)
            }
        </div>
    );
};

export default AllArticle;