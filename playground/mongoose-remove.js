const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove();

// Todo.findOneAndRemove({_id: '5b894e1e70ab15fd5438a3bc'}).then((todo) => {

// });

// Todo.findByIdAndRemove('5b894e1e70ab15fd5438a3bc').then((todo) => {
//     console.log(todo);
// });