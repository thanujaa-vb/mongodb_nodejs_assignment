var http = require('http'); 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/employee_db"; 
MongoClient.connect(url, function(err, client) { 
const db = client.db("employee_db");
if (err) throw err; 
var myquery = { employee_id: 'vb003' }; 
db.collection("employee").remove(myquery, function(err, obj) { 
if (err) throw err; 
console.log( " record(s) deleted"); 
client.close(); 
}); 
});
