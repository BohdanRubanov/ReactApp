import { Link } from "react-router-dom"
import "./Header.css"

export function Header(){
    return( 
        <div className="header"> 
            <div className="blockLinks1">
                <Link className='link' to={'/'}>Home</Link>
                <Link className='link' to={'/posts'}>Posts</Link>
                <Link className='link' to=''>Search</Link>
            </div>
            <div className="blockLinks2">
                <Link className='link' to=''>Profile</Link>
            </div>

            
        </div>
    )
}