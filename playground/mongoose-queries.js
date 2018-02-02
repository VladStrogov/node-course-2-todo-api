const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User}=require('./../server/models/user');

// var id = '5a7363c096c8a131580432ee';
//
// if(!ObjectID.idValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id',todo);
// }).catch((e)=>console.log(e));

User.findById('5a728c457b65fd1c244814ab').then((user)=>{
  if(!user){
    return console.log('User not found');
  }
  console.log('User by id',user);
}).catch((e)=>console.log(e));
