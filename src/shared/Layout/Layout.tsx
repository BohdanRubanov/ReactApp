import { Outlet } from "react-router-dom";
import { Header } from "../pages/Header/Header";
import { MainFrame } from "../pages/MainPage/MainPage";
import { PostList } from "../shared/PostList/PostList";
import { ReactNode } from "react";


interface ILayoutProps {
    children?: ReactNode
}

export function Layout(props: ILayoutProps){
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