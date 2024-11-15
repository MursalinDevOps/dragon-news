import { AiOutlineEye, AiOutlineStar } from 'react-icons/ai';

const NewsCard = ({news}) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mt-3">
            {/* Article Image */}
            <img src={news.thumbnail_url} alt={news.title} className="w-full h-[600px] object-cover" />
            
            {/* Content */}
            <div className="p-4">
                {/* Title */}
                <h3 className="text-lg font-semibold">{news.title}</h3>
                
                {/* Author Info */}
                <div className="flex items-center mt-2 space-x-2 text-gray-500">
                    <img src={news.author.img} alt={news.author.name} className="w-8 h-8 rounded-full" />
                    <div>
                        <p className="text-sm">{news.author.name}</p>
                        <p className="text-xs">{news.author.published_date ? new Date(news.author.published_date).toLocaleDateString() : "Unknown Date"}</p>
                    </div>
                </div>
                
                {/* Article Details */}
                <p className="mt-2 text-gray-600 text-sm">{news.details.slice(0, 100)}...</p>
                
                {/* Rating and Views */}
                <div className="flex items-center mt-4 justify-between">
                    <div className="flex items-center space-x-1 text-yellow-500">
                        <AiOutlineStar />
                        <span className="text-sm font-semibold">{news.rating.number}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                        <AiOutlineEye />
                        <span className="text-sm">{news.total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;