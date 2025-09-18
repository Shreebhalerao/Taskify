const Todo = require('../models/todo')
const User = require('../models/user')


// ==================== create Todo ====================
exports.createTodo = async (req, res) => {
    try {
        const { title, description, date, isCompleted, isImportant } = req.body
        // console.log({
        //     title, description, date, isCompleted, isImportant,
        // })
        const userId = req.user.id
        if (!title || !description || !date || !userId) {
            return res.status(401).json({
                success: false,
                message: 'All fields are required..!'
            });
        }

        const newTodo = await Todo.create({
            title, description, date, isCompleted, isImportant, userId, createdAt: Date.now()
        })

        // inserting new todo ID in user data (todos array)
        await User.findByIdAndUpdate(userId, {
            $push: {
                todos: newTodo._id
            }
        })

        // return success message
        res.status(200).json({
            success: true,
            message: 'Todo Created Successfully',
            data: newTodo
        });

    } catch (error) {
        console.log(`Error while creating todo => ${error}`)
    }
}


// ==================== Get All todos ====================
exports.getAllTodos = async (req, res) => {
    try {
        // const { userId } = req.body
        const userId = req.user.id

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: 'User ID required..!'
            });
        }
        const userAllTodos = await Todo.find({ userId }).sort({ createdAt: 'desc' })

        res.status(200).json({
            success: true,
            message: "All user's todos fetched successfully",
            data: userAllTodos
        })

    } catch (error) {
        console.log(`Error while fetching all todos => ${error}`)
    }
}


// ==================== Get Important todos ====================
exports.getImportantTodos = async (req, res) => {
    try {
        const userId = req.user.id

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: 'User ID required..!'
            });
        }
        const userAllTodos = await Todo.find({ userId, isImportant: true }).sort({ createdAt: -1 })

        res.status(200).json({
            success: true,
            message: "All Important todos fetched successfully",
            data: userAllTodos
        })

    } catch (error) {
        console.log(`Error while fetching Important todos => ${error}`)
    }
}


// ==================== Get Complete todos ====================
exports.getCompletedTodos = async (req, res) => {
    try {
        const userId = req.user.id

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: 'User ID required..!'
            });
        }
        const userCompletedTodos = await Todo.find({ userId, isCompleted: true }).sort({ createdAt: -1 })

        res.status(200).json({
            success: true,
            message: "All Completed todos fetched successfully",
            data: userCompletedTodos
        })

    } catch (error) {
        console.log(`Error while fetching Completed todos => ${error}`)
    }
}


// ==================== Get Incomplete todos ====================
exports.getInCompleteTodos = async (req, res) => {
    try {
        const userId = req.user.id

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: 'User ID required..!'
            });
        }
        const userInCompletedTodos = await Todo.find({ userId, isCompleted: false }).sort({ createdAt: -1 })

        res.status(200).json({
            success: true,
            message: "All InComplete todos fetched successfully",
            data: userInCompletedTodos
        })

    } catch (error) {
        console.log(`Error while fetching InComplete todos => ${error}`)
    }
}


// ==================== Update todos ====================
exports.updateTodo = async (req, res) => {
    try {
        const { todoId, ...updates } = req.body;
        // console.log('updates = ', updates.updatedData)
        const updatedData = updates.updatedData
        // Check if todoId is provided
        if (!todoId) {
            return res.status(400).json({
                success: false,
                message: 'Todo ID is required...!'
            });
        }

        // Find the todo by ID
        const todo = await Todo.findById(todoId);

        // If todo is not found, return a 404 response
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: 'Todo not found.'
            });
        }

        // Check if the authenticated user is the owner of the todo
        if (!todo.userId.equals(req.user.id)) {
            return res.status(403).json({
                success: false,
                message: 'You are not authorized to update this todo.'
            });
        }

        // Update each field in the todo with the provided updates
        for (const key in updatedData) {
            if (updatedData.hasOwnProperty(key)) {
                todo[key] = updatedData[key];
            }
        }

        // Update the updatedAt field
        todo.updatedAt = Date.now();

        // Save the updated todo
        const updatedTodo = await todo.save();

        // Send the updated todo in the response
        res.status(200).json({
            success: true,
            message: 'Todo updated successfully.',
            todo: updatedTodo
        });
    } catch (error) {
        console.error('Error while updating todo => ', error);
        res.status(500).json({
            success: false,
            message: 'Error while updating todo',
            error: error.message,
        });
    }
};


// ==================== Delete todos ====================
exports.deleteTodo = async (req, res) => {
    try {
        const { todoId } = req.body;

        // Check if todoId is provided
        if (!todoId) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a todo ID to delete.'
            });
        }

        // Find the todo by ID
        const todo = await Todo.findById(todoId);

        // If todo is not found, return a 404 response
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: 'Todo not found.'
            });
        }

        // Check if the authenticated user is the owner of the todo
        if (!todo.userId.equals(req.user.id)) {
            return res.status(403).json({
                success: false,
                message: 'You are not authorized to delete this todo.'
            });
        }

        // delete todo
        await Todo.findByIdAndDelete(todoId)

        // Send a success response
        res.status(200).json({
            success: true,
            message: 'Todo deleted successfully.'
        });
    } catch (error) {
        console.error('Error while deleting todo => ', error);
        res.status(500).json({
            success: false,
            message: 'Error while deleting todo',
            error: error.message,
        });
    }
};


// ==================== Get todo Details ====================
exports.getTodoDetails = async (req, res) => {
    try {
        const { todoId } = req.body
        const userId = req.user.id

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: 'User ID required..!'
            });
        }

        if (!todoId) {
            return res.status(401).json({
                success: false,
                message: 'Todo ID required..!'
            });
        }
        const todoDetails = await Todo.findById(todoId).where({ userId: userId });

        if (!todoDetails) {
            res.status(404).json({
                success: false,
                message: "Todo NOT found",
            })
        }

        res.status(200).json({
            success: true,
            message: "Todo Details fetched successfully",
            data: todoDetails
        })

    } catch (error) {
        console.log(`Error while fetching todos details => ${error}`)
    }
}