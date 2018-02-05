const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://vlad:Strogov53@ds225038.mlab.com:25038/todoapp' || 'mongodb://localhost:27017/TodoApp');
module.exports={mongoose};
