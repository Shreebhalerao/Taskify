import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { inCompleteTasks } from '../../../services/operations/todoApi'
import Tasks from './Tasks'

const InComplete = () => {

  // get token from store
  const { user: { token } } = useSelector(state => state.profile)
  const { refreshPage } = useSelector(state => state.refreshPage)

  // console.log("token = ", token)
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)

  // Get All Tasks
  useEffect(() => {
    const getAllTasks = async () => {
      setLoading(true)
      const tasks = await inCompleteTasks(token)
      // console.log('InCompleted tasks data = ', tasks)
      setTasks(tasks)
      setLoading(false)
    }
    getAllTasks()
  }, [token, refreshPage])


  return (
    <div className='flex bg-[#212121] min-h-screen min-w-full mt-[70px] rounded-2xl border-2 p-5 border-[#303030]'>
      <Tasks title="InComplete Tasks ❌" originalTasks={tasks} loading={loading} />
    </div>
  )
}

export default InComplete