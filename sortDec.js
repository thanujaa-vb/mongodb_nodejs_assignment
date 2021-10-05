var http = require('http'); 
 var MongoClient = require('mongodb').MongoClient; 
 var url = "mongodb://localhost:27017/ employee_db"; 
 MongoClient.connect(url, function(err, client) { 
     const db=client.db("employee_db");
 if (err) throw err; 
 var mysort = { employee_id: -1 }; 
 db.collection("employee").find().sort(mysort).toArray(function(err, result) { 
 if (err) throw err; 
 console.log(result); 
 client.close(); 
 }); 
 });
