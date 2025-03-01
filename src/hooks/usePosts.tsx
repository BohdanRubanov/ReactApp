import { useEffect, useState } from "react"

// типизацию не поменял в соотвтсветии того что с бэка приходит
export interface IPost{
    id: number,
    title: string,
    description: string,
    social_image: string,
    category: string,
    author: string,
    isLiked: boolean
}

export function usePosts(){
    const [posts, setPosts] = useState<IPost[]>([])
    const [status, setStatus] = useState<number>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        async function getPosts(){
            const response = await fetch('https://dev.to/api/articles/')
            const posts = await response.json()
            setPosts(posts)
            setStatus(response.status)
            setIsLoading(false)
        }
        getPosts()
        
    },[])
    return {posts: posts,
            status: status,
            isLoading: isLoading
    }
}