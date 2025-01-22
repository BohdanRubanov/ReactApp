import { useState, useEffect } from 'react'
import { IPost } from './usePosts'

// https://fakestoreapi.com/products/id
export function usePostById(id: number) {
    const [post, setPost] = useState<IPost>()
    const [status, setStatus] = useState<number>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getPost() {
            const response = await fetch(`https://dev.to/api/articles/${id}`)
            const post = await response.json()
            setPost(post)
            setStatus(response.status)
            setIsLoading(false)
        }
        getPost()
    }, [id])

    return {post: post,
            status: status,
            isLoading: isLoading
    }
}