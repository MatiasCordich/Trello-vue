const mongoose = require('mongoose')

const subtaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
    
})

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    subtasks: [subtaskSchema],
    creationDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Task', taskSchema)