import { Route, Routes, } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Navbar from './components/common/Navbar';
import Signup from './pages/Signup';
import Login from "./pages/Login";
import VerifyEmail from './pages/VerifyEmail';
import OpenRoute from './components/core/auth/OpenRoute';
import ProtectedRoute from "./components/core/auth/ProtectedRoute";
import Important from './components/core/dashboard/Important';
import Completed from "./components/core/dashboard/Completed";
import InComplete from "./components/core/dashboard/InComplete";
import AllTasks from "./components/core/dashboard/AllTasks";
import TodoDetails from "./components/core/dashboard/TodoDetails";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";


function App() {

  return (
    <div className='w-full h-full bg-blackBg text-white overflow-x-hidden'>

      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />


        {/* Open Route - for Only Non Logged-in User */}
        <Route
          path="signup" element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />

        <Route
          path="login" element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="verify-email" element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

        {/* forgot password - send reset link to mail */}
        <Route
          path="forgot-password" element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />

        {/* update password */}
        <Route
          path="forgot-password/:forgotPasswordToken" element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />

        {/* protected route */}
        <Route
          // path='dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path='dashboard' element={<AllTasks />} />
          <Route path='dashboard/important' element={<Important />} />
          <Route path='dashboard/completed' element={<Completed />} />
          <Route path='dashboard/incomplete' element={<InComplete />} />
          <Route path='dashboard/todo/:todoId' element={<TodoDetails />} />

        </Route>

      </Routes>
    </div>
  )
}

export default App