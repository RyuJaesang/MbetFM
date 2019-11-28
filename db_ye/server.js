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
    var sql='SELECT * FROM performance WHERE genre_1=? AND genre_2=? AND genre_3=?'
    var params=[first,second,third]
    connection.query(sql, params,function(err, rows, fields) {
        if (err) res.send('err : ' + err)
        if (rows.length > 0 ) {
          console.log('The 결과 is: ', rows[0].performance_genre)

          var sql2='SELECT * FROM exhibition WHERE genre_1=? AND genre_2=? AND genre_3=?'
          var params2=[first,second,third]
          connection.query(sql2, params2,function(err2, rows2, fields2) {
            if (err) {
              res.send('err : ' + err)
              return
            }
            if (rows.length > 0 ) {
              res.send('casual/ workwear/ street'+','+rows[0].performance_genre+','+rows2[0].exhibitions_genre)
            }else{
              res.send('서버에러','결과가','엄서용')
            }
          });
        }else{
          res.send('서버에러','결과가','엄서용')
        }
    });
});
