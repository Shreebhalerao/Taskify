import { useState } from 'react'
import { MdDelete, MdEditDocument } from "react-icons/md";
import { deleteTask, updateTask } from '../../services/operations/todoApi';
import { useDispatch, useSelector } from 'react-redux';
import TodoModal from '../core/modal/TodoModal';
import { Link } from 'react-router-dom';
import { setRefreshPage } from '../../slices/refreshPage';


const TaskItem = ({ taskData }) => {
    // console.log('taskData = ', taskData)
    const { title, description, date, isCompleted, _id: todoId, isImportant } = taskData
    const { user: { token } } = useSelector(state => state.profile)
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch()
    dispatch(setRefreshPage(false))


    const handleDeleteTask = async () => {
        await deleteTask(token, todoId)
        dispatch(setRefreshPage(true))
    }

    // update isCompleted state
    const updateIsCompleted = async () => {
        let updatedData;
        if (isCompleted) {
            updatedData = { isCompleted: false }
        }
        else {
            updatedData = { isCompleted: true }
        }
        await updateTask(token, todoId, updatedData)
        dispatch(setRefreshPage(true))
    }

    return (
        <div className="flex flex-col justify-between p-5 gap-4 h-64 w-[310px] sm:w-[400px] font-semibold rounded-2xl bg-[#303030] border-2 border-[#454444] transition ">
            <div className='flex flex-col gap-2 relative'>
                {isImportant && <p className='absolute right-0 top-0 '>📌</p>}
                {/* title of todo */}
                <Link to={`/dashboard/todo/${todoId}`} className='hover:underline'>
                    <h3>{title}</h3>
                </Link>
                <p className="text-white/55">
                    {description?.split(' ').slice(0, 15).join(' ')}...
                </p>
            </div>

            <div>
                <p>{date}</p>
                <div className='flex items-center justify-between mt-2'>
                    <button
                        onClick={updateIsCompleted}
                        className={`p-2 px-4 rounded-2xl ${isCompleted ? 'bg-green-500' : 'bg-red-500'} `}
                    >
                        {isCompleted ? 'Completed' : 'Incomplete'}
                    </button>

                    <div className='flex gap-4 text-3xl text-white/75'>
                        <MdDelete onClick={() => handleDeleteTask()} className='cursor-pointer hover:text-red-500 duration-200' />
                        <MdEditDocument onClick={() => setShowModal(true)} className='cursor-pointer hover:text-green-500 duration-200' />
                    </div>
                </div>
            </div>
            <TodoModal showModal={showModal} setShowModal={setShowModal} type={'update'} selectedTodo={taskData} />

        </div>
    )
}

export default TaskItem