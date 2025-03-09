import { useState, useEffect } from 'react'
import { IPost } from './usePosts'

export function usePostById(id: number) {
    const [post, setPost] = useState<IPost>()
    const [status, setStatus] = useState<number>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getPost() {
            try{
                const response = await fetch(`http://localhost:8000/posts/${id}`)
                const result = await response.json()
                if (result.status === 'error') {
                    console.log(result.message)
                    return    
                }
                setPost(result.data)
                setStatus(response.status)
                setIsLoading(false)
            }catch (err) {
                console.log(err)}
            
        }
        getPost()
    }, [id])

    return {post: post,
            status: status,
            isLoading: isLoading
    }
}