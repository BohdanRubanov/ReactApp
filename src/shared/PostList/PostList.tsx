import { useEffect, useState } from "react"
import { Post } from "./Post/Post"
import "./PostList.css"
import { usePosts } from "../../hooks/usePosts"
import { useTags } from "../../hooks/useTags"

export function PostList(){
    const {posts} = usePosts()
    const [filteredPosts, setFilteredPosts] = useState(posts)
    const [selectedCategory, setSelectedCategory] = useState('All')
    const {isLoading } = usePosts()
    const {tags} = useTags()

    useEffect(()=>{
        if(selectedCategory === 'All'){
            setFilteredPosts(posts)
        } else{
            setFilteredPosts(posts.filter( (post)=>{
                console.log(post.tags.name)
                return post.tags.name === selectedCategory
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
            {tags.map(tag => {
                return <option value={tag.name}>{tag.name}</option>
            })}
        </select>
        
            {filteredPosts.map( (post) => {
    
                
                return <Post key = {post.id} id = {post.id} name = {post.name} author={post.author} date={post.date} comments={post.comments} userId={post.userId} tagId={post.tagId} tags={post.tags}></Post>
            }
            )}
            </>
        )}
    </div>
}