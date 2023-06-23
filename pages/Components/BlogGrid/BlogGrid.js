import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogGrid = (props) => {
const{Blogs}=props
//console.log(Blogs)


const myFunctionProgramming =()=>{
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
        
        // const nodeList1 = document.querySelectorAll(".Vision");
        // for (let index = 0; index < nodeList1.length; index++) {
        //   const element = nodeList1[index];
        //   element.style.display = "none";
        //   //console.log(element)
        // }
        // const nodeList2 = document.querySelectorAll(".Poetry");
        // for (let index = 0; index < nodeList2.length; index++) {
        //   const element = nodeList2[index];
        //   element.style.display = "none";
        //   //console.log(element)
        // }
        // const nodeList3 = document.querySelectorAll(" .Programming");
        // for (let index = 0; index < nodeList3.length; index++) {
        //   const element = nodeList3[index];
        //   element.style.display = "none";
        //   //console.log(element)
        // }
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
            
            // const nodeList1 = document.querySelectorAll(".Vision");
            // for (let index = 0; index < nodeList1.length; index++) {
            //   const element = nodeList1[index];
            //   element.style.display = "none";
            //   //console.log(element)
            // }
            // const nodeList2 = document.querySelectorAll(".Poetry");
            // for (let index = 0; index < nodeList2.length; index++) {
            //   const element = nodeList2[index];
            //   element.style.display = "none";
            //   //console.log(element)
            // }
            // const nodeList3 = document.querySelectorAll(" .Programming");
            // for (let index = 0; index < nodeList3.length; index++) {
            //   const element = nodeList3[index];
            //   element.style.display = "none";
            //   //console.log(element)
            // }
            // const nodeList5 = document.querySelectorAll(".Ideas ");
            // for (let index = 0; index < nodeList5.length; index++) {
            //   const element = nodeList5[index];
            //   element.style.display = "block";
            //   //console.log(element)
            // }
            }
    return (
       
       
                <div  className="container md:px-5 px-3  py-5 mx-auto ">

      <nav className="hidden justify-center xl:space-x-24 lg:space-x-18 md:space-x-9   md:flex  lg-flex mt-12">
            <a onClick={myFunctionAll}   className="rounded-full bg-transparent hover:bg-gray-900 text-black font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent ">All</a>
            <a  onClick={myFunctionIdea} className="rounded-full bg-transparent hover:bg-gray-900 text-black font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent ">Ideas</a>
            <a onClick={myFunctionProgramming} className="rounded-full  hover:bg-gray-900 text-black font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent ">Programming</a>
            <a onClick={myFunctionPoetry} className="rounded-full bg-transparent hover:bg-gray-900 text-black font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent ">Poetry</a>
            <a  onClick={myFunctionLifeStory} className="rounded-full bg-transparent hover:bg-gray-900 text-black font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent ">Life Story</a>
            <a  onClick={myFunctionVission} className="rounded-full bg-transparent hover:bg-gray-900 text-black font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent ">Vission</a>
      </nav>


                  <div  className="md:flex flex-wrap grid place-items-center mt-6">

{Blogs.map((blg)=>
                  <div key={blg.ID}  className={ `${blg.BlogCategory} p-4 md:w-1/3`} id="#Programming">

            <div className="  h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="w-full">
                    <div className="w-full flex p-2">
                        <div className="p-2 ">
                          <img     
                            src="https://shuvokoiriofficial.netlify.app/images/shuvo.png" alt="author" 
                            className="w-10 h-10 rounded-full overflow-hidden"/>
                        </div>
                        <div className="pl-2 pt-2 ">
                          <p className="font-bold">Shuvo Koiri</p>
                          <p className="text-xs">{blg.dateTime ? blg.dateTime : ""}</p>
                        </div>
                      </div>
                </div>
                
              
              <img      className="lg:h-48 md:h-36 w-full object-cover object-center" src={blg.BlogThumbnail} alt="blog cover"/>
              
              <div className="p-4">
                <h2 className="tracking-widest text-xs title-font font-bold text-stone-400 mb-1 uppercase ">{blg.BlogCategory
                   }</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3 mt-3">{blg.BlogTitle
                           }</h1>
                <div className="flex items-center flex-wrap ">
                  <Link  href={`/${blg.ID}`} className="  md:mb-2 lg:mb-0 ">
                    <p className="inline-flex items-center text-neutral-800 font-semibold cursor-pointer	hover:text-gray-600">Read Blog
                      <svg className="w-6 h-6 mt-1 text-black " viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </p>
                  </Link>
                  

                  <span className=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 relative">
                  <svg className="w-4 h-4 mr-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>

                <span className="absolute top-1 right-2 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-green-700 rounded-full"></span>
                </span>

                  <span className="relative inline-block ">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>

                <span className="absolute top-0  right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-green-700 rounded-full"></span>
                </span>

                </div>
              </div>
            </div>
          </div>
            
          )}

          













                  </div>
                </div>
          
    );
};

export default BlogGrid;