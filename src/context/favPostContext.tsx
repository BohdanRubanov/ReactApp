import { createContext, ReactNode, useContext, useState } from "react"
import { IPost } from "../hooks/usePosts"

const initialValue = {
    favPosts: [] as IPost[],
    addPostToFav: (post: IPost) => {},
    delPostFromFav: (id: number) => {}
  }

export const FavPostsContext = createContext(initialValue)

export function useFavPosts() {
    return useContext(FavPostsContext)
}

interface IFavPostsProviderProps{
    children: ReactNode
}

export function FavPostsProvider(props: IFavPostsProviderProps) {
    const { children } = props
    const [favPosts, setFavPosts] = useState<IPost[]>([])
  const addPostToFav = (post: IPost) => {
    const posts = [...favPosts, post]
    setFavPosts(posts)
  }
  function delPostFromFav(id: number) {
    const filteredPosts = favPosts.filter((post)=>{
        return post.id !== id
        
    })
    setFavPosts(filteredPosts)}

    return(
        <FavPostsContext.Provider 
            value={{
                favPosts: favPosts,
                addPostToFav: addPostToFav,
                delPostFromFav: delPostFromFav,
            }}>
                { children }
        </FavPostsContext.Provider>
    )
}