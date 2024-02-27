/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React , {useState} from 'react'
import image from '../../assets/6242778.jpeg'
import google from '../../assets/google.svg' 


function RegisterPage() {
   
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex flex-col m-4 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
    
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Welcome back</span>
          <span className="font-light text-gray-400 mb-8">
            Welcom back! Please enter your details
          </span>
          <div className="py-3">
            <span className="mb-2 text-md">First Name</span>
            <input type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="firstname" id="firstname" />
          </div>
          <div className="py-3">
            <span className="mb-2 text-md">Last Name</span>
            <input type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="lastname" id="lastname" />
          </div>
          <div className="py-3">
            <span className="mb-2 text-md">Email</span>
            <input type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email" id="email" />
          </div>
          <div className="py-3">
            <span className="mb-2 text-md">Password</span>
            <input type="password" name="pass" id="pass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" />
          </div>
          <div className="py-3">
            <span className="mb-2 text-md">Confirm Password</span>
            <input type="password" name="conpass" id="conpass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" />
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Remember for 30 days</span>
            </div>
          </div>
          <button
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
            Sign in
          </button>
          <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
            <img src= {google} alt="img" className="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button>
        </div>
       
       
        <div className="relative">
          <img src={image}alt="img" className="w-[600px] h-full hidden rounded-r-2xl md:block object-cover" />
        </div>
      </div>
    </div>

  )
}
export default RegisterPage


