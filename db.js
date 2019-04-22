'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : '72.249.55.31',
    user     : 'inovaced_idsocia',
    password : '1d50c1al4pp',
    database : 'inovaced_idsocial'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;