import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from "../../../context/UserContext";


const Register = () => {
  const {signUp}=useContext(AuthContext);
  const [error,setError] = useState('');
  const [success,setSuccess]=useState('');
  const [showPass,setShowPass]=useState(false);
  const navigate = useNavigate();
  const [signupError, setSignupError] = useState('')

    const handleSignUp = e => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const name = form.get('name');
      const email = form.get('email');
      const password = form.get('password');
      console.log(name, email, password);
      
      signUp(email, password)
      .then(result => {
          console.log(result.user);
          setSuccess('User created successfully')
          navigate('/');
      })
      .catch(error => {
          console.error(error);
          setSignupError(error.message)
      })
  

    setError('');
    setSuccess('');
    }


    return (
        <div>
              <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-center">
            <h1 className="text-5xl font-bold"><span>Sign up</span> Now!</h1>
            <p className="py-6">Stay updated on your professional world</p>
          </div>
          <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp}  className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name" name="name" className="input input-bordered  lg:w-80" required />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Your email" className="input input-bordered  lg:w-80" name="email" required />
              </div>
              <div className="form-control relative" >
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
               {/* <div className="relative ">
               <input 
                placeholder="Your password" name="password" className="input input-bordered w-full" required  /> 
               </div> */}
                <div className='relative'>
                  <input 
                 type={showPass ? "text" :  "password"} 
                 
                 placeholder="Your password" name="password" className="input input-bordered w-full" required /> 
                 <span className="absolute bottom-4 right-2" onClick={()=> setShowPass(!showPass)}>

                 {
                   showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                 }
               </span>

                  </div>
                <label className="label">
                  <Link to={'/'} className="label-text-alt link link-hover">Forgot password?</Link> <span className="label-text-alt ">Already Have an accout? Please <Link className="link link-hover" to={'/login'}>Login</Link></span>
                </label>
              </div>
        <div className="form-control mt-6">
          <button className="btn text-white hover:bg-black bg-black ">Sign Up</button>
          </div>
            </form>

            {
              error && <div className="alert alert-error">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span> {error} </span>
            </div>
            }
            {
              success && <div className="alert alert-success">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span> {success} </span>
            </div>
            }
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;