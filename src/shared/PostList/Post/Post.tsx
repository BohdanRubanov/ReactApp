import { useContext, useState } from "react"
import "./Post.css"
import { Link } from "react-router-dom";
import { FavPosts } from "../../App";

interface IPostProps {
    id: number,
    name: string,
    description: string,
    img: string,
    author: string,
}
export function Post(props:IPostProps){
    const [likes, setAmount] = useState(1)
    const [disableButton, setDisableButton] = useState(false);
    const [likeImg, setLikeImg] = useState("/static/img/likeBut.png")
    const [saveImg, setSaveImg] = useState("/static/img/saveButton.png")
    const { favPosts, addPostToFav } = useContext(FavPosts)
    function incrementAmount() {

        if (disableButton === false){
            setAmount(likes+1)
            addPostToFav(props)
            setLikeImg("/static/img/pressedLikeBut.png")
            setDisableButton(true);
            console.log(favPosts)
        }
    }

    function savePost(){
        setSaveImg("/static/img/pressedSaveButton.png")
    }
    return (
        <div className="Post">
            
            <img src={props.img} alt="" />
            <div className="postInfo">
                <div className="likeAndSaveBut">
                    <button onClick={incrementAmount} disabled={disableButton} className="likeBut"><img src={likeImg} alt="" /></button>
                    <button onClick={savePost} className="saveBut"><img src={saveImg} alt="" /></button>
                </div>
                
                <p className="likesText">Likes: {likes}</p>

                <Link to={"/post/"+props.id}>
                <h1 className="nameText">{props.name}</h1>
                <p className="descText">{props.description}</p> 
                </Link>
            </div>
            
            
        
        </div>
    )
}