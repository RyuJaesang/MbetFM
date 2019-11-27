var express = require('express');
var app = express();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'autoset',
  database : 'app'
});

connection.connect();
var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")


})
app.get('/', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    var first = req.query.first
    var second = req.query.second
    var third = req.query.third
    var sql='SELECT * FROM music WHERE genre_1=? AND genre_2=? AND genre_3=?'
    var params=[first,second,third]
    connection.query(sql, params,function(err, rows, fields) {
        if (err) res.send('err : ' + err)
        if (rows.length > 0 ) console.log('The 결과 is: ', rows[0].id);
    res.send(first+','+second+','+third)
    });
});
