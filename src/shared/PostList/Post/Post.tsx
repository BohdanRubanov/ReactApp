import { useContext, useState } from "react"
import "./Post.css"
import { Link } from "react-router-dom";
import { IPost } from "../../../hooks/usePosts";
import { FavPostsContext } from "../../../context/favPostContext";


export function Post(props:IPost){
    const [likes, setAmount] = useState(1)
    const [disableButton, setDisableButton] = useState(false);
    const [likeImg, setLikeImg] = useState("/static/img/likeBut.png")
    const [saveImg, setSaveImg] = useState("/static/img/saveButton.png")
    const { favPosts, addPostToFav } = useContext(FavPostsContext)
    function incrementAmount() {

        if (disableButton === false){
            setAmount(likes+1)
            addPostToFav(props)
            props.isLiked = true
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
            

            <div className="postInfo">
                <div className="likeAndSaveBut">
                    <button onClick={incrementAmount} disabled={disableButton} className="likeBut"><img src={likeImg} alt="" /></button>
                    <button onClick={savePost} className="saveBut"><img src={saveImg} alt="" /></button>
                </div>
                
                <p className="likesText">Likes: {likes}</p>

                <Link to={"/post/"+props.id}>
                <h1 className="nameText">{props.name}</h1>
                </Link>
            </div>
            
            
        
        </div>
    )
}