import image from '../assets/NEWS.jpg';

const NewsItem = ({ title, description, src, url }) => {
    return (
        <div
            className="card m-3 text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
            style={{
                maxWidth: "300px",
                backgroundColor: "#000000", // Black background for the cards
                border: "1px solid #333",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(255, 255, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(255, 255, 255, 0.1)";
            }}
        >
            <img
                src={src ? src : image}
                className="card-img-top"
                alt="news-thumbnail"
                style={{
                    height: "150px",
                    objectFit: "cover",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                }}
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {description?.length > 100
                        ? description.substring(0, 100) + "..."
                        : description}
                </p>
                <a
                    href={url}
                    className="btn btn-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Read More
                </a>
            </div>
        </div>
    );
};

export default NewsItem;
