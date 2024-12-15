import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import "./PostPage.css"
export function PostPage(){
    const params = useParams();
    
    const [post, setPost ] = useState(
        {
        id: 0,
        title: "",
        cover_image: "",
        tags: [],
        body_markdown: ""
        })
    useEffect(()=>{
            async function getPost(){
                try{
                    
                    const response = await fetch('https://dev.to/api/articles/'+params.id)
                    if(response.status === 404){
                        console.log('post not found')
                    }else{
                    const post = await response.json()
                    setPost(post)}
                }
                catch(err){
                    console.log(err)}
                
            }
            getPost()
        },[params.id])
    return(
        <div className="onePost">
      <h1>{post.title}</h1>
      <img src={post.cover_image} alt="Cover" className="postImage" />
      <p>{post.tags}</p>
      <div className="postBody" dangerouslySetInnerHTML={{ __html: post.body_markdown }} />
    </div>
    )
}