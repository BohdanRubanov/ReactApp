import { Post } from "./Post"

export function PostList(){
    const posts = [
        {id: 0, name: 'Oleg', description: "bebebe", image: "https://img.freepik.com/free-photo/view-beautiful-persian-domestic-cat_23-2151773821.jpg", author: "me"},
        {id: 0, name: 'NeOleg', description: "Nebebebe", image: "https://img.freepik.com/free-photo/view-beautiful-persian-domestic-cat_23-2151773821.jpg", author: "me"},
       
    ]
    return <div>
            {posts.map( (post) => {
                // key - уникальный ключ используется при рендере массивов
                // нужен для идентифицирования reactом элементов которые отображаются
                    // <img src="" alt="" />
                
                return <Post key = {post.id} name = {post.name} description = {post.description} img = {post.image} author={post.author}></Post>
            }
            )}
    </div>
}