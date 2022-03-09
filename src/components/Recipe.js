import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { addRecipe } from '../features/favoriteRecipes/favoriteRecipesSlice';
import { removeRecipe } from '../features/favoriteRecipes/favoriteRecipesSlice';
import { Link } from 'react-router-dom';

function Recipe (props) {

    function handleRemoveRecipe(recipe) {
        props.dispatch(removeRecipe(recipe));
    }
    
    function handleAddRecipe(recipe) {
        props.dispatch(addRecipe(recipe));
    }

    return (
            <div className='recipe'>
                <div className='card-heading'>
                    <h3>{props.text}</h3>
                </div>
                <div className='image'>
                    <img src={props.img} alt={props.text} />
                </div>
                <p className='icon-add'>Add to favorites <FontAwesomeIcon className='icon' icon={faHeart} onClick={() => handleAddRecipe(props.recipe)} /></p>
                <p className='icon-remove'>Remove from favorites <FontAwesomeIcon className='icon' icon={faHeartBroken}  onClick={() => handleRemoveRecipe(props.recipe)}/></p>
                <Link to={"/" + props.link}>See Recipe</Link>
            </div>
    )
}

export default Recipe;