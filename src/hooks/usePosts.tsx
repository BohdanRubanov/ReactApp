import { useEffect, useState } from "react"

export interface IPost{
    id: number,
    name: string,
    description: string,
    image: string,
    category: string,
    author: string
}

export function usePosts(){
    const [posts, setPosts] = useState<IPost[]>([])
    const [status, setStatus] = useState<number>()

    useEffect(()=>{
        async function getPosts(){
            const response = await fetch('https://fakestoreapi.com/products')
            const posts = await response.json()
            setPosts(posts)
            setStatus(response.status)
        }
        getPosts()
        
    },[])
    return {posts: posts,
            status: status
    }
}