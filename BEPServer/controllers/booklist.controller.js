const { fetchBookList,createBookList,updateBookList } = require("../services/booklist.service");
const { response } = require("../models/response");

//GET: list all books
function fetchBooks(req, res) {
    fetchBookList((err, result) => {
        if (err) return res.status(500).json(response(500, "error", "Book listing not fetched"));
        if (!result) return res.status(500).json(response(500, "error", "No records"));
        return res.status(200).json(response(200, "success", "Book listing fetched", result));
    })

}

//POST: create list of books
function save(req,res){
    createBookList(req.body,(err,result)=>{
        if (err) return res.status(500).json(response(500, "error", "Book list not saved"));
        return res.status(200).json(response(200, "success", "Book listing saved", result));
    })
}

//PUT: update book list
function update(req,res){
    updateBookList(req.body,(err,result)=>{
        if (err) return res.status(500).json(response(500, "error", "Book list not saved"));
        return res.status(200).json(response(200, "success", "Book listing saved", result));
    })
}

module.exports = { fetchBooks,save,update }