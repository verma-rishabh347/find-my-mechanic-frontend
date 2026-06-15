import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Wrench } from "lucide-react";
import { useState } from 'react';

function SignIn() {
  const navigate = useNavigate();
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [emailError, setEmailError] = useState("");
const [passwordError, setPasswordError] = useState("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

  const onlogin = () => {
  setEmailError("");
  setPasswordError("");

  if (!email) {
    setEmailError("Email is required");
    return;
  }

  if (!emailRegex.test(email)) {
    setEmailError("Invalid email address");
    return;
  }

  if (!password) {
    setPasswordError("Password is required");
    return;
  }

  if (!passwordRegex.test(password)) {
    setPasswordError(
      "Password must contain uppercase, lowercase, number and special character"
    );
    return;
  }

  localStorage.setItem(
    "user",
    JSON.stringify({
      id: 1,
      role: "User",
    })
  );

  navigate("/");
};




  return (
    <div className='text-black w-[450px] text-center border mt-20 rounded-4xl p-10 m-auto '>
      <div className='text-center mt-20 flex justify-center items-center'><Wrench size={50} className="text-blue-900 border rounded-xl bg-slate-200  text-center" /></div>
      <h1 className='text-3xl mt-4 text-center'>Welcome Back</h1>
      <p className='text-center mt-2'>Log in to manage your vehicle service and find<br /> trusted mechanics near you.</p>
      <div className='mt-10 text-start'><label  htmlFor="">Email Address</label> <br />
      <input className='border h-10 rounded-xl w-full' type="text" value={email} onChange={(e)=>setemail(e.target.value)} name="" id="" />
      {emailError && (

  <p className="text-red-500 text-sm mt-1">{emailError}</p>

)}
      </div>
      <div className='mt-4 '><div className='flex justify-between'><label htmlFor="">Password</label> <Link className='text-blue-600' to="/authantication/passwordreset" >Forgot Password?</Link></div>
      <input className='border h-10 rounded-xl w-full'  type="password" value={password} onChange={e=>setpassword(e.target.value)} name="" id="" />
      {passwordError && (
  <p className="text-red-500 text-sm mt-1">{passwordError}</p>
)}
      </div>
   <button onClick={onlogin} className=' mt-7 w-full h-15  text-2xl rounded-xl border bg-blue-900  text-white' >Sign In</button>
      
      
      <p className='mt-4'>Or Sign In With</p>
      <button  className='mt-4 border rounded text-2xl pb-1 pl-5 pr-5'>Google</button><br />
      <div className='mt-10'><span>Already Have an Account? </span><NavLink className='text-blue-900' to="/authantication/signup">SignUp</NavLink></div>
      
    
    </div>
  )
}

export default SignIn