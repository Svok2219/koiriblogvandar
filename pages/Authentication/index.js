import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from './../../context/AuthUserContext';
import { GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import Link from 'next/link';
import Image from 'next/image';

export default function Example() {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);
  const [ok, setOk] = useState(null);
  const { login, authUser, loading, user, signup, logout, Glogin } = useAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const result = await login(email, passwordTwo);
      setOk(result);
      router.back();
    } catch (err) {
      alert(`${err.message}`);
      setError(err);
      router.reload();
      setOk(false);
    }
  };

  const provider = new GoogleAuthProvider();
  const onGoogleSubmit = async (e) => {
    e.preventDefault();

    try {
      await Glogin(auth, provider);
      console.log(user);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    signup(email, passwordTwo)
      .then((result) => {
        setOk(result);
        router.back();
      })
      .catch((err) => {
        alert(`${err.message}`);
        setError(err);
        setOk(false);
        router.reload();
      });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="border-2">
          <div className="max-w-md w-full h-full space-y-8 px-10 py-10">
            <div>
              <Link href="/">
                <a>
                  <img
                    className="mx-auto h-16 w-auto"
                    src="https://shuvokoiriofficial.netlify.app/images/shuvo.png"
                    alt="Workflow"
                    width={120}
                    height={120}
                  />
                </a>
              </Link>
              <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">
                Subscribe with a made up password only for this website 😀
              </h2>
            </div>
            <form className="mt-8 space-y-6">
              {error && <p className="text-red-500">{error}</p>}
              <div className="rounded-md">
                <div className="">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div className="my-2">
                  <label htmlFor="password" className="sr-only">
                    Retype Password
                  </label>
                  <input
                    id="password"
                    name="retypePassword"
                    type="password"
                    value={passwordTwo}
                    onChange={(event) => setPasswordTwo(event.target.value)}
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={handleSignup}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-gray-800 group-hover:text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Subscribe
                </button>
              </div>
              <div>
                <button
                  onClick={onGoogleSubmit}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3" />
                  Continue with GOOGLE
                </button>
              </div>
              <hr />
              <span className="text-gray-500">
                <small>or</small> simply just log in
              </span>
              <button
                onClick={handleSignIn}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-800 group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Log In
              </button>
              {ok && <p className="text-green-500">Success!</p>}
            </form>
            <p className="text-center text-xs text-gray-500">
              &copy;2023 Shuvo - All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
