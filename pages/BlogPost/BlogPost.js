import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthUserContext';
import Image from 'next/image';
import Link from 'next/link';

const user = {
  name: 'Shuvo Koiri',
  email: '',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const navigation = [
  { name: 'HomePage', href: '/', current: true },
  { name: 'Ideas', href: '#', current: false },
  { name: 'Programming', href: '#', current: false },
  { name: 'Poetry', href: '#', current: false },
  { name: 'Vission', href: '#', current: false },
  { name: 'Life Story', href: '#', current: false },
];

const userNavigation = [
  { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function BlogPost(props) {
  const [quoteForm, setQuoteForm] = useState(false);
  const [href, setHref] = useState('');
  const [clickedCat, setClickedCat] = useState('');

  const [post, setPost] = useState({
    BlogTitle: '',
    BlogCategory: clickedCat,
    HashTags: '',
    BlogBody: '',
    picture: '',
    dateTime: new Date(),
  });

  const changeValue = (e) => {
    setPost((prevPost) => ({
      ...prevPost,
      [e.target.name]: e.target.value,
    }));
  };

  const [clicked, setClicked] = useState(false);

  const myFunction = (key) => {
    setClicked(key);
    setClickedCat(key);
    const myElement = document.getElementById('BlogCategory');
    myElement.value = key;
    setPost((prevPost) => ({
      ...prevPost,
      BlogCategory: key,
    }));
  };

  const submitSend = async (e) => {
    e.preventDefault();
    setPending(true);
    const response = await fetch('/api/Post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });

    const res = await response.json();
    if (res.acknowledged === true) {
      setPending(false);
      alert('Posted the Blog Successfully..Refresh the front page to see changes');
    }
  };

  const { logout } = useAuth();
  const router = useRouter();

  const logoutHandler = () => {
    logout();
    router.push('/');
  };

  const { admin, adminAgain } = props;

  const [pending, setPending] = useState(false);

  const addTodoHandler = async (data) => {
    const response = await fetch('/api/PostQ', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const res = await response.json();
    if (res.todo.acknowledged === true) {
      setPending(false);
      alert(res.message);
    }
  };

  const headingRef = useRef();
  const { ref, isComponentVisible } = useOnScreen({ threshold: 0.2 });

  const handleDisclosure = () => {
    setQuoteForm(!quoteForm);
  };

  const scrollToRef = () => {
    window.scrollTo({
      top: headingRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className="bg-gray-50">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                  <div className="flex items-center px-2 lg:px-0">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden lg:block lg:ml-10">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="flex items-center ml-4 md:ml-6">
                      <button
                        type="button"
                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        {({ open }) => (
                          <>
                            <div>
                              <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Open user menu</span>
                                <Image className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                              </Menu.Button>
                            </div>
                            <Transition
                              show={open}
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items
                                static
                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                              >
                                {userNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <Link
                                        href={item.href}
                                        className={classNames(
                                          active ? 'bg-gray-100' : '',
                                          'block px-4 py-2 text-sm text-gray-700'
                                        )}
                                      >
                                        {item.name}
                                      </Link>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </>
                        )}
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex items-center lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <svg
                          className="block h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="block h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <Image className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {userNavigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900" ref={headingRef}>
            {props.title}
          </h1>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          </div>
          {/* /End replace */}
        </div>
      </main>

      {admin && (
        <div className="flex justify-center">
          <button
            className="mt-6 w-40 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={scrollToRef}
          >
            Scroll To Top
          </button>
        </div>
      )}
    </div>
  );
}
