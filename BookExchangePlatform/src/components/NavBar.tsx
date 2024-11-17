import { NavLink, } from "react-router-dom"
import { useEffect, useState } from "react"


function NavBar() {
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        const hideOn = ['/', '/login', '/register', '/reset-password']
        if (hideOn.includes(location.pathname)) {
            setShowNav(false);
        } else {
            setShowNav(true);
        }
    }, [location]);


    return (
        <>
            {showNav &&
                <nav className="navbar navbar-expand-lg navbar-light-subtle bg-primary-subtle">
                    <div className="container">
                        <a className="navbar-brand">BookExchange</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/books-listing" state={{ books: false }}>Books</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/exchange-books">Exchange books</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/track-books">Track books</NavLink>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-primary" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            }

            
        </>
    )
}

export default NavBar
