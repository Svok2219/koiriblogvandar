import React ,{useContext} from 'react';

import { useState } from 'react';
import { useRouter } from 'next/router';
import {  useAuth } from '../../context/AuthUserContext';
import { auth } from '../../lib/firebase';
import { GoogleAuthProvider } from 'firebase/auth';
import Link from 'next/link';
import Image from 'next/image';

// import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const PrivateRoute = () => {
  const { user, login ,Glogin} = useAuth()

  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);

  const { signInWithEmailAndPassword,authUser, loading} = useAuth();

  const handleSignIn =  (e) => {
    e.preventDefault()
//  if(passwordOne==passwordTwo){
    try {
     login(email, passwordOne)
     router.push("/BlogPost")
     
    } catch (err) {
      // console.log(err)
      setError(err)
    }
  // }
  // else{console.log('mile nai')}
    // console.log(data)
  }

  const provider = new GoogleAuthProvider();
  const onGoogleSubmit=  (e) => {
    e.preventDefault()
    
    try {
     Glogin(auth, provider)
     router.push("/BlogPost")
     
    } catch (err) {
      // console.log(err)
      setError(err)
    }

    // console.log(data)
  }

    return (

<div className="min-h-screen flex items-center  justify-center bg-gray-50   " >
    <div className="border-2 ">

    
  <div className="max-w-md w-full h-full space-y-8 px-10 py-10 " >
    <div>
      
    <Link href="/"> <img     width=""  height="" className="mx-auto h-16 w-auto" src="https://media-exp1.licdn.com/dms/image/C5622AQGk-hTJsfKfig/feedshare-shrink_800/0/1658073743016?e=1660780800&v=beta&t=Vdahiwctpfgdl-8wJB_4PCymiNceWCqU9pctrwJ5vFw" alt="Workflow"/></Link>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
      
    </div>
    <htmlForm className="mt-8 space-y-6"   onSubmit={handleSignIn}>
    { error && <alert color="danger">{error}</alert>}
      <div className="rounded-md">

        <div className="mb-2">
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email"  type="email"  
          value={email}
                  onChange={(event) => setEmail(event.target.value)} 
                  autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Your Name"/>
        </div>
        <div className="my-2">
          <label htmlFor="password" className="sr-only">Password</label>
          <input id="password" name="password"  type="password"
            value={passwordOne}
            onChange={(event) => setPasswordOne(event.target.value)}
          autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
        </div>

      </div>
     {/* <b className="text-red-900"></b> :       <br/> */}

 {/* <b className="text-green-500">successfuly Loged in</b>  */}
      <div>

        <button    type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-gray-800 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
        
      {/* <p className="text-gray-800 mt-1 font-extrabold"><span className="text-red-400">Register</span> to subscribe ?</p> */}
      </div>
      <div className="separator my-5 " >
               
                <div className="line bg-gray-400"></div>
                {/* <h2 className="text-gray-900" >OR</h2> */}
                <div className="line bg-gray-400"></div>
     </div>
     <div>
        <button onClick={onGoogleSubmit} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            {/* <svg className="h-5 w-5 text-gray-800 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg> */}
            {/* <i style={{fontWeight:"bolder",fontSize:"20px"}} className="fab fa-google fa-xs text-gray-800  group-hover:text-gray-50"></i> */}


          </span>
          Sign in with GOOGLE
        </button>
      </div>
      <div>
        <button  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            {/* <svg className="h-5 w-5 text-gray-800 group-hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg> */}
            <i style={{fontWeight:"bolder",fontSize:"25px"}} className="fab fa-facebook fa-xs text-gray-800  group-hover:text-gray-50"></i>


          </span>
          Sign in with FaceBook
        </button>
      </div>
      
    </htmlForm>
  </div>
  </div>
</div> 


    );
};

export default PrivateRoute;


// Export useContext Hook.
export function useMenuContext() {
	return useContext(MenuContext);
}