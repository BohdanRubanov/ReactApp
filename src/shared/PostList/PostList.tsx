import { useEffect, useState } from "react"
import { Post } from "../Post/Post"
import "./PostList.css"
import { usePosts } from "../../hooks/usePosts"

export function PostList(){
    const {posts} = usePosts()
    const [filteredPosts, setFilteredPosts] = useState(posts)
    const [selectedCategory, setSelectedCategory] = useState('All')

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
    
                
                return <Post key = {post.id} id = {post.id} name = {post.name} description = {post.description} img = {post.image} author={post.author}></Post>
            }
            )}
    </div>
}