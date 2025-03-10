import { useContext } from "react";
import { FavPostsContext } from "../../context/favPostContext";

export function FavPostsPage(){
    const {favPosts} = useContext(FavPostsContext)
    return (
        <div>
            {favPosts.map((favPost) => {
                return <p>{favPost.name}</p>
            })}
        </div>
    )
}