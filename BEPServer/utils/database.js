const {createPool} = require("mysql2");

const mysqlConnection = createPool({
    host: "localhost",
    port:3306,
    user: "your user name",
    password: "your password",
    database: "bookexchangeplatform",
    connectionLimit:10000,
    multipleStatements: true
})

module.exports = mysqlConnection;