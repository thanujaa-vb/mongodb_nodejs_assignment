var http = require('http'); 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/employee_db"; 
MongoClient.connect(url, function(err, client) { 
const db = client.db("employee_db");
if (err) throw err; 
var query = { employee_name: "shan" }; 
db.collection("employee").find(query).toArray(function(err, result) { 
if (err) throw err; 
console.log(result); 
db.collection("employee").find().toArray(function(err, result) { 
    if (err) throw err; 
    console.log(result); 
client.close(); 
}); 
});
});
