import { useReducer, useState } from 'react';
import {  NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import api from '../../../data/axios/Axios';



const SignUpRightPart = () => {
  const navigate = useNavigate();
  const handleapi = async ()=>
  {
    try{
      const res= await api.post("/Auth/SignUp",{name: state.name,

  email: state.email,

  phone: state.phone,

  password: state.password,});
      console.log(res.data);
      if (res.data.isSuccesed) {
  localStorage.setItem("email", state.email);
  localStorage.setItem("verifytype", "signup");
  localStorage.setItem("role", "user");
  navigate("/authantication/verifyemail");
}

    }

     catch (err) {

    console.log(err.response?.data);
     }

    



  }
 

  const initialState = {
  name: "",
  email: "",
  password: "",
  phone: "",

  errors: {
    name: "",
    email: "",
    password: "",
    phone: "",
    terms: "",
  },
};
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_FIELD":

  return {

    ...state,

    [action.field]: action.value,

    errors: {

      ...state.errors,

      [action.field]: "",

    },

  };

    case "SET_ERRORS":
      return {
        ...state,
        errors: action.payload,
      };

    case "CLEAR_ERRORS":
      return {
        ...state,
        errors: {
          name: "",
          email: "",
          password: "",
          phone: "",
          terms: "",
        },
      };

    default:
      return state;
  }
}
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const handleSubmit = () => {
  const errors = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/;

  if (!state.name.trim()) {
    errors.name = "Name is required";
  }

  if (!state.email.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(state.email)) {
    errors.email = "Invalid email";
  }
  if (!state.phone.trim()) {
  errors.phone = "Phone number is required";
} else if (!/^\d{10}$/.test(state.phone)) {
  errors.phone = "Enter a valid 10 digit phone number";
}


  if (!state.password.trim()) {
    errors.password = "Password is required";
  } else if (!passwordRegex.test(state.password)) {
    errors.password =
      "8-20 chars, uppercase, lowercase, number & special char required";
  }

  if (!acceptedTerms) {
    errors.terms = "Please accept the Terms of Service and Privacy Policy";
  }

  if (Object.keys(errors).length > 0) {
    dispatch({
      type: "SET_ERRORS",
      payload: errors,
    });
    return;
  }

  dispatch({ type: "CLEAR_ERRORS" });

  handleapi();



};


  return (
   
    <div className='text-black w-[40%] pt-28  pl-10'>
      <h1 className='text-3xl font-bold mb-2'>Create Your Account</h1>
      <p className='italic '>Get started today and experience the best in auto care.</p>
      <div className='flex flex-col w-[70%] mt-10'>

        <label className='mt-4' htmlFor="">Full Name</label>
        <input
  className="border rounded-xl h-10"
  value={state.name}
  onChange={(e) =>
    dispatch({
      type: "CHANGE_FIELD",
      field: "name",
      value: e.target.value,
    })
  }
/>

<p className="text-red-500 text-sm">
  {state.errors.name}
</p>
        <label className='mt-4' htmlFor="">Email Address</label>
        <input
  className="border rounded-xl h-10"
  value={state.email}
  onChange={(e) =>
    dispatch({
      type: "CHANGE_FIELD",
      field: "email",
      value: e.target.value,
    })
  }
/>

<p className="text-red-500 text-sm">
  {state.errors.email}
</p>
        <label className='mt-4' htmlFor="">Phone Number</label>
        <input
  className="border rounded-xl h-10"
  value={state.phone}
  onChange={(e) =>
    dispatch({
      type: "CHANGE_FIELD",
      field: "phone",
      value: e.target.value,
    })
  }
/>

<p className="text-red-500 text-sm">
  {state.errors.phone}
</p>
        <label className='mt-4' htmlFor="">Password</label>
        <input
  className="border rounded-xl h-10"
  type="password"
  value={state.password}
  onChange={(e) =>
    dispatch({
      type: "CHANGE_FIELD",
      field: "password",
      value: e.target.value,
    })
  }
/>

<p className="text-red-500 text-sm">
  {state.errors.password}
</p>
      </div>
      
      <input type="checkbox" name="terms" id="terms" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} />
      <label htmlFor="terms">By signing up, you agree to our Terms of Service and <br /> Privacy Policy.</label>
      <p className="text-red-500 text-sm">{state.errors.terms}</p>
      <br />
      <div><button onClick={handleSubmit} className='w-[70%] mt-5 mb-5 h-10 bg-blue-800 text-white rounded-2xl'  >Create Account</button></div>
       <br />
      <label className='ml-10 text-center'>Or Sign Up With</label>
      <button className='border rounded ml-7 pl-3 pr-3 text-xl pt-1.5 pb-1.5 '>Google</button>

      <div className='mt-10 pl-20'><span>Already have an Account? </span><NavLink
  className="text-blue-800"
  to="/authantication/signin"
  onClick={() => localStorage.setItem("setup", "signup")}
>
  SignIn
</NavLink></div>





     
    </div>

  )
}

export default SignUpRightPart
