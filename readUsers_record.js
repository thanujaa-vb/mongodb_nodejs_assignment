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
    var query = { first_name: "Thanuja" }; 
db.collection("users").find(query).toArray(function(err, result) { 
if (err) throw err; 
console.log("Finding Record matching first_name=Thanuja");
console.log(result);
var query = {first_name:{$in:["Thanuja","Hello"]}}; 
db.collection("users").find(query).toArray(function(err, result) { 
if (err) throw err; 
console.log("performing in operation");
console.log(result); 
var query = {"$or":[{first_name:"Thanuja"},{last_name:"Hai"}]}; 
db.collection("users").find(query).toArray(function(err, result) { 
if (err) throw err; 
console.log("After performing or operation");
console.log(result); 
client.close(); 
}); 
});
});
});
});
