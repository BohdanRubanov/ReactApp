import { useEffect, useState } from "react"
import { Post } from "./Post/Post"
import "./PostList.css"
import { usePosts } from "../../hooks/usePosts"

export function PostList(){
    const {posts} = usePosts()
    const [filteredPosts, setFilteredPosts] = useState(posts)
    const [selectedCategory, setSelectedCategory] = useState('All')
    const {isLoading } = usePosts()

    useEffect(()=>{
        if(selectedCategory === 'All'){
            setFilteredPosts(posts)
        } else{
            setFilteredPosts(posts.filter( (post)=>{
                return post.category === selectedCategory
            }))
        }
        console.log(selectedCategory)
    }, [selectedCategory, posts])

   

    return <div className="PostList">

        { isLoading === true ? (<div>Loading...</div>) :(

            <>
        <h1 className="PostsTitle">Posts</h1>
        <select onChange={(event)=>{
            setSelectedCategory(event.target.value)
        }
        }>
            <option value = 'All'>All</option>
            <option value = 'funny'>funny</option>
            <option value = 'sad'>sad</option>
            <option value = 'angry'>angry</option>
            <option value = 'hapi'>hapi</option>
        </select>
        
            {filteredPosts.map( (post) => {
    
                
                return <Post key = {post.id} id = {post.id} title = {post.title} description = {post.description} social_image = {post.social_image} author={post.author} isLiked={post.isLiked} category={post.category}></Post>
            }
            )}
            </>
        )}
    </div>
}