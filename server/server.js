const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

const newUser = new User({
    email: 'paulomenezes.web@gmail.com'
});

newUser.save().then((doc) => {
    console.log('Saved user', doc);
}, err => {
    console.log('Unable to save user', err);
});

// const newTodo = new Todo({
//     text: 'Walk the dog'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, err => {
//     console.log('Unable to save todo', err);
// });