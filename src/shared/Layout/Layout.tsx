import { Outlet } from "react-router-dom";



import { ReactNode, useContext } from "react";
import { MainFrame } from "../../pages/MainPage/MainPage";
import { Header } from "../../pages/Header/Header";
import { FavPosts } from "../App";


interface ILayoutProps {
    children?: ReactNode
}

export function Layout(props: ILayoutProps){
    const { favPosts, addPostToFav } = useContext(FavPosts)
    return (
        <div className="AllStyles">
            <div className="Header">
                <Header></Header>
            </div>
            
            <div className="MainApp">
                <MainFrame>
                    <Outlet />
                </MainFrame>
                
                {/* <PostList></PostList> */}
                
            </div>
        </div>
    )
}