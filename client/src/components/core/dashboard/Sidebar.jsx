import { logout } from '../../../services/operations/authApi';
import { useSelector, useDispatch } from 'react-redux';
import { sidebarMenu } from '../../../../constants/index';
import { Link, matchPath, useNavigate } from 'react-router-dom';

// icons
import { FaSignOutAlt } from "react-icons/fa";


const Sidebar = ({showSidebar, setShowSidebar}) => {

    const { user } = useSelector(state => state.profile)
    // console.log('user = ', user)
    const { firstName, lastName, image: imageUrl } = user
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // when user click sidebar link then it will hold green color
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    }


    return (
        <div className={`${showSidebar ? 'flex absolute top-0 left-7 z-50': 'hidden' } sm:flex flex-col items-center justify-between bg-[#212121] h-[calc(100%-70px)] min-w-[15rem] mt-[70px] rounded-2xl border-2 py-5 border-[#303030] `}>
            <div className='flex items-center gap-5 text-xl capitalize'>
                <img src={imageUrl} className='w-14 rounded-full ' />
                <p>{firstName} {' '} {lastName}</p>
            </div>

            <div className='flex flex-col gap-2 text-[1.1rem] w-full'>
                {
                    sidebarMenu.map((link) => (
                        <Link
                            key={link.id}
                            to={link.link}
                            className={`${matchRoute(link?.link) ? "bg-[#3a3a3a] text-white" : "text-white/40 hover:bg-[#30303097]"} flex items-center gap-5 px-8 py-2 w-full
                                       duration-300 relative`}
                                       onClick={()=> setShowSidebar(false)}
                        >
                            <span
                                className={`absolute left-0 top-0 h-full w-[0.30rem] rounded-r-3xl bg-green-500 ${matchRoute(link.link) ? "opacity-100" : "opacity-0"}`}>
                            </span>
                            {<link.icon />}
                            <p>{link.title}</p>
                        </Link>
                    ))
                }
            </div>

            {/* log out */}
            <button
                onClick={() => dispatch(logout(navigate))}
                className='flex items-center gap-5 text-[1.1rem] w-full px-8 text-white/60'>
                <FaSignOutAlt />
                <p>Log Out</p>
            </button>
        </div>
    );
}

export default Sidebar