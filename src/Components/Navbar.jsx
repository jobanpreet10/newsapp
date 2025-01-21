const Navbar = ({ setCategory }) => {
    return (
        <nav
            className="navbar navbar-expand-lg bg-body-tertiary shadow-sm"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                overflow: 'hidden',
                padding: '0.5rem 1rem',
                backgroundColor: '#343a40',
            }}
            data-bs-theme="dark"
        >
            <div className="container-fluid">
                <a
                    className="navbar-brand d-flex align-items-center"
                    href="#"
                    style={{
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        color: '#f8f9fa',
                        textDecoration: 'none',
                    }}
                >
                    <span
                        className="badge bg-light text-dark fs-4"
                        style={{
                            padding: '0.5rem 1rem',
                            borderRadius: '0.5rem',
                        }}
                    >
                        NewsMag
                    </span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul
                        className="navbar-nav ms-auto"
                        style={{
                            gap: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        {['Technology', 'Business', 'Health', 'Sports', 'Entertainment'].map(
                            (category) => (
                                <li className="nav-item" key={category}>
                                    <div
                                        className="nav-link"
                                        style={{
                                            cursor: 'pointer',
                                            fontSize: '1.1rem',
                                            color: '#f8f9fa',
                                            padding: '0.5rem 0.75rem',
                                            borderRadius: '0.25rem',
                                            transition: 'background-color 0.3s, color 0.3s',
                                        }}
                                        onClick={() => setCategory(category.toLowerCase())}
                                        onMouseOver={(e) => {
                                            e.target.style.backgroundColor = '#f8f9fa';
                                            e.target.style.color = '#343a40';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.backgroundColor = 'transparent';
                                            e.target.style.color = '#f8f9fa';
                                        }}
                                    >
                                        {category}
                                    </div>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
