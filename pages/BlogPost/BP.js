import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import React, { useState ,useRef} from 'react';
import router, {useRouter}  from "next/router";
import { useAuth } from '../../context/AuthUserContext';


const user = {
  name: 'Shuvo Koiri',
  email: '',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'HomePage', href: '/', current: true },
    { name: 'Ideas', href: '#', current: false },
    { name: 'Programming', href: '#', current: false },
    { name: 'Poetry', href: '#', current: false },
    { name: 'Vission', href: '#', current: false },
    { name: 'Life Story', href: '#', current: false },

  ]
const userNavigation = [

  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// const Post={
//   BlogTitle:"",
//   BlogCategory:"",
//   HashTags:"",
//   BlogBody:"",
//   picture:"",
//   dateTime:new Date()
// }

export default function BlogPost(props) {
  const [QouteForm,setQouteForm]=useState(false)
  const [Href,setHref]=useState("")
console.log(props)
 
const changeValue=(e)=>{
 Post[e.target.name]=e.target.value
}
const[clickedCat,setClickedCat]=useState(null)

const [Post,setPost]=useState(
  {
    BlogTitle:"",
    BlogCategory:clickedCat,
    HashTags:"",
    BlogBody:"",
    picture:"",
    dateTime:new Date()
  }
)
const[clicked,setClicked]=useState(false)
const myFunction = (key) =>{
// //console.log(key)
setClicked(key)
setClickedCat(key)
const myElement = document.getElementById("BlogCategory");
myElement.value=key
Post.BlogCategory=key
}

const submitSend=async (e)=>{
  console.log(Post)
  e.preventDefault();
  setPending(true)
  const response  = await fetch('/api/Post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Post),
  })

  const res = await response.json()
  //console.log(res)
  if(res.acknowledged==true){
    setPending(false)
    alert('Posted the Blog Successfully..Refresh the front page to see changes')
  }
}

// //console.log(Post)

const {logout}= useAuth()
const logoutHandler=()=>{
  logout()
  router.push('/')
}

const{admin ,adminAgain}=props

const[pending,setPending]=useState(false)

const addTodoHandler = async (data) => {
  // //console.log("sending data::"+data)
  const response = await fetch("/api/PostQ", {
      method: "POST", 
      body: JSON.stringify(data),
      headers: {
          "content-Type" : "application/json"
      }
  }) 
  const res = await response.json()
  if(res.todo.acknowledged==true){
    setPending(false)
    alert(res.message)
  }
  //console.log(res)
}
//console.log(pending)

 
const headingRef = useRef()
const descriptionRef = useRef()



const formSubmitHandler = (e) => {
    e.preventDefault()
    
    setPending(true)
    const formData = {
        Writer : headingRef.current.value,
        Body: descriptionRef.current.value
    }
    addTodoHandler(formData)
}


  return (
    
    admin===false && adminAgain===false ? 
    
<main className="h-screen w-full flex flex-col justify-center items-center bg-gray-700">
	<h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
	<div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
		Page Not Found
	</div>
	<button className="mt-5">
      <a
        className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
      >
        <span
          className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span  onClick={logoutHandler} className="relative block px-8 py-3 bg-[#1A2238] border border-current">
          <a href="/">Go Home</a>
        </span>
      </a>
    </button>
</main>
    
    :
    <>
    
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* <img
                        // className="h-8 w-8"
                        // src="https://media-exp1.licdn.com/dms/image/C5622AQGP2JKj_haiTA/feedshare-shrink_800/0/1658075570073?e=1660780800&v=beta&t=j_e5cQHbdXdzn2tJ1kz6cIt0bRtaVlbUIG_A3Wipm4s"
                        // alt="Workflow"
                      // /> */}
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={()=>myFunction(item.name)}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            <span   onClick={()=>setQouteForm(false)}>{item.name}</span>
                          </a>
                        ))}

{/* {navigation.map((item) => ( */}
                          <a
                            
                            // href={item.href}
                            className={classNames(

                             'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            // aria-current={item.current ? 'page' : undefined}
                          >
                            <span  onClick={()=>setQouteForm(true)} >Quotes</span>
                          </a>
                        {/* ))} */}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>
                          </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src='https://shuvokoiriofficial.netlify.app/images/shuvo.png'alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    <span onClick={logoutHandler}>sign Out</span>
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>                      ) : (
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
</svg>                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      onClick={()=>myFunction(item.name)}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                      >
                    <span  onClick={()=>setQouteForm(false)} >{item.name}</span>
                    </Disclosure.Button>
                  ))}

<a
                            
                            // href={item.href}
                            className={classNames(

                             'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            // aria-current={item.current ? 'page' : undefined}
                          >
                            <span  onClick={()=>setQouteForm(true)} >Quotes</span>
                          </a>

                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src='https://shuvokoiriofficial.netlify.app/images/shuvo.png' alt="" />
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
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                            </svg>
                        </button>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}

            
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                                    <span onClick={logoutHandler}>sign Out</span>
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="  bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
            <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Blog Post</h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2 border-2 border-gray-300 border-dashed ">
         
         {QouteForm ?   <form onSubmit={formSubmitHandler} className="w-full max-w-sm px-5 py-3">
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Quoter's Name
      </label>
    </div>
    <div className="md:w-2/3">
      <input  ref={headingRef} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" defaultValue="Shuvo Koiri"/>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        Quote Body
      </label>
    </div>
    <div className="py-2  bg-white rounded-t-lg dark:bg-gray-800 md:w-2/3">
{/* <label for="comment" className="sr-only">Your comment</label> */}
<textarea  ref={descriptionRef} rows="6"    style={{fontSize:"14px" , width:"100%"}}  name="" className="px-0 w-full text-sm text-gray-900 bg-white border-2 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required=""></textarea>
</div>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3 flex flex-wrap">
      
      {pending ? 
      <button className="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded flex" type="submit">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 mt-0 animate-spin" viewBox="0 0 20 20" fill="black">
  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
</svg>
        Send it <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2 mt-0 animate-spin" viewBox="0 0 20 20" fill="black">
  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
</svg>

      </button>
      :
      <button className="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded flex" type="submit">
Send it
      </button>
      
}


    </div>
  </div>
</form>

:
   <form action="#" method="POST">
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        HashTags
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          
                        </span>
                        <input
                          type="text"
                          name="HashTags"
                          onBlur={changeValue}
                          id="company-website"
                          defaultValue={''}
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="  #example_Tag"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                     Blog Title 
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="BlogTitle"
                        onBlur={changeValue}
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="you@example.com"
                        defaultValue={''}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                    </p>
                  </div>


                  <div className="w-2/4 md:4/4 ">
                  <input
                          type="text"
                          name="BlogThumbnail"
                          onBlur={changeValue}
                          id="company-website"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none  sm:text-sm border-b-2 border-gray-600"
                          placeholder="  Image URL paste here"
                        />
                    </div>

                  <div className="hidden sm:visible w-4/4">
                  <div className="w-2/4 md:4/4">
                    <label className="block text-sm font-medium text-gray-700">Photo</label>
                    <div className="mt-1 flex items-center">
                      <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
                      </span>
                      <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <input type="file" className="" accept="image/png, image/jpeg"  />

                        Photo
                      </button>
                    </div>
                  </div>

<div className="w-1/4 md:4/4 ">
                     <label htmlFor="Category" className="mt-4 block text-sm font-medium text-gray-700">
                     Blog Category 
                    </label>


<div className="relative inline-flex">
  <svg className="w-4 h-4 absolute top-2 right-4  pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
  
  <select  name="BlogCategory" id="BlogCategory" className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
    <option>{clicked ? clicked : 'Choose a category'}</option>
 

  </select>

</div>


</div>

</div>




<div className="visible md:flex sm:hidden w-4/4">
                  <div className="w-2/4 md:4/4">
                    <label className="block text-sm font-medium text-gray-700">Photo</label>
                    <div className="mt-1 flex items-center">
                      <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
                      </span>
                      <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-15"
                      >      <label for="dropzone-file" className="">
                              Photo
                              <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                      </button>
                    </div>
                  </div>
<div className="w-2/4 md:4/4">
                     <label htmlFor="Category" className="block text-sm font-medium text-gray-700">
                     Blog Category 
                    </label>
<div className="relative inline-flex mt-2">
  <svg className="w-4 h-4 absolute top-2 right-4  pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
  <select  name="BlogCategory" id="BlogCategory" className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
    <option >{clicked? clicked : 'Choose a Category'}</option>
     {/* <option>{}</option> */}
    
    </select>
</div>
</div>

</div>






<form>

  
<div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
<div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
<label for="comment" className="sr-only">Your comment</label>
<textarea id="comment" rows="4"    onBlur={changeValue} name="BlogBody" className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required=""></textarea>
</div>
<div className="flex justify-between items-center py-2 px-3 border-t dark:border-gray-600">


{pending ? 
  <button onClick={submitSend} className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-slate-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-slate-800">
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 mt-0 animate-spin" viewBox="0 0 20 20" fill="black">
  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
</svg>
Post the Blog
 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2 mt-0 animate-spin" viewBox="0 0 20 20" fill="black">
  <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
</svg>
</button>      
      
      :
<button onClick={submitSend} className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-slate-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-slate-800">
Post the Blog
</button>      
}
<div className="flex pl-0 space-x-1 sm:pl-2">

</div>
</div>
</div>
</form>

                
                </div>
                
              </div>
            </form> 




}





         
          
            
          </div>
        </div>
      </div>
          <div>
            </div>
            </div>
      
            
</div>
       
        </main>
      </div>
    </>
  )
}