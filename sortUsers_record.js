var http = require('http'); 
 var MongoClient = require('mongodb').MongoClient; 
 var url = "mongodb://localhost:27017/ use_managements"; 
 MongoClient.connect(url, function(err, client) { 
     const db=client.db("use_managements");
 if (err) throw err; 
 var mysort = { index: -1 }; 
 db.collection("users").find().sort(mysort).toArray(function(err, result) { 
 if (err) throw err; 
 console.log(result); 
 client.close(); 
 }); 
 });
