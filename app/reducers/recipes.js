import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedRecipes = createReducer({},{
    [types.SET_SEARCHED_RECIPES](state,action){
        let newState = {};
        index = 0;
        action.recipes.forEach(recipe => {
            newState[index++] = recipe;
        });
        return newState;
    }
});

export const recipeCount = createReducer(0,{
    [types.ADD_RECIPE](state,action) {
        return state + 1;
    },
    [types.SET_SEARCHED_RECIPES](state,action) {
        return action.recipes.length;
    }
});