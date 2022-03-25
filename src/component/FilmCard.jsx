import { useReducer } from "react";
import "../styles/card.css"

function FilmCard({data, cardDelete}) {
    const initialState = {like: 0, dislike: 0};

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
            return {like: state.like + 1, dislike: 0};
            case 'decrement':
            return {dislike: state.dislike + 1, like: 0};
            default:
            throw new Error();
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="card">
             <div className="deleteCard" onClick={cardDelete}>
                <i  className="fas fa-times"></i>
            </div>
            <div className="imagefilm">
                <img className="filmimages" src={data.img} alt={data.title}></img>
            </div>
            
            <div className="cardinfo">
                <h2 className="title">{data.title}</h2>
                <h3 className="category">{data.category}</h3>
                <div className="likedislike">
                    <i className="fad fa-thumbs-up" style={state.like !== 0 ? {color: 'royalblue', pointerEvents: 'none'}:{}} onClick={() => state.like === 0 && dispatch({type: 'increment'})}></i>
                    <i className="fad fa-thumbs-down" style={state.dislike !== 0 ? {color: 'red', pointerEvents: 'none'}:{}} onClick={() => state.dislike === 0 && dispatch({type: 'decrement'})}></i>
                </div>
                <div className="likebar">
                    <div className="likes" style={{width:`${(data.likes+state.like)/(data.likes+state.like+data.dislikes)*100}%`}}></div>
                    <div className="dislikes" style={{width:`${(data.dislikes+state.dislike)/(data.likes+data.dislikes)*100}%`}}></div>
                </div>
            </div>
        </div>
    );
};

export default FilmCard;