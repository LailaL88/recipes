import { createStore, combineReducers } from "redux";
import { allRecipesReducer } from "../features/allRecipes/allRecipesSlice";
import { favoriteRecipesReducer } from "../features/favoriteRecipes/favoriteRecipesSlice";
import { searchTermReducer } from "../features/searchSlice";

export const store = createStore(combineReducers({
    allRecipes: allRecipesReducer,
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer,  
}));