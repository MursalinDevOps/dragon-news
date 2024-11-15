import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
    const {data:news} = useLoaderData();
    return (
        <div className="px-3">
            <h2 className="text-xl font-semibold">Dragon News Home</h2>
            <div>
                {
                    news.map(singleNews => <NewsCard key={singleNews._id}
                    news={singleNews}></NewsCard>)
                }
               
            </div>
        </div>
    );
};

export default CategoryNews;