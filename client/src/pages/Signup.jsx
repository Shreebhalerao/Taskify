import signupImg from "../assets/images/signupImg.png"
import Template from './../components/core/auth/Template';

function Signup() {
  return (
    <Template
      title="Empower Your Productivity: Sign Up Now and Conquer Your Tasks!"
      description1="Organize Your Life: Simplify Tasks, Achieve Goals, and "
      description2="Stay Productive with Todo App...!"
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup