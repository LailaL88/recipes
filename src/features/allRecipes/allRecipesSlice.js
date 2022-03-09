import { recipes } from "../../recipes";

export const loadRecipes = () => {
    return {
        type: 'allRecipes/loadRecipes',
    };
}

export const allRecipesReducer = (allRecipes = recipes, action) => {
    switch (action.type) {
        case 'allRecipes/loadRecipes' :
                return allRecipes;   
        case 'favoriteRecipes/addRecipe' :
            return allRecipes.filter(recipe => recipe.id !== action.payload.id);
        case 'favoriteRecipes/removeRecipe' :
            return [action.payload, ...allRecipes];
        default :
            return allRecipes;
    }
}