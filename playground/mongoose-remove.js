const {ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User}=require('./../server/models/user');

// Todo.findByIdAndRemove('5a78e2c603ac51588aaa8738').then((todo)=>{
//   console.log(todo);
// });

Todo.remove({}).then((result)=>{
  console.log(result);
});
