const db = require("../utils/database");
const randomStr = require("randomstring");
module.exports = {

    fetchBookList: callBack => {
        const sql = "SELECT * FROM booklisting";
        db.query(sql, [], (err, result) => {
            if (err) return callBack(err);
            return callBack(null, result);
        })
    },

    createBookList(data, callBack) {
        const listingId = randomStr.generate();
        book = data.bookJson;
        userId = data.decode.result.id;

        try {
            const sql = "INSERT INTO booklisting (listingId,bookListTitle,userId,bookList,createdOn) VALUES (?,?,?,?,?)"

            db.query(sql, [listingId, book.bookList, userId, JSON.stringify(book.list), new Date()], (err, result) => {
                if (err) console.log(err);
                else console.log("book list saved");

            })

            const ql = "INSERT INTO books (title,author,description,genre,listingId) VALUES (?,?,?,?,?)"
            book.list.forEach(element => {
                db.query(ql, [element.title, element.author, element.description, element.genre, listingId], (err, result) => {
                    if (err) { console.log(err); }
                    return callBack("books saved");
                })
            });
        } catch (ex) {
            return callBack(ex);
        }

    },
    updateBookList(data, callBack) {
        book = data.bookJson;
        userId = data.decode.result.id;
        const listingId = book.listingId;
        const sql = "UPDATE booklisting (bookListTitle,userId,bookList,createdOn) VALUES (?,?,?,?) WHERE listingId = ?"
        db.query(sql, [book.bookList, userId, JSON.stringify(book.list), newDate(), listingId], (err, result) => {
            if (err) { console.log(err); return callBack(err); }
            console.log("bookLList updated");
        });
        const ql = "INSERT INTO books (title,author,description,genre,listingId) VALUES (?,?,?,?,?)"
        book.list.forEach(element => {
            db.query(ql, [element.title, element.author, element.description, element.genre, listingId], (err, result) => {
                if (err) { console.log(err); return callBack(err); }
                return callBack(null, "book saved");
            })
        });
    }

}