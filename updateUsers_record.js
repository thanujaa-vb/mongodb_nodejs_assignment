var MongoClient = require("mongodb").MongoClient;
 var url = "mongodb://localhost:27017/use_managements";
 MongoClient.connect(url, function (err, client) {
   if (err) throw err;
   const db = client.db("use_managements");
   db.collection("users").updateMany({first_name:"Hello"},{$set:{first_name:"Jhon"}}, function (err, res) {
     if (err) throw err;
     console.log(" records updated");
     client.close();
   });
 });