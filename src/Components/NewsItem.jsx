import image from '../assets/NEWS.jpg'


const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card m-3 bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "300px" }}>
            <img 
                src={src ? src:image} 
                className="card-img-top" 
                alt="news-thumbnail" 
                style={{ height: "150px", objectFit: "cover" }} 
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {description?.length > 100 
                        ? description.substring(0, 100) + "..." 
                        : description}
                </p>
                <a href={url} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
                    Read More
                </a>
            </div>
        </div>
    );
};

export default NewsItem;
