import { useState, useEffect } from 'react'
import { IPost } from './usePosts'

// https://fakestoreapi.com/products/id
export function usePostById(id: number) {
    const [post, setPost] = useState<IPost>()
    const [status, setStatus] = useState<number>()

    useEffect(() => {
        async function getPost() {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const post = await response.json()
            setPost(post)
            setStatus(response.status)
        }
        getPost()
    }, [id])

    return {post: post,
            status: status
    }
}