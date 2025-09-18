import { Link } from 'react-router-dom';
import { ourPartners } from '../../constants';

// images
import dashboard from '../../../screenshots/dashboard 1.png'
import taskImg1 from '../../public/images/taskImg1.png'
import taskImg2 from '../../public/images/taskImg2.png'
import taskImg3 from '../../public/images/taskImg4.png'

import taskImg4 from '../../../screenshots/create.png'
import taskImg5 from '../../../screenshots/completed.png'
import taskImg6 from '../../../screenshots/dashboard2.png'
import taskImg7 from '../../../screenshots/doitnow.png'

// icons
import { LuCalendarDays } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscServerProcess, VscTools } from "react-icons/vsc";
import Footer from '../components/common/Footer';

// const Card = ({ icon: Icon, title, color }) => {
//   return (
//     <div className='w-[300px] text-white/90 bg-[#32323286] p-5 rounded-2xl flex flex-col gap-4 hover:-translate-y-3 duration-300'>
//       <Icon className={`p-2 rounded-lg bg-${color} text-5xl`} />
//       <p className='font-semibold'>{title}</p>
//       <p className='text-white/60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, dicta!</p>
//       <p className={`flex items-center gap-3 group text-${color}`}>Learn More <MdKeyboardArrowRight className='group-hover:translate-x-2 duration-200' /></p>
//     </div>
//   );
// }

const home = () => {
  return (
    <div className='mt-[70px] p-5 sm:px-10 h-full 2xl:ml-14 pb-16'>
      <section className='flex flex-col sm:flex-row justify-between gap-10'>
        <div className='flex flex-col gap-5 mt-10 sm:gap-10 '>
          <h1 className='capitalize text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl  text-green-500 font-bold '>
            organize your <br />task more easily <br />with us___ 
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br />Accusamus quam qui voluptas est, dolore voluptatem!
          </p>

          <div className='flex items-center gap-5'>
            <Link to='/signup'>
              <button className='bg-green-950 hover:-translate-y-1 text-green-400 font-semibold px-5 py-3 rounded-xl duration-200'>
                Get Started
              </button>
            </Link>

            <Link to='/signup'>
              <button className='hover:-translate-y-1 text-green-400 font-semibold px-5 py-3 rounded-xl duration-200'>
                How It works?
              </button>
            </Link>
          </div>

        </div>

        {/* right part image */}
        <div className='bg-[#32323286] rounded-2xl flex flex-col items-center justify-center gap-10'>
          <img
            src={taskImg1}
            alt='task'
            className='w-[600px] object-contain'
          />
        </div>
      </section>

      {/* our partners */}
      <section className='flex flex-col items-center gap-7 my-20'>
        <h3 className='text-xl sm:text-2xl'>Our Sponsers & Partners</h3>

        <div className='grid grid-cols-2 sm:grid-cols-5 gap-5 place-items-center w-full '>
          {
            ourPartners.map((logo) => (
              <img
                key={logo.id}
                src={logo.image}
                alt={logo.title}
                className='w-32 object-contain hover:-translate-y-2 select-none duration-200'
              />
            ))
          }
        </div>
      </section>

      {/*  Why You Should Choose US ? */}
      <section className='flex flex-col items-center gap-10 my-'>
        <div className='flex flex-col gap-3 items-center'>
          <h3 className='text-2xl sm:text-4xl text-center font-semibold'>
            Why You Should Choose US ?
          </h3>
          <p className='text-white/50'>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center'>
          {/* <Card icon={LuCalendarDays} title={'Better Planing'} color={'blue-500'} />
          <Card icon={VscServerProcess} title={'Easy Process'} color={'orange-500'} />
          <Card icon={VscTools} title={'Modern Tools'} color={'yellow-500'} /> */}
          <div className='w-[300px] text-white/90 bg-[#32323286] p-5 rounded-2xl flex flex-col gap-4 hover:-translate-y-3 duration-300'>
            <LuCalendarDays className={`p-2 rounded-lg bg-blue-500 text-5xl`} />
            <p className='font-semibold'>Better Planing</p>
            <p className='text-white/60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, dicta!</p>
            <p className={`flex items-center gap-3 group text-blue-500`}>Learn More <MdKeyboardArrowRight className='group-hover:translate-x-2 duration-200' /></p>
          </div>

          <div className='w-[300px] text-white/90 bg-[#32323286] p-5 rounded-2xl flex flex-col gap-4 hover:-translate-y-3 duration-300'>
            <VscServerProcess className={`p-2 rounded-lg bg-orange-500 text-5xl`} />
            <p className='font-semibold'>Easy Process</p>
            <p className='text-white/60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, dicta!</p>
            <p className={`flex items-center gap-3 group text-orange-500`}>Learn More <MdKeyboardArrowRight className='group-hover:translate-x-2 duration-200' /></p>
          </div>

          <div className='w-[300px] text-white/90 bg-[#32323286] p-5 rounded-2xl flex flex-col gap-4 hover:-translate-y-3 duration-300'>
            <VscTools className={`p-2 rounded-lg bg-yellow-500 text-5xl`} />
            <p className='font-semibold'>Modern Tools</p>
            <p className='text-white/60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, dicta!</p>
            <p className={`flex items-center gap-3 group text-yellow-500`}>Learn More <MdKeyboardArrowRight className='group-hover:translate-x-2 duration-200' /></p>
          </div>
        </div>
      </section>

      {/* modern features & benefits */}
      <div className='flex flex-col gap-3 items-center my-20'>
        <h3 className='text-2xl sm:text-4xl text-center font-semibold capitalize'>
          our cool modern features & benefits
        </h3>
        <p className='text-white/50'>Lorem ipsum dolor sit amet.</p>
      </div>


      {/* dashboard image */}
      <section className='flex flex-col items-center justify-center gap-10 '>
        <div className=' bg-[#32323286] p-6 lg:p-20 rounded-lg'>
          <img
            src={dashboard}
            alt='dashboard'
            className='w-[80% flex-center'
          />
        </div>
      </section>


      {/*  Manage your task  */}
      <section className='flex flex-col sm:flex-row justify-between gap-10 my-20'>
        <div className='w-full flex flex-col gap-5 sm:gap-10 '>
          <h1 className='capitalize text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl text-green-500 font-bold '>
            Manage your task very organizely & easily
          </h1>

          <p className='text-sm md:text-lg'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br />Accusamus quam qui voluptas est, dolore voluptatem!
          </p>

          <Link to='/signup'>
            <button className='bg-green-950 hover:-translate-y-1 text-green-400 font-semibold px-5 py-3 rounded-xl duration-200'>
              Get Started For Free
            </button>
          </Link>
        </div>

        {/* right part image */}
        <div className='w-full bg-[#32323286] rounded-2xl flex flex-col items-center justify-center gap-10 '>
          <img
            src={taskImg2}
            alt='task'
            className='w-[600px] object-contain'
          />
        </div>
      </section>


      {/* Projects that work. */}
      <section className='flex flex-col-reverse sm:flex-row justify-between gap-10 my-20'>
        {/* left part image */}
        <div className='w-full bg-[#32323286] rounded-2xl flex flex-col items-center justify-center gap-10 '>
          <img
            src={taskImg3}
            alt='task'
            className='w-[400px] object-contain'
          />
        </div>

        {/* right part */}
        <div className='w-full flex flex-col gap-5 sm:gap-10 '>
          <h1 className='capitalize text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl text-green-500 font-bold '>
            Projects that work.
          </h1>

          <p className='text-sm md:text-lg'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br />Accusamus quam qui voluptas est, dolore voluptatem!
          </p>

          <div className='flex flex-col gap-7'>
            <p><span className='bg-blue-500 p-2 px-4 rounded-lg mr-2'>1</span> Dashboard</p>
            <p><span className='bg-orange-500 p-2 px-4 rounded-lg mr-2'>2</span> Tasks</p>
            <p><span className='bg-yellow-500 p-2 px-4 rounded-lg mr-2'>3</span> Agenda</p>
          </div>

          <Link to='/signup'>
            <button className='bg-green-950 hover:-translate-y-1 text-green-400 font-semibold px-5 py-3 rounded-xl duration-200'>
              Get Started For Free
            </button>
          </Link>
        </div>
      </section>


      {/* Taskify images */}
      <section className='flex flex-col items-center gap-7 my-20'>
        <h3 className='text-xl sm:text-2xl font-bold  '>Enjoy Your Taskify 🏆</h3>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-5 place-items-center'>
          <img
            src={taskImg4}
            className='w-[400px] xl:w-[700px]'
          />
          <img
            src={taskImg6}
            className='w-[400px] xl:w-[700px]'
          />
          <img
            src={taskImg5}
            className='w-[400px] xl:w-[700px]'
          />
          <img
            src={taskImg7}
            className='w-[400px] xl:w-[700px]'
          />

        </div>
      </section>

      {/* get ready */}
      <section className=''>
        <div className='flex flex-col items-center justify-between gap-7 text-center bg-[#32323286] p-5 md:p-10 rounded-3xl'>
          <p className='capitalize font-bold text-base sm:text-3xl'>
            get ready to get more productive and complete tasks easily
          </p>
          <p className='text-sm flex flex-wrap'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim cumque, dignissimos vero possimus et deserunt pariatur fugiat provident numquam ex?</p>
          <Link to='/signup'>
          <button className='capitalize bg-green-500 hover:bg-green-600 py-3 px-6 font-semibold rounded-xl duration-200'>
            get started for free
          </button>
          </Link>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </div>
  )
}

export default home