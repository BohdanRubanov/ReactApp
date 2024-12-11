import { ReactNode } from "react"
import "./MainFrame.css"


interface IMainProps {
    children?: ReactNode
}
export function MainFrame(props: IMainProps){
    return (
 
            <div className="MainFrame">

                <div>
                    <h1 className="tittle" >Home</h1>
                    <div className="buttonsMain">
                        <button className="button1">Create post</button>
                        <button className="button1">View posts</button>
                    </div>
                </div>
                
                <div className = "Main">
                    {props.children}
                </div>

                
               
            
            </div>
            

    )
}