var MongoClient = require("mongodb").MongoClient;
 var url = "mongodb://localhost:27017/use_managements";
 MongoClient.connect(url, function (err, client) {
   if (err) throw err;
   var myobj = [
     { first_name:"Hello",last_name:"Hai",email:"hello@gmail.com",company:"vgy" },
     {first_name:"Thanuja",last_name:"Alavala",email:"thanuja@gmail.com"},
   ];
   const db = client.db("use_managements");
   db.collection("users").insertMany(myobj, function (err, res) {
     if (err) throw err;
     console.log("Number of records inserted: " + res.insertedCount);
     client.close();
   });
 });