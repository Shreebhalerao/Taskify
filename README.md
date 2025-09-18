
<img height="100" src='https://github.com/Aniruddha-Gade/Taskify___MERN-Stack/blob/main/client/public/images/taskify-logo.png' />

# Project Description 📝
The Taskify allows users to manage their tasks effectively with features including login and logout functionality, <br/>
navigation and routing using React Router, displaying todo items fetched from an API endpoint, and <br/>
implementing CRUD operations for todo items with Search functionality.<br/>
<br/> 
Users can create, read, update, and delete todo items
<br/>
Authentication is implemented using JWT tokens, and state management is handled using React hooks.<br/>
Hashed password using Bcrypt library




<hr/>

<h2>Live link 🌍📡 - [ https://taskify-gilt-mu.vercel.app/ ]</h2>

 

<h2>
Backend deployed on Render 📬 : [ https://taskify-ygy4.onrender.com ]
</h2>

<hr/>


## Table of Contents


| Section                 | Description                                  |
|-------------------------|----------------------------------------------|
| [Tech Stack](#tech-stack-)             | 💻🔧 Technologies used in the project         |
| [Features](#features-)             | 💻🔧 Features of the project         |
| [Schema](#schema-)                  | 🗂 Explanation of data schemas used          |
| [React Hooks](#react-hooks-)            | 🎣 Overview of React Hooks utilized          |
| [Acknowledgements](#acknowledgements-)         | ⚛️📚 Overview of React Libraries used        |
| [Screen Preview](#screen-preview-)         | 🖥️ Screen Preview        |





## Tech Stack 💻🔧 


| Logo                 | Technology                                  |
|-------------------------|----------------------------------------------|
| <code title="React.js"><img height="40" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/react%20ogo.png"></code>        |React.Js|
| <code title="React.js"><img height="40" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/nodejs-logo.png"></code>      |Node.Js |
| <code title="Express"><img height="50" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/express%20logo.png"></code>      |ExpressJs |
| <code title="React.js"><img height="55" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/mongodb%20logo.png"></code>      |MongoDB |
| <code title="React.js"><img height="30" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/tailwind%20css%20logo.png"></code>      |Tailwind CSS |
| <code title="React.js"><img height="40" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/css%20logo.png"></code>      |CSS |
| <code title="Redux.js"><img height="35" src="https://github.com/Aniruddha-Gade/Study-Notion-EdTech__MERN-Stack/blob/main/screenshots/Tech%20stack%20logo/redux-logo.png"></code>      |Redux Toolkit|





## Features: 🚀

- **Login and Logout functionality**: 🔑 Users can securely log in and out using their credentials.
- **Navigation and Routing with React Router**: 🛣️ Seamless navigation between different pages of the application using React Router.
- **Todo List displaying items fetched from a mock API endpoint**: 📝 Display a list of todo items retrieved from a mock API endpoint.
- **CRUD Operations for todo items**: ✍️ Perform basic CRUD (Create, Read, Update, Delete) operations on todo items.
- **Authentication and Authorization using JWT tokens**: 🔐 Implement authentication using JWT tokens for secure user access.
- **State management using React hooks**: 🎣 Utilize Redux Toolkit and React hooks for efficient state management within the application.
- **Hash Password with bcrypt**: 🔒 Enhance security by securely hashing user passwords using the bcrypt library.
- **Reusable Todo Modal Component**: 🔄 Implement a reusable component for creating and updating todo items, enhancing code maintainability and reusability.
- **Reusable Todo Display Components**: 🔄 Utilize reusable components to display all todos, including incomplete, completed, and important todos, streamlining the UI and promoting code modularity.
- **Loading Skeleton**: 💀 loading skeletons to enhance user experience while fetching data.
- **State Management with Redux Toolkit**: 🔄 Utilize Redux Toolkit for efficient state management, ensuring scalability and maintainability of the application.
- **Secure Forgot Password Token Generation with Crypto**: 🔒 Utilize the Node.js `crypto` module to generate secure reset password tokens. By leveraging cryptographic algorithms, the tokens generated are highly secure and resistant to tampering or manipulation, enhancing the security of the password reset functionality.
- **Search Functionality** 🔍: Search todo by enter title. 


# Additional Points:
- Utilized **local storage** for storing user info and tokens
- Effective use of Git and GitHub with a clean **commit history**
- Implemented **fetching** for all tasks, incomplete, complete, and important tasks
- Implemented both **protected** and **open route components** for secure navigation
- Delete account , change Password, forgot password functionality
- Utilized **Postman** for thorough **API testing**, ensuring robustness and reliability of backend endpoints.

## Getting Started: 💡

### Prerequisites
- Mern Stack 
- Node.js (version 14 or later)
- MongoDB

### Installation

1. Clone the repository: 🔍 

   ```bash
   git clone https://github.com/Aniruddha-Gade/Taskify___MERN-Stack.git
   ```

2. Navigate to the project directory: 📂

   ```bash
   cd client
   ```

      ```bash
   cd server
   ```

3. Install dependencies: ⚙️

   ```bash
   npm install
   ```

4. Set up environment variables: 🔧

   Create a `.env` file in the root directory of Client and add the following:

   ```plaintext

   VITE_APP_BASE_URL = 

   ```
   
   Create a `.env` file in the root directory of Server and add the following:

   ```plaintext

   PORT=5000

   # Database Url
   DATABASE_URL=

   
   # cloudinary ( file upload )
   CLOUD_NAME = 
   FOLDER_NAME = 
   API_KEY = 
   API_SECRET = 

   # json web token
   JWT_SECRET = 


   # mail
   MAIL_HOST = 
   MAIL_USER =
   MAIL_PASS = 


   ```






5. Run the server & Client: 🚀

   ```bash
   npm run dev
   ```

6. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Contributing: 🤝

Contributions are welcome! 

## License 📝

## React Hooks 🎣
- useState
- useEffect
- useSelector
- useDispatch
- useRef
- useForm
- useLocation
- useParams
  

## Acknowledgements 🙏

- **Tailwind CSS**: 🎨 For fast and responsive UI development.
- **MongoDB**: 📊 For flexible and scalable data storage.


## Screen Preview 💻


# Home Page 🏠 
<img width='100%' src='https://github.com/Aniruddha-Gade/Taskify___MERN-Stack/blob/main/screenshots/home1.png' />
<img width='100%' src='https://github.com/Aniruddha-Gade/Taskify___MERN-Stack/blob/main/screenshots/home2.png' />
<img width='100%' src= 'https://github.com/Shreebhalerao/Taskify/blob/main/screenshots/completed.png' />
<img width='100%' src='https://github.com/Aniruddha-Gade/Taskify___MERN-Stack/blob/main/screenshots/home4.png' />

# Signup Page 📝 
<img width='100%' src='https://github.com/Aniruddha-Gade/Taskify___MERN-Stack/blob/main/screenshots/signup.png' />

# OTP received mail 📝 
 
  
   <img width='30%' src='https://github.com/Aniruddha-Gade/Taskify___MERN-Stack/blob/main/screenshots/otp2.jpg' />
 
 

# Verify OTP 🔐
<img width='100%' src='https://github.com/Aniruddha-Gade/Taskify___MERN-Stack/blob/main/screenshots/verify-otp.png' />


# Login Page 🔑 
<img width='100%' src='https://github.com/Aniruddha-Gade/Taskify___MERN-Stack/blob/main/screenshots/login.png' />

# Forgot Password 
<img width='100%' src='https://github.com/Aniruddha-Gade/Taskify___MERN-Stack/blob/main/screenshots/forgot-pass1.png' />
<img width='100%' src='https://github.com/Aniruddha-Gade/Taskify___MERN-Stack/blob/main/screenshots/forgot-pass2.png' />
 
<img width='100%' src='https://github.com/Aniruddha-Gade/Taskify___MERN-Stack/blob/main/screenshots/forgot-pass3.png' />


# Dashboard Page 📊 ( If not logged in ) 
<img width='100%' src='https://github.com/Aniruddha-Gade/Taskify___MERN-Stack/blob/main/screenshots/dashboard2.png' />

# Dashboard Page 📊 
<img width='100%' src='https://github.com/Shreebhalerao/Taskify/blob/main/screenshots/completed.png' />

# Dashboard Page 📊 ( Responsive screen ) 
<img width='100%' src='https://github.com/Shreebhalerao/Taskify/blob/main/screenshots/doitnow.png' />

# Search Todo 📊 
<img width='100%' src='https://github.com/Shreebhalerao/Taskify/blob/main/screenshots/create%201.png' />
 
 
# Important Tasks 📌
<img width='100%' src='https://github.com/Shreebhalerao/Taskify/blob/main/screenshots/imp.png' />

# Completed Tasks ✅ 
<img width='100%' src='https://github.com/Shreebhalerao/Taskify/blob/main/screenshots/completed.png' />

# Incomplete Tasks ❌ 
<img width='100%' src='https://github.com/Shreebhalerao/Taskify/blob/main/screenshots/doitnow.png' />

# Create Todo 📝 
<img width='100%' src='https://github.com/Aniruddha-Gade/Taskify___MERN-Stack/blob/main/screenshots/create-todo.png' />

# Created Todo Toast 📝 
<img width='100%' src='https://github.com/Shreebhalerao/Taskify/blob/main/screenshots/create.png' />
 

 
# Contact 📧 
<img width='100%' src='https://github.com/Aniruddha-Gade/Taskify___MERN-Stack/blob/main/screenshots/contact.png' />

# About ℹ️ 
<img width='100%' src='https://github.com/Aniruddha-Gade/Taskify___MERN-Stack/blob/main/screenshots/Screenshot%202024-05-02%20235625.png' />

# Footer 🏆
<img width='100%' src='https://github.com/Aniruddha-Gade/Taskify___MERN-Stack/blob/main/screenshots/footer.png' />

# Log Out Toast 🚪 
<img width='100%' src='https://github.com/Aniruddha-Gade/Taskify___MERN-Stack/blob/main/screenshots/logout.png' />




