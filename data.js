var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'raw_playlistDb'
});

connection.connect(function(err){
	if(err) throw err;
	console.log("connected as id: "+connection.threadId);
})

// connection.query("select * from playlist", function(err, res){
// 	if(err) throw err;
// 	console.log(res);
// });

// connection.query("select * from playlist where ?",{artist:'Bing Crosby'}, function(err, res){
// 	if(err) throw err;
// 	console.log(res);
// });

// connection.query("SELECT artist FROM playlist GROUP BY artist",function(err, res){
// 	if(err) throw err;
// 	console.log(res);
// });

connection.query("SELECT * FROM playlist where rank between 10 and 20",function(err, res){
	if(err) throw err;
	console.log(res);
});