import "./Header.css"

export function Header(){
    return( 
        <div className="header"> 
            <div className="blockLinks1">
                <a className='link' href=''>Home</a>
                <a className='link' href=''>Posts</a>
                <a className='link' href=''>Search</a>
            </div>
            <div className="blockLinks2">
                <a className='link' href=''>Profile</a>
            </div>

            
        </div>
    )
}