import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from "react-hook-form"
import { createTask, updateTask } from '../../../services/operations/todoApi';
import { setRefreshPage } from '../../../slices/refreshPage';

// icons
import { FaPlus } from 'react-icons/fa6';
import { RxCross2 } from "react-icons/rx";

const TodoModal = ({ showModal, setShowModal, type, selectedTodo }) => {

    const { user: { token } } = useSelector(state => state.profile)
    const dispatch = useDispatch()
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm()

    dispatch(setRefreshPage(false))

    // If type is 'update' and selectedTodo has data
    useEffect(() => {
        if (type === 'update' && selectedTodo) {
            // Set values of the form fields based on selectedTodo
            setValue('title', selectedTodo.title);
            setValue('description', selectedTodo.description);
            setValue('date', selectedTodo.date);
            setValue('isCompleted', selectedTodo.isCompleted);
            setValue('isImportant', selectedTodo.isImportant);
        }
    }, [showModal, type, selectedTodo, setValue]);



    const onSubmit = async (data) => {

        console.log("Form values are => ", data)

        if (type === 'create') {
            await createTask(token, data);
        } else if (type === 'update') {
            await updateTask(token, selectedTodo._id, data);
        }

        reset()
        setShowModal(false)
        dispatch(setRefreshPage(true))
    };


    return (
        <div id="create-todo-modal"
            className={`modal ${showModal ? 'overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full' : 'hidden'}`}
        >

            <div className="relative p-4 w-full max-w-md max-h-full">
                {/* Modal content  */}
                <div className="relative bg-blackBg rounded-lg shadow">
                    {/* Modal header  */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {type === 'create' && ' Create New Todo'}
                            {type === 'update' && 'Update Todo'}
                        </h3>
                        {/* close modal */}
                        <button type="button" onClick={() => setShowModal(!showModal)}
                            className="text-gray-400 bg-transparent hover:bg-[#303030] hover:text-white rounded-lg 
                                            text-lg w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-toggle="crud-modal"
                        >
                            <RxCross2 />
                        </button>
                    </div>

                    {/* Modal body  */}
                    <form className="p-4 md:p-5" onSubmit={handleSubmit(onSubmit)} >
                        <div className="grid gap-4 mb-4 grid-cols-2">
                            {/* todo title */}
                            <div className="col-span-2">
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-white">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    {...register("title", { required: true })}
                                    placeholder="Type Todo title"
                                    required
                                    className=" border text-sm rounded-lg focus:ring-primary-600
                                                  focus:border-primary-600 block w-full p-2.5 bg-[#303030] border-gray-500 placeholder-gray-400
                                                text-white focus:ring-primary-500 focus:border-primary-500"
                                />
                                {errors.title && (
                                    <span className="ml-2 text-xs tracking-wide text-pink-200">
                                        Todo Title is required
                                    </span>
                                )}
                            </div>

                            {/* todo description */}
                            <div className="col-span-2">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-white">
                                    Todo Description
                                </label>
                                <textarea
                                    id="description"
                                    rows="4"
                                    {...register("description", { required: true })}
                                    required
                                    placeholder="Write Todo description here"
                                    className="block p-2.5 w-full text-sm rounded-lg border bg-[#303030] border-gray-500 placeholder-gray-400
                                          text-white focus:ring-blue-500 focus:border-blue-500"
                                >
                                </textarea>
                                {errors.title && (
                                    <span className="ml-2 text-xs tracking-wide text-pink-200">
                                        Todo Description is required
                                    </span>
                                )}
                            </div>

                            {/* todo date */}
                            <div className="col-span-2">
                                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    {...register("date", { required: true })}
                                    required
                                    className=" border text-sm rounded-lg focus:ring-primary-600
                                                  focus:border-primary-600 block w-full p-2.5 bg-[#303030] border-gray-500 placeholder-gray-400
                                                text-white focus:ring-primary-500 focus:border-primary-500"
                                />
                            </div>

                            {/* todo completed */}
                            <div className="flex items-center justify-between w-full col-span-2">
                                <label htmlFor="isCompleted" className="block mb-2 text-sm font-medium text-white">Todo Completed</label>
                                <input
                                    type="checkbox"
                                    name="isCompleted"
                                    id="isCompleted"
                                    {...register("isCompleted")}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600
                                                  focus:border-primary-600 block p-2.5"
                                />
                            </div>

                            {/* todo important */}
                            <div className="flex items-center justify-between w-full col-span-2">
                                <label htmlFor="isImportant" className="block mb-2 text-sm font-medium text-white">Todo Important</label>
                                <input
                                    type="checkbox"
                                    name="isImportant"
                                    id="isImportant"
                                    {...register("isImportant")}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600
                                                  focus:border-primary-600 block p-2.5"
                                />
                            </div>

                        </div>
                        <button type="submit"
                            className="text-white inline-flex gap-2 items-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                            {type === 'create' &&
                                <>
                                    <FaPlus className="text-lg" />
                                    <span>Add New Todo</span>
                                </>
                            }

                            {type === 'update' && <span>Update Todo</span>}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TodoModal