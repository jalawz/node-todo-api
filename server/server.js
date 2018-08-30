const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

const newTodo = new Todo({
    text: 'Go to sleep',
    completed: false,
    completedAt: 3236236236237
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, err => {
    console.log('Unable to save todo');
});