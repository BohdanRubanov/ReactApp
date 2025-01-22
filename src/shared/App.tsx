import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostList } from "./PostList/PostList";
import { MainFrame } from "../pages/MainPage/MainPage";
import { Header } from "../pages/Header/Header";
import { PostPage } from "../pages/PostPage/PostPage";
import { NotFound } from "../pages/NotFound/NotFound";
import { Layout } from "./Layout/Layout";
import "./App.css";

interface IFavPost {
    id: number,
    name: string,
    description: string,
    img: string,
    author: string,

}

const initialValue = {
    favPosts: [] as IFavPost[],
    addPostToFav: (post: IFavPost) => {},
  }

export const FavPosts = createContext(initialValue)

export function App() {
  const [favPosts, setFavPosts] = useState<IFavPost[]>([])
  const addPostToFav = (post: IFavPost) => {
    const posts = [...favPosts, post]
    setFavPosts(posts)
  }





  return (
    <FavPosts.Provider value={{favPosts, addPostToFav}}>
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
