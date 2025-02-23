import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostList } from "./PostList/PostList";
import { MainFrame } from "../pages/MainPage/MainPage";
import { Header } from "../pages/Header/Header";
import { PostPage } from "../pages/PostPage/PostPage";
import { NotFound } from "../pages/NotFound/NotFound";
import { Layout } from "./Layout/Layout";
import "./App.css";
import { IPost } from "../hooks/usePosts";


const initialValue = {
    favPosts: [] as IPost[],
    addPostToFav: (post: IPost) => {},
    delPostFromFav: (id: number) => {}
  }

export const FavPosts = createContext(initialValue)

export function App() {
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






  return (
    <FavPosts.Provider value={{favPosts, addPostToFav, delPostFromFav}}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/posts" element={<PostList />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </FavPosts.Provider>
  );
}
