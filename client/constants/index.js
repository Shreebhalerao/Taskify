import { FaTasks } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { IoMdDoneAll } from "react-icons/io";
import { MdIncompleteCircle } from "react-icons/md";

// our Partners images
import amazonLogo from '../public/images/amazon-logo.png'
import slackLogo from '../public/images/slack-logo.png'
import metaLogo from '../public/images/meta-logo.png'
import swiggyLogo from '../public/images/swiggy-logo.png'
import dream11Logo from '../public/images/dream11-logo.png'


export const sidebarMenu = [
  {
    id: 1,
    title: "All Tasks",
    icon: IoHomeSharp,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "Important!",
    icon: FaTasks,
    link: "/dashboard/important",
  },
  {
    id: 3,
    title: "Completed!",
    icon: IoMdDoneAll,
    link: "/dashboard/completed",
  },
  {
    id: 4,
    title: "Do It Now",
    icon: MdIncompleteCircle,
    link: "/dashboard/incomplete",
  },
];



export const ourPartners = [
  {
    id: 1,
    title:'amazon',
    image: amazonLogo,
  },
  {
    id: 2,
    title:'slack',
    image: slackLogo,
  },
  {
    id: 3,
    title:'meta',
    image: metaLogo,
  },
  {
    id: 4,
    title:'swiggy',
    image: swiggyLogo,
  },
  {
    id: 5,
    title:'swiggy',
    image: dream11Logo,
  },
]
