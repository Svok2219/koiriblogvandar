/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  
const navigation = [
  { name: 'HomePage', href: '#', current: true },
  { name: 'Ideas', href: '#', current: false ,func:myFunctionIdea,onclick:myFunctionIdea},
  { name: 'Programming', href: '#Programming', current: false ,func:myFunctionProgramming},
  { name: 'Poetry', href: '#Poetry', current: false ,func:myFunctionPoetry},
  { name: 'Vision', href: '#Vision', current: false ,func:myFunctionVission},
  { name: 'Life Story', href: '#LifeStories', current: false , func:myFunctionLifeStory},
]
  const myFunctionProgramming =()=>{
    //console.log("chuzekeliye")
    const nodeList = document.querySelectorAll(".Vision ");
    for (let index = 0; index < nodeList.length; index++) {
      const element = nodeList[index];
      element.style.display = "none";
      //console.log(element)
    }
    
    const nodeList1 = document.querySelectorAll(".Ideas");
    for (let index = 0; index < nodeList1.length; index++) {
      const element = nodeList1[index];
      element.style.display = "none";
      //console.log(element)
    }
    const nodeList2 = document.querySelectorAll(".LifeStories");
    for (let index = 0; index < nodeList2.length; index++) {
      const element = nodeList2[index];
      element.style.display = "none";
      //console.log(element)
    }
    const nodeList3 = document.querySelectorAll(" .Poetry");
    for (let index = 0; index < nodeList3.length; index++) {
      const element = nodeList3[index];
      element.style.display = "none";
      //console.log(element)
    }
    const nodeList5 = document.querySelectorAll(" .Programming");
    for (let index = 0; index < nodeList5.length; index++) {
      const element = nodeList5[index];
      element.style.display = "block";
      //console.log(element)
    }
    }
    
    const myFunctionPoetry =()=>{
      const nodeList = document.querySelectorAll(".Vision ");
      for (let index = 0; index < nodeList.length; index++) {
        const element = nodeList[index];
        element.style.display = "none";
        //console.log(element)
      }
      
      const nodeList1 = document.querySelectorAll(".Ideas");
      for (let index = 0; index < nodeList1.length; index++) {
        const element = nodeList1[index];
        element.style.display = "none";
        //console.log(element)
      }
      const nodeList2 = document.querySelectorAll(".LifeStories");
      for (let index = 0; index < nodeList2.length; index++) {
        const element = nodeList2[index];
        element.style.display = "none";
        //console.log(element)
      }
      const nodeList3 = document.querySelectorAll(" .Programming");
      for (let index = 0; index < nodeList3.length; index++) {
        const element = nodeList3[index];
        element.style.display = "none";
        //console.log(element)
      }
      const nodeList5 = document.querySelectorAll(" .Poetry");
      for (let index = 0; index < nodeList5.length; index++) {
        const element = nodeList5[index];
        element.style.display = "block";
        //console.log(element)
      }
      }
    
      const myFunctionLifeStory =()=>{
        const nodeList = document.querySelectorAll(".Vision ");
        for (let index = 0; index < nodeList.length; index++) {
          const element = nodeList[index];
          element.style.display = "none";
          //console.log(element)
        }
        
        const nodeList1 = document.querySelectorAll(".Ideas");
        for (let index = 0; index < nodeList1.length; index++) {
          const element = nodeList1[index];
          element.style.display = "none";
          //console.log(element)
        }
        const nodeList2 = document.querySelectorAll(".Poetry");
        for (let index = 0; index < nodeList2.length; index++) {
          const element = nodeList2[index];
          element.style.display = "none";
          //console.log(element)
        }
        const nodeList3 = document.querySelectorAll(" .Programming");
        for (let index = 0; index < nodeList3.length; index++) {
          const element = nodeList3[index];
          element.style.display = "none";
          //console.log(element)
        }
        const nodeList5 = document.querySelectorAll(" .LifeStories");
        for (let index = 0; index < nodeList5.length; index++) {
          const element = nodeList5[index];
          element.style.display = "block";
          //console.log(element)
        }
        }
    
        const myFunctionVission =()=>{
          const nodeList = document.querySelectorAll(".LifeStories");
          for (let index = 0; index < nodeList.length; index++) {
            const element = nodeList[index];
            element.style.display = "none";
            //console.log(element)
          }
          
          const nodeList1 = document.querySelectorAll(".Ideas");
          for (let index = 0; index < nodeList1.length; index++) {
            const element = nodeList1[index];
            element.style.display = "none";
            //console.log(element)
          }
          const nodeList2 = document.querySelectorAll(".Poetry");
          for (let index = 0; index < nodeList2.length; index++) {
            const element = nodeList2[index];
            element.style.display = "none";
            //console.log(element)
          }
          const nodeList3 = document.querySelectorAll(" .Programming");
          for (let index = 0; index < nodeList3.length; index++) {
            const element = nodeList3[index];
            element.style.display = "none";
            //console.log(element)
          }
          const nodeList5 = document.querySelectorAll(".Vision ");
          for (let index = 0; index < nodeList5.length; index++) {
            const element = nodeList5[index];
            element.style.display = "block";
            //console.log(element)
          }
          }
      
          const myFunctionIdea =()=>{
            const nodeList = document.querySelectorAll(".LifeStories , .Vision , .Poetry , .Programming");
            for (let index = 0; index < nodeList.length; index++) {
              const element = nodeList[index];
              element.style.display = "none";
              //console.log(element)
            }
            
            
            const nodeList5 = document.querySelectorAll(".Ideas ");
            for (let index = 0; index < nodeList5.length; index++) {
              const element = nodeList5[index];
              element.style.display = "block";
              //console.log(element)
            }
            }
            const myFunctionAll =()=>{
              const nodeList = document.querySelectorAll(".LifeStories , .Vision , .Poetry , .Programming , .Ideas");
              for (let index = 0; index < nodeList.length; index++) {
                const element = nodeList[index];
                element.style.display = "block";
                //console.log(element)
              }
            }
          
  return (
    <Disclosure as="nav" className=" 			shadow		 bg-cover bg-no-repeat	bg-center	 ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                      </svg>  
                         // <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>                    // <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/288297294_172079308600872_4980623889519354914_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFAK6nTRUd_OnPh7iwWvZXdWUKXkry13e9ZQpeSvLXd70_b02BeJM7xPYn60BE-Ul7jzEHsjESrrSBk9VTzP9gu&_nc_ohc=qEmSa-ke3JEAX_qqFIh&_nc_ht=scontent.fdac7-1.fna&oh=00_AT837HamD0nO-w-zRXC-yQR86v5a1iqB_-jx7ApnNEjAzg&oe=62ACF71C"
                    alt="SK"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/288297294_172079308600872_4980623889519354914_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFAK6nTRUd_OnPh7iwWvZXdWUKXkry13e9ZQpeSvLXd70_b02BeJM7xPYn60BE-Ul7jzEHsjESrrSBk9VTzP9gu&_nc_ohc=qEmSa-ke3JEAX_qqFIh&_nc_ht=scontent.fdac7-1.fna&oh=00_AT837HamD0nO-w-zRXC-yQR86v5a1iqB_-jx7ApnNEjAzg&oe=62ACF71C"
                    alt="Koirified"
                  /> */}
                  <Link href="/">
                  <div className="not-italic hover:italic font-extrabold text-2xl	">Shuvo Koiri</div>
                  </Link>
                </div>
             
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                       <Link href="/Authentication">
                    <Menu.Button className=" flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      
                   
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>

                    </Menu.Button>
                    </Link>

                  </div>
               
                </Menu>
              </div>

              
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                 onClick={//console.log(item.name)}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))} */}
                   <Disclosure.Button
                  key='Ideas'
                  as="a"
                  href="/"
                 onClick={myFunctionAll}
                  className={classNames(
                   'bg-gray-900 text-white'  ,
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  // 'text-gray-300 hover:bg-gray-700 hover:text-white',
                >
                  Homepage
                </Disclosure.Button> 
                   <Disclosure.Button
                  key='Ideas'
                  as="a"
                  href="#"
                 onClick={myFunctionIdea}
                  className={classNames(
                   'text-gray-300 hover:bg-gray-700 hover:text-white'  ,
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  
                >
                  Ideas
                </Disclosure.Button>
                <Disclosure.Button
                  key='Programming'
                  as="a"
                  href="#"
                 onClick={myFunctionProgramming}
                  className={classNames(
                   'text-gray-300 hover:bg-gray-700 hover:text-white'  ,
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  
                >
                  Programming
                </Disclosure.Button>
                <Disclosure.Button
                  key='Poetry'
                  as="a"
                  href="#"
                 onClick={myFunctionPoetry}
                  className={classNames(
                   'text-gray-300 hover:bg-gray-700 hover:text-white'  ,
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  
                >
                 Poetry
                </Disclosure.Button>
                <Disclosure.Button
                  key='Vission'
                  as="a"
                  href="#"
                 onClick={myFunctionVission}
                  className={classNames(
                   'text-gray-300 hover:bg-gray-700 hover:text-white'  ,
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  
                >
                 Vision
                </Disclosure.Button>
                <Disclosure.Button
                  key='LifeStories'
                  as="a"
                  href="#"
                 onClick={myFunctionLifeStory}
                  className={classNames(
                   'text-gray-300 hover:bg-gray-700 hover:text-white'  ,
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  
                >
                 Life Stories
                </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
      
    </Disclosure>
  )
}
