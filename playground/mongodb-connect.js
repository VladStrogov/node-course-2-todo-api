//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID}=require('mongodb');

// var user ={name:'Luc',age:25};
// var {name}=user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
   if(err){
   	return console.log('Unable to connect to MongoDB server');
   }
    console.log('Connected to MongoDB server');

   // db.collection('Todos').insertOne({
   // 	text:'Somthing todo',
   // 	completed:false

   // },(err,result)=>{
   //    if(err){
   //    	return console.log('Unable to insert todo',err);
   //    }

   //    console.log(JSON.stringify(result.ops,undefined,2));
   // });

   // db.collection('Users').insertOne({
   // 	name:'Luc',
   // 	age:25,
   // 	location:'Chicago'
   // },(err,result)=>{
   // 	if(err){
   // 		return console.log('Unable to insert user',err);
   // 	}
   // 	//console.log(JSON.stringify(result.ops,undefined,2));
   // 	console.log(result.ops[0]._id.getTimestamp());
   // })
   db.close();
});