import { useEffect, useState } from 'react';
import { NavbarLinks } from '../../../constants/navbar-links'
import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom'

import logo from '../../../public/images/taskify-logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../services/operations/authApi';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {

  const location = useLocation();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useSelector(state => state.auth)

  // when user click Navbar link then it will hold green color
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  }

  const [lastScollY, setLastScrollY] = useState(0);
  const [showNavBar, setShowNavBar] = useState('top');


  useEffect(() => {
    // control Navbar
    const controlNavbar = () => {
      // console.log('controlNavbar')
      if (window.scrollY > 200) {
        if (window.scrollY > lastScollY) {
          setShowNavBar('hide')
        }
        else setShowNavBar('show')
      }

      else setShowNavBar('top')

      setLastScrollY(window.scrollY);
    }
    window.addEventListener('scroll', controlNavbar);
    controlNavbar()
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    }

  }, [lastScollY])

  return (
    <nav
      className={`${showNavBar} w-full h-[70px] fixed top-0 z-[10] translate-y-0 transition-all bg-[#181818] 
                  px-5 sm:px-10 py-1 flex items-center justify-between gap-10 border-b-2 border-richblack-700 `}
    >
      {/* logo */}
      <Link to='/'>
        <img
          src={logo}
          className='w-20 sm:w-32'
        />
      </Link>

      {/* show only for mobile devices */}
      <div className='sm:hidden'>
        <MobileNavbar />
      </div>

      <ul className='hidden sm:flex justify-between items-center gap-x-5 text-xl  text-white '>
        {
          NavbarLinks.map((link) => (
            <li key={link.title}>
              <Link
                to={link.path}
                className={`${matchRoute(link?.path) ? "bg-green-500 " : "text-richblack-25 hover:text-green-500"} rounded-xl p-2 px-5 duration-300`}>
                {link.title}
              </Link>
            </li>
          ))
        }
      </ul>


      {/* Login / SignUp */}
      <div className='hidden sm:flex gap-x-4 items-center'>
        {
          token === null && (
            <Link to="/login">
              <button className={` px-[12px] py-[8px] text-richblack-100 rounded-md 
                                 ${matchRoute('/login') ? 'border-[2.5px] border-yellow-50 bg-green-500 text-white' : 'border border-richblack-700 bg-richblack-800'} `}
              >
                Log in
              </button>
            </Link>
          )}

        {
          token === null && (
            <Link to="/signup">
              <button className={` px-[12px] py-[8px] text-richblack-100 rounded-md 
                                 ${matchRoute('/signup') ? 'border-[2.5px] border-yellow-50 bg-green-500 text-white' : 'border border-richblack-700 bg-richblack-800'} `}
              >
                Sign Up
              </button>
            </Link>
          )}

        {
          token && (
            <button className={` px-[12px] py-[8px] text-richblack-100 rounded-md border border-richblack-700 bg-richblack-800`}
              onClick={() => {
                dispatch(logout(navigate))

              }}
            >
              Log Out
            </button>
          )
        }
      </div>

    </nav>
  )
}

export default Navbar


