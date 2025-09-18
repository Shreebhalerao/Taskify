import loginImg from "../assets/images/loginImg.png"
import Template from './../components/core/auth/Template';

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Streamline Your Task Management and"
      description2="Start Organizing Today!"
      image={loginImg}
      formType="login"
    />
  )
}

export default Login