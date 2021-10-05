var http = require('http'); 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/use_managements"; 
MongoClient.connect(url, function(err, client) { 
const db = client.db("use_managements");
if (err) throw err; 
var myquery = { first_name:"Hello" }; 
db.collection("users").deleteOne(myquery, function(err, obj) { 
if (err) throw err; 
console.log("Number of record(s) deleted :"+ obj.deletedCount); 
client.close(); 
}); 
});
