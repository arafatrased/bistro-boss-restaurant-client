import loginLottieData from '../../assets/lottie/login.json';
import Lottie from "lottie-react";
import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

function SignIn() {
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef();
  const handleSignIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

  }

  const handleCaptcha = () =>{
    const captcha_value = captchaRef.current.value;
    
    if(validateCaptcha(captcha_value)){
      setDisabled(false)
    }else{
      setDisabled(true)
    }
  }

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <Lottie animationData={loginLottieData}></Lottie>
      </div>
      <div className="p-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Sign In</h1>
        <form onSubmit={handleSignIn} className="w-full">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <LoadCanvasTemplate />
            </label>
            <input ref={captchaRef} type="text" name="captcha" placeholder="Type the captcha above" className="input input-bordered"/>
            <button onClick={()=>handleCaptcha} className="btn btn-outline btn-xs my-4">Verify Captcha to unlock Sign In</button>
          </div>
          <button
            disabled={disabled}
            type="submit"
            className={`${disabled ? 'w-full bg-slate-300 p-2 rounded-md' : 'w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'}`}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
