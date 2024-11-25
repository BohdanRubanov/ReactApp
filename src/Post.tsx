import { useState } from "react"

interface IPostProps {
    name: string,
    description: string,
    img: string,
    author: string,
}
export function Post(props:IPostProps){
    const [likes, setAmount] = useState(1)
    const [disableButton, setDisableButton] = useState(false);
    function incrementAmount() {

        if (disableButton === false){
            setAmount(likes+1)
 
            setDisableButton(true);
            
        }
       
    }
    
    
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <img src={props.img} alt="" />
            <p>{props.author}</p>
            <p>Likes: {likes}</p>
            <button onClick={incrementAmount} disabled={disableButton}>Like</button>
        </div>
    )
}