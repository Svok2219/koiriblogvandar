import Head from 'next/head'
import Image from 'next/image'
import { Fragment , useState} from 'react'


import BlogGrid from './Components/BlogGrid/BlogGrid'
import Navbar from './Components/Navbar'
const MongoClient = require('mongodb').MongoClient;
import Banner from './Banner/index';

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
 

// export async function getServerSideProps({params,req,res,query,preview,previewData,resolvedUrl,locale,locales,defaultLocale}) {

//   const client = await MongoClient.connect("mongodb+srv://ShuvoKoiri:wXZqMJIk8bAGOfu3@cluster0.fafcxig.mongodb.net/?retryWrites=true&w=majority")
  
//     const BlogCollection = client.db("BlogsCollection").collection("PostedBlogs")
//     const BlogArray = await BlogCollection.find().toArray()

//     const QoutesCollection = client.db("BlogsCollection").collection("Qoutes")
//     const QoutesArray= await QoutesCollection.find().toArray()

//   return { props: { 

//     Blog : BlogArray.map((blg)=>({
//     ID:blg._id.toString(),
//     BlogTitle:blg.BlogTitle,
//     BlogCategory:blg.BlogCategory,
//     HashTags:blg.HashTags,
//     BlogBody:blg.BlogBody,
//     BlogThumbnail:blg.BlogThumbnail

//   }))
// ,   Qoutes : QoutesArray.map((qte)=>({
//   ID:qte._id.toString(),
//   writer:qte.Writer,
//   Body:qte.Body

// }))


//   } }
// }


export default function Home(props) {
  // console.log(props)
  const{Qoutes}=props
  let show = Qoutes[Math.floor(Math.random() * Qoutes.length)];
  //  console.log(show,Qoutes)
  return (
    <Fragment >
      <Head>
        <title>Wellcome to my Blog</title>
        <meta name="description" content="Cathing his words" />
        <link rel="icon" href="https://media-exp1.licdn.com/dms/image/C5622AQE9bpjIJlCmJA/feedshare-shrink_800/0/1658073727879?e=1660780800&v=beta&t=qO9Acbg8SaqRNiI9m8LCJ0lBhXoEZv3iJKL0tRS-UCo" />
     
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
      </Head>
 
     <Navbar/>
      <Banner Quote={show}/>
     <BlogGrid  Blogs={props.Blog}/>
    </Fragment>
  )
}


export async function getStaticProps(context){
 

  const client = await MongoClient.connect(`mongodb+srv://ShuvoKoiri:wXZqMJIk8bAGOfu3@cluster0.fafcxig.mongodb.net/?retryWrites=true&w=majority`)
  
    const BlogCollection = client.db("BlogsCollection").collection("PostedBlogs")
    const BlogArray = await BlogCollection.find().toArray()
    const QoutesCollection = client.db("BlogsCollection").collection("Qoutes")
    const QoutesArray= await QoutesCollection.find().toArray()

 
  // const LovesCollection = client.db("BlogsCollection").collection("Loves")
  // const CheckingReactor = await LovesCollection.find({PostID:BlogID}).toArray()
  // const CommentsCollection = client.db("BlogsCollection").collection("Comments")
  // const CheckingComments = await  CommentsCollection.find({PostID:BlogID}).toArray()
    return{

  props:{
    Blog : BlogArray.map((blg)=>({
    ID:blg._id.toString(),
    BlogTitle:blg.BlogTitle,
    BlogCategory:blg.BlogCategory,
    HashTags:blg.HashTags,
    BlogBody:blg.BlogBody,
    BlogThumbnail:blg.BlogThumbnail,
      // SMR:  CommentsCollection.find({PostID:ID}).toArray()
  }))
,   Qoutes : QoutesArray.map((qte)=>({
  ID:qte._id.toString(),
  writer:qte.Writer,
  Body:qte.Body

}))
}
, revalidate: 60}
}

