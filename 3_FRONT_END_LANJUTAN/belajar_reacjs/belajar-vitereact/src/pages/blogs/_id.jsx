// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";


function SinglePost () {
   /*  const params = useParams();
    const [post, setPosts] = useState(null); */

   /*  useEffect(() => {
        //    console.log('ada post baru');
           
           fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
           .then(response => response.json())
           .then(json => setPosts(json));
    
            // setInterval
            // return () => {
            //     // clearInterval
            //     console.log('cleanup');
            // }
        }, []); 
        
     */

     /* Data Baru */
     const post = useLoaderData()

        /* Menampilkan Data Lengkap APInya */
        return (
            <>
                {/* ? Harus Dipake Untuk Pengecekan Data */}
                <h2>{post?.title}</h2>
                <div>{post?.body}</div>
            </>
        )
}

export default SinglePost;