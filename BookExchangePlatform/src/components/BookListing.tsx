import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

export default function BookListing() {
    const [book, setBook] = useState(false);
    const navigate = useNavigate();
    const [bookListing, setBookListing] = useState<{ bookListTitle: string, bookList: [] }[]>([]);

    debugger
    useEffect(() => {
        fetchBookListing();
    }, [location]);


    function fetchBookListing() {
        const token = localStorage.getItem("token")
        axios.get('http://localhost:80/books-listing', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(data => {
            debugger
            if (data.data.status == "success") {
                setBookListing(data.data.data);
            }
        });
    }

    return (

        <>
            <NavBar />
            
                <div className="container my-5">
                    <div className="row ">
                        <h2 className="col-6 mb-4 $yellow-300">Book listings</h2>
                        <div className="d-md-flex justify-content-md-end col-6 mb-4">
                        
                            <button className="btn btn-primary me-md-2" type="button" onClick={() => { navigate("books"); setBook(true); }}>Create Listing</button>
                        </div>
                    </div>

                    {Object.keys(bookListing).map((key, idx) => (
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4" key={key}>
                            <div className="col">
                                <div className="card book-card shadow-sm">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h5 className="card-title mb-0">{bookListing[idx].bookListTitle}</h5>
                                            <button className="btn btn-primary btn-sm" onClick={() => { navigate("books", { state: bookListing[idx]}); setBook(true); }}>Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
        </>
    )

}
