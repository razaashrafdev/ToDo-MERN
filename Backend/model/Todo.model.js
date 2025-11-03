import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    todo:String
},{timestamps:true})

const Todo = mongoose.model('Todo',todoSchema)
    
export default Todo