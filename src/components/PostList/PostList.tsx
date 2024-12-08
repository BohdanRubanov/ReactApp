import { useEffect, useState } from "react"
import { Post } from "../Post/Post"
import "./PostList.css"

export function PostList(){
    const posts = [
        {id: 0, category: 'funny', name: 'Oleg', description: "funny", image: "/static/img/catPost.png", author: "me"},
        {id: 1, category: 'sad',name: 'NeOleg', description: "sad", image: "/static/img/catPost.png", author: "me"},
        {id: 2, category: 'angry',name: 'NeOleg', description: "angry", image: "/static/img/catPost.png", author: "me"},
        {id: 3, category: 'hapi',name: 'NeOleg', description: "hapi", image: "/static/img/catPost.png", author: "me"},
        {id: 4, category: 'funny',name: 'NeOleg', description: "funny", image: "/static/img/catPost.png", author: "me"},
       
    ]
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
    }, [selectedCategory])

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
    
                
                return <Post key = {post.id} name = {post.name} description = {post.description} img = {post.image} author={post.author}></Post>
            }
            )}
    </div>
}