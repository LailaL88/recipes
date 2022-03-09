import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { AllRecipes } from '../features/allRecipes/AllRecipes';
import { FavoriteRecipes } from '../features/favoriteRecipes/favoriteRecipes';
import { getSearchTerm } from '../features/searchSlice';
import { clearSearchTerm } from '../features/searchSlice';

function Home ({state, dispatch}) {


    function handleGetSearchTerm(e) {
        let searchTerm = e.target.value;
        dispatch(getSearchTerm(searchTerm));
    }

    return (
        <main>
            <section className='search'>
                <div>
                    <input type="text" placeholder='Search recipes' value={state.searchTerm} 
                        onChange={(e) => handleGetSearchTerm(e)} />
                    <FontAwesomeIcon className='icon-close' icon={faClose} onClick={() => dispatch(clearSearchTerm())} />
                </div>
            </section>
            <section>
                <h1>Favorite recipes</h1>
                <FavoriteRecipes state={state} dispatch={dispatch} />
            </section>
            <section>
                <h1>All recipes</h1>
                <AllRecipes state={state} dispatch={dispatch} />
            </section>
        </main>
    )
}

export default Home;