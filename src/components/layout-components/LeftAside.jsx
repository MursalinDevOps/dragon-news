import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftAside = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then((res)=>res.json())
        .then((data)=>setCategories(data.data.news_category))
    },[])


    return (
        <div>
            <h2 className="text-xl font-semibold">All category</h2>
            <div className="flex flex-col gap-3 mt-3 text-lg">
                {
                    categories.map(category => <NavLink to={`/category/${category.category_id}`} className="btn">{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};``

export default LeftAside;