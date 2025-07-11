import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [isNightMode, setIsNightMode] = useState(true); // State for mode toggle

    useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0'
        }
    })
        .then((response) => response.json())
        .then((data) => setArticles(data.articles));
}, [category]);


    return (
        <div
            className="text-center"
            style={{
                marginTop: '80px',
                padding: '20px',
                backgroundColor: isNightMode ? '#000000' : '#ffffff', // Toggle background
                color: isNightMode ? 'white' : 'black', // Toggle text color
                minHeight: '100vh',
                transition: 'background-color 0.5s, color 0.5s', // Smooth transition
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    marginBottom: '20px',
                }}
            >
                <h2 style={{ margin: 0 }}>
                    Latest <span className="badge bg-danger">News</span>
                </h2>
                <button
                    className="btn btn-secondary"
                    onClick={toggleMode}
                    style={{
                        height: '40px',
                        fontSize: '14px',
                    }}
                >
                    {isNightMode ? 'Switch to Light Mode' : 'Switch to Night Mode'}
                </button>
            </div>
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
