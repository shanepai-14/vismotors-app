import React, { useState ,useRef} from 'react'
import vismotor from '../public/vismotor.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from './utils';
import { useAuth } from './AuthContext'; 
const login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false); 
    const [showToast, setShowToast] = useState(false);  
    const toastRef = useRef(null);
    const { login } = useAuth(); 
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
    console.log(BASE_URL);
        try {
          const response = await axios.post(`${BASE_URL}/login`, {
            email,
            password,
          });
          login(response);
          const userID = response.data.user.id;
        //   localStorage.setItem('authToken', response.data.access_token);
        //   localStorage.setItem('userData', JSON.stringify(response.data.user));
        //   localStorage.setItem('userProfile', JSON.stringify(response.data.profile));
          console.log(response.data);
          
           console.log(userID);

            navigate('/vismotors-app/dashboard');
     
        } catch (err) {
          // Handle login error
          setError('Invalid credentials');
          setIsLoading(false); 
          setShowToast(true);

          // Hide the toast notification after 3 seconds
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
          console.error(err);
        } finally {
            setIsLoading(false); // Set isLoading to false after the login process is completed
          }
      };
    return (
        <div className='text-black bg-white w-screen '>
               <div
        ref={toastRef}
        className={`fixed top-5 left-4 z-50 rounded-lg bg-red-500 px-4 py-3 text-white transition-all duration-300 ${
          showToast ? 'translate-x-10' : 'translate-x-[-120%]'
        }`}
      >
        <p>Invalid credentials. Please try again.</p>
      </div>
            <div className='p-4'>
            <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
          <div className='relative mt-14'>
          <img src={vismotor} alt=""  className='mx-auto w-[60%] md:w-96'/>
           <h1
        className="absolute top-[88%] md:top-[91%] left-1/2 -translate-x-1/2 block -mb-3 text-red-600 font-sans text-4xl md:text-5xl text-center antialiased font-semibold leading-relaxed tracking-normal ">
       VISMOTORS
      </h1>
          </div>
  <form  onSubmit={handleLogin} className="max-w-screen-lg mt-12 mb-2 mx-auto w-80 sm:w-96">
    <div className="flex flex-col gap-6 mb-1">
      <h6
        className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
        Email
      </h6>
      <div className="relative h-11 w-full min-w-[200px]">
        <input placeholder="Email" type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
          className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
        <label
          className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
      </div>
      <h6
        className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
       Password
      </h6>
      <div className="relative h-11 w-full min-w-[200px]">
        <input placeholder="Password"
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
          className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
        <label
          className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
      </div>
    
    
    </div>
    {/* <div className="inline-flex items-center">
      <label className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3" htmlFor="remember">
        <input type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
          id="remember" />
        <span
          className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
            stroke="currentColor" strokeWidth="1">
            <path fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"></path>
          </svg>
        </span>
      </label>
      <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="remember">
        <p className="flex items-center font-sans text-sm antialiased font-normal leading-normal text-gray-700">
          I agree the
          <a href="#" className="font-medium transition-colors hover:text-gray-900">
            &nbsp;Terms and Conditions
          </a>
        </p>
      </label>
    </div> */}
    <button type='submit' className="flex justify-center items-center bg-red-400 mt-6 w-full select-none p-2 rounded-lg font-bold  py-3 px-6 text-center align-middle font-sans text-xs uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
    {isLoading && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>} Login
        </button>
  
  
  </form>
</div>  
<p className="text-gray-500 text-sm text-center">PLEASE LOGIN ACCOUNT TO CONTINUE</p>
        </div>
        </div>
    )
}

export default login