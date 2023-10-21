import { GoogleAuthProvider,getAuth, signInWithPopup} from 'firebase/auth';
import { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import app from '../firebase.config';
import { AuthContext } from '../../../context/UserContext';
const LogIn = () => {
    const navigate = useNavigate();
    const {signIn}=useContext(AuthContext);
    const auth = getAuth(app)
    const [showPass,setShowPass]=useState(false);
    const [signinError, setSigninError] = useState('')
    const location = useLocation();

    const GoogleProvider = new GoogleAuthProvider();
   
    const googleHandler = ()=>{
        signInWithPopup(auth,GoogleProvider)
        .then(result=>{
            const logIn = result.user;
            console.log(logIn)
            // userContext.setUser(logIn)
            // localStorage.setItem('userData', JSON.stringify(logIn))
            navigate('/');
            return Swal.fire({
              title: 'successfully logged in',
              icon: 'success',
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000
          });
        })
        .catch(error=>{
            console.error(error)
        })
    }

    const handleSignin = e => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
            console.log(email, password);
      signIn(email, password)
      .then(result => {
          console.log(result);
      })
      .then(error => {
          console.log(error);
          setSigninError(error.code)
          navigate(location ?.state ? location.state : '/');;
          return;
      })
      
  };




    return (
        
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-center">
            <h1 className="text-5xl font-bold"><span>login</span> Now!</h1>
            <p className="py-6">Stay updated on your professional world</p>
          </div>
          <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
            <div className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Your email" className="input input-bordered  lg:w-80" name="email" required />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
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
                  <Link to={'/'} className="label-text-alt link link-hover">Forgot password?</Link> <span className="label-text-alt ">New here? Please <Link className="link link-hover" to={'/register'}>Sign UP</Link></span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button  onClick={handleSignin} className="btn text-white  bg-black hover:bg-black " >login</button>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white bg-black hover:bg-black " onClick={googleHandler}>Google login</button>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    );
};

export default LogIn;