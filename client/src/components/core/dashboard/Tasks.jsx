import { useEffect, useState } from 'react'
import TaskItem from '../../common/TaskItem'

// icons
import { FaPlus } from "react-icons/fa6";
import TodoModal from '../modal/TodoModal';
import { TbSearch } from "react-icons/tb";


// Loading Skeleton
const LoadingSkeleton = () => {
  return (
    <div className="min-h-64 w-[310px] sm:w-[400px]  flex flex-col justify-between gap-4 rounded-xl bg-[#303030 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] p-3 border-2 border-[#454444] hover:cursor-wait">
      <div className="skeleton rounded-xl w-20 h-5"></div>
      <div className="skeleton rounded-xl w-56 h-5"></div>
      <div className="skeleton w-full rounded-xl h-[150px] "></div>
    </div>
  )
}


const Tasks = ({ title, originalTasks, loading, }) => {

  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState(originalTasks)


  useEffect(() => {
    setTasks(originalTasks)
  }, [originalTasks])

  // handle search query
  const handleSearch = (e) => {
    const query = e.target.value

    if (query.trim() === '') {
      console.log("empty")
      setTasks(originalTasks);
    } else {
      console.log("else query is = ", query)
      const filteredList = originalTasks.filter((task) =>
        task.title.toLowerCase().includes(query.toLowerCase())
      );
      setTasks(filteredList);
    }
  };


  return (
    <div className='w-screen'>
      <div className='flex-between flex-col sm:flex-row gap-3 w-full'>
        <h3 className='text-2xl font-bold'>
          {title}
        </h3>

        <div className='flex-center  gap-5 '>
          {/* seacrh button */}
          <div className='bg-[#303030] w-full sm:w-[300px] lg:w-[600px] 2xl:w-[900px] h-10 flex-center px-5 gap-3 rounded-3xl'>
            <TbSearch className='text-xl' />
            <input
              type='text'
              className='bg-transparent w-full h-full outline-none  '
              onChange={(e) => handleSearch(e)}
            />
          </div>

          <button onClick={() => setShowModal(!showModal)} className='text-xl w-12 h-12 flex-center rounded-full border-2 border-[#303030]'>
            <FaPlus />
          </button>
        </div>
      </div>

      {/* tasks list */}
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 place-items-center w-full gap-4 mt-5'>
        {
          loading ? (
            <>
              <div className=''>
                <LoadingSkeleton />
              </div>
              <div className=''>
                <LoadingSkeleton />
              </div>
              <div className='hidden md:flex'>
                <LoadingSkeleton />
              </div>
            </>
          ) : !tasks || tasks?.length === 0 ? (
            <div className='flex items-center justify-center p-5 h-64 w-[310px] sm:w-[400px] font-semibold rounded-2xl text-red-500 bg-[#303030] border-2 border-[#454444] transition'>
              No Tasks Available 🚫
            </div>
          ) : (
            tasks.map((task) => (
              <TaskItem key={task.id} taskData={{ ...task }} />
            ))
          )
        }


        <button
          onClick={() => setShowModal(!showModal)}
          className="flex items-center justify-center gap-2 h-64 w-[310px] sm:w-[400px]  text-green-500 font-semibold rounded-2xl border-4 border-[#303030] border-dotted transition "
        >
          <FaPlus className='text-2xl' />
          Add New Task
        </button>
      </div>

      <TodoModal showModal={showModal} setShowModal={setShowModal} type={'create'} />
    </div>
  )
}

export default Tasks