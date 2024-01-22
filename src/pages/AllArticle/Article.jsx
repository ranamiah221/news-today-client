

const Article = ({article}) => {
    const {title, image, publisher, category, description, views}=article;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl mb-10">
        <figure><img src={image} alt="Shoes" className="h-[300px]" /></figure>
        <div className="card-body text-justify">
          <h2 className="card-title">{title}</h2>
          <p>{description.slice(0,90)}...</p>
          <h2 className="text-xl font-normal">Publisher: {publisher}</h2>
          <h2 className="text-xl font-normal">Tags: {category}</h2>
          <p>Views: {views}</p>
        </div>
      </div>
    );
};

export default Article;