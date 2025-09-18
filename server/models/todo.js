const mongoose = require('mongoose')


const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true,
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    isCompleted: {
        type: Boolean,
        default:false,
        required: true,
    },
    isImportant: {
        type: Boolean,
        default:false,
        required: true,
    },
    imageUrl: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

});


const Todo = mongoose.models?.Todo || mongoose.model('Todo', TodoSchema)

module.exports = Todo;