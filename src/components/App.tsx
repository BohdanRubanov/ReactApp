import { PostList } from "./PostList/PostList"
import { MainFrame } from "./MainFrame/MainFrame"
import { Header } from "./Header/Header"
import "./App.css"
export function App(){ 
  

    return(
        <div className="AllStyles">
            <div className="Header">
                <Header></Header>
            </div>
            
            <div className="MainApp">
                <MainFrame></MainFrame>
                <PostList></PostList>
            </div>
        </div>
        
    )
}