import { Post } from "../Post/Post"
import "./PostList.css"

export function PostList(){
    const posts = [
        {id: 0, name: 'Oleg', description: "bebebe", image: "/static/img/catPost.png", author: "me"},
        {id: 0, name: 'NeOleg', description: "Nebebebe", image: "/static/img/catPost.png", author: "me"},
       
    ]
    return <div className="PostList">
        <h1 className="PostsTitle">Posts</h1>
            {posts.map( (post) => {
    
                
                return <Post key = {post.id} name = {post.name} description = {post.description} img = {post.image} author={post.author}></Post>
            }
            )}
    </div>
}