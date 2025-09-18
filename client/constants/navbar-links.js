import { IoHomeSharp } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { RiInformationLine } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa6";


export const NavbarLinks = [
  {
    title: "Home",
    path: "/",
    icon: IoHomeSharp
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon:RxDashboard
  },
  {
    title: "About Us",
    path: "/about",
     icon:RiInformationLine
  },
  {
    title: "Contact Us",
    path: "/contact",
     icon:FaPhoneVolume
  },
];
