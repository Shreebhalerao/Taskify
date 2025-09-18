import { useEffect, useState } from "react"
import { deleteTask, getTaskDetails, updateTask } from "../../../services/operations/todoApi"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
// import TaskItem from "../../common/TaskItem"

import { MdDelete, MdEditDocument } from "react-icons/md";
import TodoModal from "../modal/TodoModal"


// Loading Skeleton
const LoadingSkeleton = () => {
  return (
    <div className="min-h-64 w-full min-w-[400px] flex flex-col justify-between gap-4 rounded-xl bg-[#303030 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] p-3 border-2 border-[#454444] hover:cursor-wait">
      <div className="skeleton rounded-xl w-20 h-5"></div>
      <div className="skeleton rounded-xl w-56 h-5"></div>
      <div className="skeleton w-full rounded-xl h-[150px] "></div>
    </div>
  )
}


const TodoDetails = () => {

  const [taskData, setTaskData] = useState({})
  const [loading, setLoading] = useState(false)
  const { user: { token } } = useSelector(state => state.profile)
  const { todoId } = useParams()
  // console.log("todoId = ", todoId)

  useEffect(() => {
    const getTaskData = async () => {
      setLoading(true)
      const data = await getTaskDetails(token, todoId)
      setTaskData(data)
      setLoading(false)
    }

    getTaskData()
  }, [todoId, token])


  // const { title, description, date, isCompleted, isImportant } = taskData
  const [showModal, setShowModal] = useState(false);

  const handleDeleteTask = async () => {
    await deleteTask(token, todoId)
  }

  // update isCompleted state
  const updateIsCompleted = async () => {
    let updatedData;
    if (taskData.isCompleted) {
      updatedData = { isCompleted: false }
    }
    else {
      updatedData = { isCompleted: true }
    }
    await updateTask(token, todoId, updatedData)
  }


  return (
    <div className='flex mt-[70px] bg-[#212121] rounded-2xl border-2 p-5 border-[#303030]'>
      {/* <TaskItem taskData={taskData} /> */}

      {
        loading ? <LoadingSkeleton />
          : !taskData ? (<p>Todo Not Found</p>) :
            (
              <div className="flex flex-col justify-between p-5 gap-2 h-64 w-[400px] font-semibold rounded-2xl bg-[#303030] border-2 border-[#454444] transition ">
                <div className='flex flex-col gap-2 relative'>
                  {taskData.isImportant && <p className='absolute right-0 top-0 '>📌</p>}
                  {/* title of todo */}
                  <Link to={`/dashboard/todo/${todoId}`} className='hover:underline'>
                    <h3>Title :  {taskData.title}</h3>
                  </Link>
                  <p className="text-white/55">
                    Description : {taskData.description}
                  </p>
                </div>

                <div>
                  <p>Date : {taskData.date}</p>
                  <div className='flex items-center justify-between mt-2'>
                    <button
                      onClick={updateIsCompleted}
                      className={`p-2 px-4 rounded-2xl ${taskData.isCompleted ? 'bg-green-500' : 'bg-red-500'} `}
                    >
                      {taskData.isCompleted ? 'Completed' : 'Incomplete'}
                    </button>

                    <div
                      className={`p-2 px-4 rounded-2xl ${taskData.isImportant ? 'bg-yellow-400 text-black' : ''} `}
                    >
                      {taskData.isImportant ? 'Important' : ''}
                    </div>

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


    </div>
  )
}

export default TodoDetails