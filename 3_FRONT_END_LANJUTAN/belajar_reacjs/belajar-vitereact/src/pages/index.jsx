import React, { useState, useEffect } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";
 
/* Suatu Object */
/* const title = "a"
const a ={
    title
} */

function Homepage() {
    /* Suatu Fungsi Untuk Input Cara Ketiga */
    // const [search, setSearch] = useState("");

    /* const changeSearch = (event) => { */
       /* console.log(event.target.value); */
       /*  search = event.target.value; */
       /*  setSearch(event.target.value); */
    // }

    /* Bikin Fungsi Lagi */
    const [posts, setPosts] = useState(postsData);
    const [totalPosts, setTotalPosts] = useState(0);
   

    const onSearchChange = (value) => {
        // console.log(value);
        const filteredPosts = postsData.filter(item => item.title.includes(value));
        setPosts(filteredPosts);
        setTotalPosts(filteredPosts.length);
    };

    // componentDidMount
    // componenDidUpdate
    // componenWillUnmount

    // console.log("render 1");
    
    /* Menjalankan data atau mengambil data */
    useEffect(() => {
    //    console.log('ada post baru');
       
       fetch("https://jsonplaceholder.typicode.com/posts")
       .then(response => response.json())
       .then(json => setExternalPosts(json));

        // setInterval
        // return () => {
        //     // clearInterval
        //     console.log('cleanup');
        // }
    }, []); 
    
    /* useEffect(() => {
        console.log('ada post baru')
    }, [posts]);

    useEffect(() => {
        console.log("render");
    }); */

    return (
        <>
            <h1>Simple Blog</h1>

            {/* Cara Cara Pemanggilan di react JS */}
            {/* Cara Pertama */}
            {/* {
                posts.map((blog) => {
                     return <div>{blog.title}</div>;
                })
            } */}

            {/* Cara Kedua */}
           {/*  {
                posts.map((blog) => (
                <Article title={blog.title} tags={blog.tags} date={blog.date} />     
                ))
            } */}

             {/* Cara Ketiga */}
             {/* <Article title={title} tags={tags} date={date} />     */}

            {/*  posts.map(({title, tags, date}, index) => (
            <Article { ...{title, tags, date}} key={index} />    */}
           
           <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />

            {
                posts.map((props, index) => (
                <Article { ...props} key={index}  />      
                ))
            }

          {/*   <hr/>
            <h2>External Posts</h2> */}
            

        </>
    );
}

export default Homepage;