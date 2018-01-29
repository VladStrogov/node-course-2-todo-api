//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
   if(err){
   	return console.log('Unable to connect to MongoDB server');
   }
    console.log('Connected to MongoDB server');

   // db.collection('Todos').find({_id:new ObjectID('5a6d114904b5a8030ce95259')}).toArray().then((docs)=>{
   //    console.log('Todos');
   //    console.log(JSON.stringify(docs,undefined,2));
   // },(err)=>{
   //    console.log('Unable to fetch todos',err);
   // });

   //  db.collection('Todos').find().count().then((count)=>{
   //    console.log(`Todos count: ${count}`);
   //    console.log(JSON.stringify(count,undefined,2));
   // },(err)=>{
   //    console.log('Unable to fetch todos',err);
   // });

    db.collection('Users').find({name:'Luc'}).count().then((count)=>{
      console.log(`Users count: ${count}`);
      console.log(JSON.stringify(count,undefined,2));
   },(err)=>{
      console.log('Unable to fetch Users',err);
   });

   //db.close();
});