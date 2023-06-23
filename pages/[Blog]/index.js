import {MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import React, { Fragment } from 'react';
import Navbar from '../Components/Navbar';
import { useRef ,useState,useEffect} from 'react'
import {useAuth} from '../../context/AuthUserContext'
import Link from 'next/link';
import Swal from 'sweetalert2';
import Image from 'next/image';
// import Swal from 'sweetalert2/dist/sweetalert2.js';

// import 'sweetalert2/src/sweetalert2.scss';



const Blog = (props) => {
const{CommentsOfthePost}=props
  const {user}=useAuth() 
// console.log(user)
// setEmail(user.email)

const addCommentHandler = async (data) => {
      console.log("sending data::"+data)
      const response = await fetch("/api/PostComment", {
          method: "POST", 
          body: JSON.stringify(data),
          headers: {
     "content-Type" : "application/json"
   }
 }) 
  const res = await response.json()
  if(res.Comment.acknowledged===true){
    Swal.fire(
      'Thanks!',
      'You Commented on this post!',
      'success'
    )
  }
  // console.log(res)
}
console.log(process.env.DB_USER)

const BodyRef = useRef()
const submitForm =(e)=>{
e.preventDefault();
const formData={
  PostID:props.BlogData.ID,
  Body:BodyRef.current.value,
  Commentor:user.displayName || user.email ,
  dateTime:new Date()
}
addCommentHandler(formData)
}


const [ClickResult,setClickResult]=useState()

const addLoveHandler = async (data) => {
  // console.log("sending data::"+data)
  // console.log("sending data::"+data)
  const response = await fetch("/api/PostLove", {
      method: "POST", 
      body: JSON.stringify(data),
      headers: {
 "content-Type" : "application/json"
}
  }) 
  const res = await response.json()
  if(res.Comment.acknowledged===true){
    Swal.fire(
      'Thanks!',
      'You clicked the React button!',
      'success'
    )
  }
  // console.log(res)
  setClickResult(res)
}

const [LocalClicked,setLocalClicked]=useState()

const [LocalHistory,setLocalHistory]=useState('')
const [LocalHistoryID,setLocalHistoryID]=useState('')
useEffect(() => {
  let localHistory = localStorage.getItem("ReactBtn");
  let localHistoryID = localStorage.getItem(`ReactBtnID${props.BlogData.ID}`);
  setLocalHistory(localHistory)
  setLocalHistoryID(localHistoryID)  

},[ClickResult])

// console.log(LocalHistory,LocalHistoryID)
// console.log(LocalClicked);




const submitLove =()=>{

   const formData={
    PostID:props.BlogData.ID,
    Clicked:true,
    Reactor:!user ? "Unregistered" : user.email ,
    dateTime:new Date()
    }
    addLoveHandler(formData)
    // console.log(formData)
  localStorage.setItem("ReactBtn", "Clicked");
  localStorage.setItem(`ReactBtnID${props.BlogData.ID}`, `${props.BlogData.ID}`);
}





function myFunction() {
  var copyText = `http://localhost:3000/${props.BlogData.ID}`;


  navigator.clipboard.writeText(copyText);
  
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-center',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Copied the Link successfully to your clipboard'
  })
  navigator.clipboard.writeText(copyText);

}

  console.log(ClickResult)
    return (
        <Fragment className="">
            <Head>
            <title>{props.BlogData.BlogTitle}</title>
        <meta name="description" content="Cathing his words" />
        <link rel="icon" href="https://media-exp1.licdn.com/dms/image/C5622AQE9bpjIJlCmJA/feedshare-shrink_800/0/1658073727879?e=1660780800&v=beta&t=qO9Acbg8SaqRNiI9m8LCJ0lBhXoEZv3iJKL0tRS-UCo" />
            </Head>
            <Navbar/>
            
            <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 ">
	<div className="w-full mx-auto space-y-4 text-center">
		<p className="text-xs font-semibold tracking-wider uppercase">{props.BlogData.HashTags}</p>
		<h1 className="text-4xl font-bold leading-tight md:text-5xl">{props.BlogData.BlogTitle}</h1>
		<p className="text-sm ">Posted
			<a rel="noopener noreferrer" href="#" target="_blank" className="underline">
				{/* <span itemprop="name">Leroy Jenkins</span> */}
			</a>_on_
			<time  dateTime={props.BlogData.dateTime}>{props.BlogData.dateTime}</time>
		</p>
	</div>
	<div className="">
		<p>
{props.BlogData.BlogBody}
</p>
</div>
    <hr/>



{/* Work Field next day */}




    <div className="flex justify-between  sm:block md:hidden">
{
  LocalHistoryID==`${props.BlogData.ID}` && LocalHistory=="Clicked"  ?   <svg  xmlns="http://www.w3.org/2000/svg" className="h-12 w-12  " viewBox="0 0 20 20" fill="currentColor"> 
  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
</svg>
  : <svg onClick={submitLove} xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 hover:text-gray-400" viewBox="0 0 20 20" fill="currentColor"> 
  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
</svg>}
    

<svg onClick={myFunction} xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 hover:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
</svg> 
</div>

{!user &&
<span className="text-center text-xl">Wanna give a feedback about the blog ?<br/> Sign up to leave a <span className="text-black font-bold">COMMENT</span>  </span>
}

<div className="  grid md:flex flex-center gap-3">

{!user ? 
<div>
<div>
<Link href="/Authentication">
<button type="button" className="mb-2 w-full inline-block px-6 py-2.5 bg-black text-white font-semibold md:text-3xl sm:text-3xl leading-normal uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-bg-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">Sign up to subscribe</button>
</Link>
<span className="text-black text-2xl font-semibold text-center">OR</span>
<Link href="/Authentication">
<button type="button" className="w-full inline-block px-6 py-2 border-2 bg-white mt-4 hover:bg-gray-100 text-black font-semibold py-2 px-4 border border-gray-400 rounded shadow leading-normal uppercase  hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
Sign in with existing Account
</button>
</Link>
</div>
</div>
:

 <form onSubmit={submitForm} className="mb-3 w-4/4  md:w-3/4">
    <label htmlFor="exampleFormControlTextarea1" className="form-label inline-block mb-2 text-gray-700"
      >Put a comment for me bellow</label
    >
    <textarea
    ref={BodyRef}
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea1"
      rows="3"
      placeholder="Your message"
    ></textarea>
    
    <button type="submit" className="bg-white mt-4 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Submit
              </button>
  </form>
}

 
  

  <div className="   ">
    {LocalHistoryID==`${props.BlogData.ID}` && LocalHistory=="Clicked"  ?     <svg  xmlns="http://www.w3.org/2000/svg" className="h-12 w-12  hidden md:block" viewBox="0 0 20 20" fill="currentColor"> 
  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
</svg> : <svg onClick={submitLove} xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 hover:text-gray-400 hidden md:block" viewBox="0 0 20 20" fill="currentColor"> 
  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
</svg>}

<svg onClick={myFunction} xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mt-4 hover:text-gray-400 hidden md:block" viewBox="0 0 20 20" fill="currentColor">
  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
</svg> 
</div>
 
</div>








        

	<div className="pt-12 border-t dark:border-gray-700 h-96 overflow-y-scroll		">
  <p className="text-3xl font-bold tracking-widest font-not-italic text-left border-b-2 border-gray-500">Comments</p>


{CommentsOfthePost.length>0?

CommentsOfthePost.map((key)=>
		<div key={key._id} className="flex flex-col space-y-4 md:space-y-0 my-8 md:space-x-6 md:flex-row">
    <img      src={key.photoURL ? key.photoURL : "https://cdn-icons-png.flaticon.com/512/2817/2817796.png"} alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
    <div className="flex flex-col">
      <h4 className="text-lg font-semibold">{key.Commentor}</h4>
      <p className="dark:text-gray-400">{key.Body}</p>
    </div>
  </div>)
  :
  <div className="  flex items-center justify-center 	">
     <h1 className="mt-3 text-black text-2xl">No Comments Has Been Posted to the blog yet!</h1>
     <div className="flex items-center justify-center ">
     <img      className="	 mt-2" src="https://2.bp.blogspot.com/-_OiN6gLXQB4/XR1L8qyFrlI/AAAAAAAMmWg/vh8inPGWtrIqx6G1i6mWnbHXGVGeac1mwCLcBGAs/s1600/AS0005464_18.gif" alt="no comments till now"/>
   </div>

  </div>


}




	</div>
</article>


        {/* </div> */}
        {/* // </div> */}
        </Fragment>
    );
};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const client = await MongoClient.connect("mongodb+srv://ShuvoKoiri:wXZqMJIk8bAGOfu3@cluster0.fafcxig.mongodb.net/?retryWrites=true&w=majority")
  const BlogCollection = client.db("BlogsCollection").collection("PostedBlogs")
  const posts = await BlogCollection.find().toArray()
  client.close();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { Blog: post._id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}


export async function getStaticProps(context) {
  const BlogID=context.params.Blog
// console.log(BlogID)
// console.log(process.env.API_KEY)
// console.log(process.env.DB_USER)


  const client = await MongoClient.connect("mongodb+srv://ShuvoKoiri:wXZqMJIk8bAGOfu3@cluster0.fafcxig.mongodb.net/?retryWrites=true&w=majority")
  const BlogCollection = client.db("BlogsCollection").collection("PostedBlogs")
  const post = await BlogCollection.findOne({_id:ObjectId(BlogID)})

  const LovesCollection = client.db("BlogsCollection").collection("Loves")
  const CheckingReactor = await LovesCollection.find({PostID:BlogID}).toArray()
  const CommentsCollection = client.db("BlogsCollection").collection("Comments")
  const CheckingComments = await  CommentsCollection.find({PostID:BlogID}).toArray()
  client.close();


  // Pass post data to the page via props
  return { props:{
    CommentsOfthePost : CheckingComments.map((qte)=>({
    ID:qte._id.toString(),
    Commentor:qte.Commentor,
    Body:qte.Body,
    dateTime:qte.dateTime
  
  })),
   BlogData :{
    ID:post._id.toString(),
    BlogTitle:post.BlogTitle,
    BlogCategory:post.BlogCategory,
    HashTags:post.HashTags,
    BlogBody:post.BlogBody,
    BlogThumbnail:post.BlogThumbnail,
    ReactorForLove: CheckingReactor.length,
    dateTime:post.dateTime
    // CommentsOfthePost:CheckingComments  
}} 
, revalidate: 60}
}


export default Blog;