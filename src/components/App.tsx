import { PostList } from "./PostList/PostList"
import { MainFrame } from "./MainFrame/MainFrame"
import { Header } from "./Header/Header"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./Layout/Layout"
import { PostPage } from "./PostPage/PostPage"
import { NotFound } from "./NotFound/NotFound"
export function App(){ 
  

    return(
        <div>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Layout></Layout>}>
                        <Route path="/posts" element={<PostList></PostList>}></Route>
                        <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
                    </Route>

                    
                    <Route path="*" element={<NotFound></NotFound>}></Route>
                    
                </Routes>
            </BrowserRouter>
        </div>
        
    )
}