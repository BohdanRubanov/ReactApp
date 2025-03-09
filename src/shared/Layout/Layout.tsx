import { Outlet } from "react-router-dom";

import { ReactNode} from "react";
import { MainFrame } from "../../pages/MainPage/MainPage";
import { Header } from "../../pages/Header/Header";




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

                
            </div>
        </div>
    )
}