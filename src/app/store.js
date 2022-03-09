import { createStore, combineReducers } from "redux";
import { allRecipesReducer } from "../features/allRecipes/allRecipesSlice";
import { commentsReducer } from "../features/comments/CommentsSlice";
import { favoriteRecipesReducer } from "../features/favoriteRecipes/favoriteRecipesSlice";
import { searchTermReducer } from "../features/searchSlice";

export const store = createStore(combineReducers({
    allRecipes: allRecipesReducer,
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer,
    seabass: commentsReducer('seabass'),
    hamburger: commentsReducer('hamburger'),
    italiansalad: commentsReducer('italian-salad'),
    enchiladas: commentsReducer('enchiladas'),
    minestroneSoup: commentsReducer('minestrone-soup'),
    bucatinipasta: commentsReducer('bucatinipasta'),
    garlicshrimp: commentsReducer('garlic-shrimp'),
    cookies: commentsReducer('cookies'),   
}));