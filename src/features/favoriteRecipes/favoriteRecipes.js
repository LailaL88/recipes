import React from 'react';
import Recipe from '../../components/Recipe';

export function FavoriteRecipes ({state, dispatch}) {

    let filtered = state.favoriteRecipes.filter(recipe => recipe.text.toLowerCase().includes(state.searchTerm.toLowerCase()));

    return (
        <div className='favoriteRecipes'>
            {filtered.map( recipe => {
                return  <Recipe key={recipe.id} text={recipe.text} img={recipe.img} state= {state} dispatch={dispatch} recipe={recipe} link={recipe.path} />
                }
            )}
        </div>
    )
}