import { useEffect, useState } from "react"
import { ITag } from "./useTags"

export interface IPost{
    id: number,
    name: string,
    author: string,
    date: string,
    comments: [],
    userId: number,
    tagId: number,
    tag: ITag
    isLiked: boolean
}

export function usePosts(){
    const [posts, setPosts] = useState<IPost[]>([])
    const [status, setStatus] = useState<number>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        async function getPosts(){
            try{
                const response = await fetch('http://localhost:8000/posts/')
                const result = await response.json()
                if (result.status === "error"){
                    console.log(result.message)
                    return
                }
                setPosts(result.data)
                setStatus(response.status)
                setIsLoading(false)
            }catch (err) {
                console.log(err)
            }
            
        
            
        }
        getPosts()
        
    },[])
    return {posts: posts,
            status: status,
            isLoading: isLoading
    }
}