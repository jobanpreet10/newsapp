import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => setArticles(data.articles));
    }, [category]);

    return (
        <div
            className="text-center"
            style={{
                marginTop: '80px',
                padding: '20px',
                backgroundColor: '#000000', // Black background for the NewsBoard
                color: 'white', // White text for better contrast
                minHeight: '100vh', // Ensures the black background covers the screen
            }}
        >
            <h2>
                Latest <span className="badge bg-danger">News</span>
            </h2>
            <div>
                {articles.map((news, index) => (
                    <NewsItem
                        key={index}
                        title={news.title}
                        description={news.description}
                        src={news.urlToImage}
                        url={news.url}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewsBoard;
