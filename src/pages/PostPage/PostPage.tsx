import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import "./PostPage.css"
import { usePostById } from "../../hooks/usePostById";
export function PostPage(){
    const params = useParams();
    const {post, isLoading } = usePostById(Number(params.id))
    return(
        
        <div className="onePost">

            { isLoading === true ? (<div>Loading...</div>) :(

            <>
            {post === undefined ? <h1>error</h1> : (
                <h1>{post.name}</h1>
            )}
  
            </>
        )}


    </div>
    )
}