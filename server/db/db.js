var mysql = require('mysql');
var db = mysql.createConnection({
    host : 'localhost',
    port : 3001,
    user : 'root',
    password: '1234',
    port : 3306,
    database : 'drink'
})

db.connect();

db.query('SELECT * FROM alcol', function(err,rows){
    if(err) throw err;

    console.log("db 연결 성공");
})
module.exports = db;