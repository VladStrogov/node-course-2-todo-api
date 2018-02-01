var mongoose = require('mongoose');

var Todo =mongoose.model('Todo',{
  text:{
    type:String,
    required:true,
    minLength:1,
    trim:true //cut white spaces in begining and end of a string
  },
  completed:{
    type:Boolean,
    default:false
  },
  completedAt:{
    type:Number,
    default:null
  }
});

module.exports={Todo};
