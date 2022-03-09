import React from 'react';
import { loadRecipes } from './allRecipesSlice';
import Recipe from '../../components/Recipe';


export function AllRecipes ({state, dispatch}) {

    React.useEffect(function(){
        dispatch(loadRecipes());
    }, [dispatch]);

    let filtered = state.allRecipes.filter(recipe => recipe.text.toLowerCase().includes(state.searchTerm.toLowerCase()));

    return (
        <div className='allRecipes'>
            {filtered.map( recipe => {
                return  <Recipe key={recipe.id} text={recipe.text} img={recipe.img} state= {state} dispatch={dispatch} recipe={recipe} link={recipe.path} />
                }
            )}
        </div>
    )
}