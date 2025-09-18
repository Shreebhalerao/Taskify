import toast from 'react-hot-toast';
import { apiConnector } from '../apiConnector';
import { endpoints } from '../apis';


const {
    USER_ALL_TASKS,
    DELETE_TASK,
    UPDATE_TASK,
    CREATE_TASK,
    IMPORTANT_TASK,
    COMPLETED_TASK,
    INCOMPLETE_TASK,
    TASK_DETAILS
} = endpoints


// ================ users all tasks ================
export async function allTasks(token) {
    try {
        const response = await apiConnector("POST", USER_ALL_TASKS, null,
            {
                Authorization: `Bearer ${token}`,
            }
        )

        // console.log(`USER'S ALL TASKS ---> `, response.data)

        if (!response.data.success) {
            toast.error(response.data.success);
            throw new Error(response.data.message)
        }

        return response.data.data

    } catch (error) {
        console.log("USER'S ALL TASKS API ERROR --> ", error);
    }
}



// ================ users all tasks ================
export async function importantTasks(token) {
    try {
        const response = await apiConnector("GET", IMPORTANT_TASK, null,
            {
                Authorization: `Bearer ${token}`,
            }
        )

        console.log(`USER'S IMPORTANT TASKS ---> `, response.data)

        if (!response.data.success) {
            toast.error(response.data.success);
            throw new Error(response.data.message)
        }

        return response.data.data

    } catch (error) {
        console.log("USER'S IMPORTANT TASKS API ERROR --> ", error);
    }
}


// ================ users all tasks ================
export async function completedTasks(token) {
    try {
        const response = await apiConnector("GET", COMPLETED_TASK, null,
            {
                Authorization: `Bearer ${token}`,
            }
        )

        console.log(`USER'S COMPLETED TASKS ---> `, response.data)

        if (!response.data.success) {
            toast.error(response.data.success);
            throw new Error(response.data.message)
        }

        return response.data.data

    } catch (error) {
        console.log("USER'S COMPLETED TASKS API ERROR --> ", error);
    }
}


// ================ users all tasks ================
export async function inCompleteTasks(token) {
    try {
        const response = await apiConnector("GET", INCOMPLETE_TASK, null,
            {
                Authorization: `Bearer ${token}`,
            }
        )

        console.log(`USER'S INCOMPLETED TASKS ---> `, response.data)

        if (!response.data.success) {
            toast.error(response.data.success);
            throw new Error(response.data.message)
        }

        return response.data.data

    } catch (error) {
        console.log("USER'S INCOMPLETED TASKS API ERROR --> ", error);
    }
}


// ================ Delete Task ================
export async function deleteTask(token, todoId) {
    const toastId = toast.loading('Deleting Todo...')
    try {
        const response = await apiConnector("DELETE", DELETE_TASK, { todoId },
            {
                Authorization: `Bearer ${token}`,
            }
        )

        console.log(`DELETE TASK ---> `, response.data)

        if (!response.data.success) {
            toast.error(response.data.success);
            throw new Error(response.data.message)
        }

        toast.dismiss(toastId)
        toast.success('Todo Deleted')
        return response.data.data

    } catch (error) {
        console.log("DELETE TASK API ERROR --> ", error);
        toast.dismiss(toastId)
    }
}


// ================ Update Task ================
export async function updateTask(token, todoId, updatedData) {
    const toastId = toast.loading('Updating Todo...')
    try {
        const response = await apiConnector("PUT", UPDATE_TASK, { todoId, updatedData },
            {
                Authorization: `Bearer ${token}`,
            }
        )

        console.log(`UPDATED TASK RESPONSE ---> `, response.data)

        if (!response.data.success) {
            toast.error(response.data.success);
            throw new Error(response.data.message)
        }

        toast.dismiss(toastId)
        toast.success('Todo Updated')
        return response.data.data

    } catch (error) {
        console.log("UPDATE TASK API ERROR --> ", error);
        toast.dismiss(toastId)
    }
}


// ================ Update Task ================
export async function createTask(token, todoData) {

    const toastId = toast.loading('Creating Todo...')
    const { title, description, date, isCompleted, isImportant } = todoData
    try {
        const response = await apiConnector("POST", CREATE_TASK, { title, description, date, isCompleted, isImportant },
            {
                Authorization: `Bearer ${token}`,
            }
        )

        console.log(`CREATED TASK RESPONSE ---> `, response.data)

        if (!response.data.success) {
            toast.error(response.data.success);
            throw new Error(response.data.message)
        }

        toast.dismiss(toastId)
        toast.success('Todo Created')
        return response.data.data

    } catch (error) {
        console.log("CREATE TASK API ERROR --> ", error);
        toast.dismiss(toastId)
    }
}


// ================ users task details ================
export async function getTaskDetails(token, todoId) {
    try {
        const response = await apiConnector("POST", TASK_DETAILS, { todoId },
            {
                Authorization: `Bearer ${token}`,
            }
        )

        console.log(`USER'S TASK DETAILS ---> `, response.data)

        if (!response.data.success) {
            toast.error(response.data.success);
            throw new Error(response.data.message)
        }

        return response.data.data

    } catch (error) {
        console.log("USER'S TASKS DETAILS API ERROR --> ", error);
    }
}