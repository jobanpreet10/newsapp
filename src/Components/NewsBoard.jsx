import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [isNightMode, setIsNightMode] = useState(true);

    useEffect(() => {
        const apiKey = import.meta.env.VITE_API_KEY;
        const originalUrl = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(originalUrl)}`;

        fetch(proxyUrl)
            .then((response) => response.json())
            .then((data) => {
                const parsed = JSON.parse(data.contents);
                setArticles(parsed.articles);
            })
            .catch((err) => {
                console.error("Error fetching news:", err);
            });
    }, [category]);

    const toggleMode = () => {
        setIsNightMode(!isNightMode);
    };

    return (
        <div
            className="text-center"
            style={{
                marginTop: '80px',
                padding: '20px',
                backgroundColor: isNightMode ? '#000000' : '#ffffff',
                color: isNightMode ? 'white' : 'black',
                minHeight: '100vh',
                transition: 'background-color 0.5s, color 0.5s',
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
                    style={{ height: '40px', fontSize: '14px' }}
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
