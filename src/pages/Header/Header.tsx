import { Link } from "react-router-dom"
import "./Header.css"

export function Header(){
    return( 
        <div className="header"> 
            <div className="blockLinks1">
                <Link className='link' to={'/'}>Home</Link>
                <Link className='link' to={'/posts'}>Posts</Link>
                {/* тег a? А Link для чего? */}
                <a className='link' href=''>Search</a>
            </div>
            <div className="blockLinks2">
                <a className='link' href=''>Profile</a>
            </div>

            
        </div>
    )
}