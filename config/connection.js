var mysql = require("mysql");
if(process.env.JAWSDB_URL){
    connection + mysql.createConnection(peocess.env.JAWSDB_URL)
}
else {
connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "0726329614",
    database: "burgers_db"
});
}

connection.connect();

module.exports = connection;