var http = require('http'); 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/use_managements"; 
MongoClient.connect(url, function(err, client) { 
const db = client.db("use_managements");
if (err) throw err; 
db.collection("users").find().toArray(function(err, result) { 
    if (err) throw err; 
    console.log("All user Records");
    console.log(result); 
   // var query =  {$sample:{size:1} }; 
db.collection("users").find(query).toArray(function(err, result) { 
if (err) throw err; 
console.log("Random record");
console.log(result);
client.close(); 
}); 
});
});