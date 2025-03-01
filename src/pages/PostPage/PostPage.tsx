import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import "./PostPage.css"
import { usePostById } from "../../hooks/usePostById";
export function PostPage(){
    const params = useParams();
    const {post, isLoading } = usePostById(Number(params.id))
    const [post_data, setPost ] = useState(
        {
        id: 0,
        title: "",
        cover_image: "",
        tags: [],
        body_markdown: ""
        })
    // должно быть вынесено в хук
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

            { isLoading === true ? (<div>Loading...</div>) :(

            <>
            <h1>{post_data.title}</h1>
            <img src={post_data.cover_image} alt="Cover" className="postImage" />
            <p>{post_data.tags}</p>
            <div className="postBody" dangerouslySetInnerHTML={{ __html: post_data.body_markdown }} />
            
            </>
        )}


    </div>
    )
}