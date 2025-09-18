import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { Link, matchPath, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../services/operations/authApi';
import { NavbarLinks } from '../../../constants/navbar-links';

// icons
import { RiMenu3Fill } from "react-icons/ri";
import { FaSignOutAlt } from 'react-icons/fa';
import { MdLogin } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";


const MobileNavbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { token } = useSelector(state => state.auth)

    // when user click Navbar link then it will hold green color
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    }

    return (
        <>
            <button ref={btnRef} onClick={onOpen} >
                <RiMenu3Fill />
            </button>


            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                style={'color:white'}
            >
                <DrawerOverlay />
                <DrawerContent style={{ background: '#181818', color: 'white' }}>
                    <DrawerCloseButton />

                    <DrawerHeader style={{ marginTop: '20px' }}></DrawerHeader>

                    <DrawerBody>
                        {/* navbar links */}
                        <div className='flex flex-col gap-7  '>
                            {
                                NavbarLinks.map((link) => (
                                    <Link
                                        key={link.title}
                                        to={link.path}
                                        onClick={onClose}
                                        className={`${matchRoute(link?.path) ? "bg-green-500 text-white" : "text-white/60 hover:text-green-500"} 
                                             rounded-xl p-2 px-5 duration-300 flex items-center gap-5 font-semibold text-[1rem]`}
                                    >
                                        {<link.icon />}
                                        {link.title}
                                    </Link>
                                ))
                            }

                            {/* Login / SignUp / logout */}
                            <div className='flex gap-x-4 items-center'>
                                {
                                    token === null && (
                                        <Link to="/login" onClick={onClose}>
                                            <button className={`flex items-center gap-5 p-2 px-5 text-richblack-100 rounded-md 
                                                              ${matchRoute('/login') ? 'bg-green-500 text-white' : 'text-white/70 hover:text-green-500'} `}
                                            >
                                                <MdLogin />
                                                Log in
                                            </button>
                                        </Link>
                                    )}

                                {
                                    token === null && (
                                        <Link to="/signup" onClick={onClose}>
                                            <button className={`flex items-center gap-5 p-2 px-5 text-richblack-100 rounded-md 
                                                              ${matchRoute('/signup') ? 'bg-green-500 text-white' : 'text-white/70 hover:text-green-500'} `}
                                            >
                                                <SiGnuprivacyguard />
                                                Sign Up
                                            </button>
                                        </Link>
                                    )}

                                {
                                    token && (
                                        <button className='flex items-center gap-5 text-[1rem] w-full rounded-xl p-2 px-5 text-white/60 font-semibold'
                                            onClick={() => { dispatch(logout(navigate)); onClose() }}
                                        >
                                            <FaSignOutAlt />
                                            Log Out
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </DrawerBody>


                    {/* <DrawerFooter></DrawerFooter> */}
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MobileNavbar