import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Books() {

    const [bookJson, setBookJson] = useState({});
    const [bookList, setBookList] = useState<{
        title: string;
        author: string;
        genre: string;
        condition: string;
        description: string;
        available: string;
    }[]>([]);
    const [bookListTitle, setbookListTitle] = useState("");
    const [bookTitle, setBookTitle] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookGenre, setBookGenre] = useState("");
    const [bookCondition, setBookCondition] = useState("");
    const [bookDescription, setBookDescription] = useState("");
    const [bookAvailable, setBookAvailable] = useState("");
    const [updateBooks,setupdateBooks]=useState(false);

    const token = localStorage.getItem("token");

    const navigate = useNavigate();
    const locat = useLocation();
    useEffect(() => {

        const stateVal = locat.state;

        if (stateVal) {
            setBookJson(stateVal);
            setbookListTitle(stateVal.bookListTitle);
            setBookList(stateVal.bookList);
            setupdateBooks(true);
        }
    }, [location])



    function createList(event: any) {
        debugger
        event.preventDefault();
        const list = {
            title: bookTitle,
            author: bookAuthor,
            genre: bookGenre,
            condition: bookCondition,
            description: bookDescription,
            available: bookAvailable
        };
        setBookList(bookList => [...bookList, list]);
        console.log(bookList)
        cancelBook(event);
    }
    function cancelBook(event: any) {
        event.preventDefault();
        setBookAuthor("");
        setBookCondition("");
        setBookTitle("");
        setBookDescription("");
        setBookCondition("");
        setBookGenre("");
        setBookAvailable("");
    }

    function resetList(event: any) {
        event.preventDefault();
        setBookAuthor("");
        setBookCondition("");
        setBookTitle("");
        setBookDescription("");
        setBookCondition("");
        setBookGenre("");
        setBookList([]);
    }

    function deleteBook(event: any, idx: number) {
        event.preventDefault();
        bookList.splice(idx, 1);
        setBookList(bookList);
    }

    function saveBookList(event: any) {
        event.preventDefault();
        setBookJson({ "bookList": bookListTitle, "list": bookList });

        axios.post('http://localhost:80/books-listing', { bookJson }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(
            res => { if (res.data.status == "success") navigate("/books-listing") }
        ).catch();
    }

    return (

        <>
            <div className="col-10 mx-auto">
                <div className="row my-3">

                    <form className="d-flex col-12" onSubmit={saveBookList}>
                        <Link to="/books-listing" state={{ books: false }} className="btn btn-primary me-md-2"><i className="bi bi-arrow-left"></i></Link>
                        <div className=" col-6 text-color">Create book listing</div>
                        <input className="form-control me-2" type="text" value={bookListTitle} placeholder="Enter book listing name" id="booklist" aria-label="Book listing name"
                            onChange={e => setbookListTitle(e.target.value)} />
                        {!updateBooks&&<button className="btn btn-primary me-2" type="submit" >Save</button>}
                        {updateBooks&&<button className="btn btn-primary me-2" type="submit" >Update</button>}
                        <button className="btn btn-outline-primary" type="reset" onReset={resetList} title="Reset"><i className="bi bi-arrow-counterclockwise"></i></button>
                    </form>
                </div>
                <form className="border p-3 rounded mb-3 ">
                    <div className="row">
                        <div className="col-11 row px-0 mx-0">
                            <div className="mb-3 col-6">
                                <label htmlFor="booktitle" className="form-label">Title</label>
                                <input type="text" className="form-control" value={bookTitle} id="booktitle" placeholder="Enter book title" onChange={e => setBookTitle(e.target.value)} />
                            </div>
                            <div className="mb-3 col-6">
                                <label htmlFor="booktitle" className="form-label">Author</label>
                                <input type="text" className="form-control" value={bookAuthor} id="booktitle" placeholder="Enter author" onChange={e => setBookAuthor(e.target.value)} />
                            </div>
                            <div className="mb-3 col-4">
                                <label htmlFor="bookcondition" className="form-label">Genre</label>
                                <select className="form-select" aria-label="Default select example" value={bookGenre} onChange={e => setBookGenre(e.target.value)}>
                                    <option selected>Select genre</option>
                                    <option value="Adventure">Adventure</option>
                                    <option value="Fiction">Fiction</option>
                                    <option value="Comic">Comic</option>
                                    <option value="Novel">Novel</option>
                                    <option value="SciFi">SciFi</option>
                                    <option value="Biography">Biography</option>
                                    <option value="Fantasy">Fantasy</option>
                                    <option value="Dystopia">Dystopia</option>
                                </select>
                            </div>
                            <div className="mb-3 col-4">
                                <label htmlFor="bookcondition" className="form-label">Condition</label>
                                <select className="form-select" aria-label="Default select example" value={bookCondition} onChange={e => setBookCondition(e.target.value)}>
                                    <option selected>Select condition</option>
                                    <option value="New">New</option>
                                    <option value="Good">Good</option>
                                    <option value="Bowed">Bowed</option>
                                    <option value="Edgeworn">Edgeworn</option>
                                    <option value="Ex-Library">Ex-Library</option>
                                </select>
                            </div>
                            <div className="mb-3 col-4">
                                <label htmlFor="bookavailable" className="form-label">Book availabile</label>
                                <select className="form-select" aria-label="Default select example" value={bookAvailable} onChange={e => setBookAvailable(e.target.value)}>
                                    <option selected>Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="mb-3 col-12">
                                <label htmlFor="bookDescription" className="form-label">Book Description</label>
                                <textarea className="form-control" value={bookDescription} id="bookDescription" onChange={e => setBookDescription(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="d-grid gap-2 d-md-block col-1 ps-3 pt-3 ">
                            <button className="btn btn-primary me-2 mb-1 " type="button" onClick={createList} title="Add"><i className="bi bi-plus"></i></button>
                            <button className="btn btn-secondary " type="button" onClick={cancelBook} title="Cancle"><i className="bi bi-x"></i></button>
                        </div>
                    </div>
                </form>
                {
                    <div >
                        <div className=" col-7 text-color">Added books</div>
                        <div className="list-group">
                            {Object.keys(bookList).map((key, idx) => (
                                <div className="col mb-1" key={key}>
                                    <div className="card book-card shadow-sm">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h5 className="card-title mb-0">{bookList[idx].title}</h5>
                                                <button className="btn btn-danger btn-sm" onClick={e => deleteBook(e, idx)}><i className="bi bi-trash3"></i></button>
                                            </div>
                                            <p className="card-text text-muted"><i>by {bookList[idx].author}</i></p>
                                            <p className="card-text text-muted">{bookList[idx].genre}</p>
                                            <p className="card-text">{bookList[idx].description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </div>

        </>
    )
}
