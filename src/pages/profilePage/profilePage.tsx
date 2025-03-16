import { useContext } from "react"
import { useUserContext } from "../../context/userContext"

export function ProfilePage(){
    const {user, isAuthenticated} = useUserContext()
    console.log(isAuthenticated)
    return (
        <div>
            {isAuthenticated === true ? <div>{user?.username}</div>: <div>No user</div>}
        </div>
    )
}