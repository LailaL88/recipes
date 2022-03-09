export const getSearchTerm = (term) => {
    return {
        type: 'searchTerm/getSearchTerm',
        payload: term
    }
}

export const clearSearchTerm = () => {
    return {
        type: 'searchTerm/clearSearchTerm',
    }
}

export const searchTermReducer = (searchTerm = "", action) => {
    switch (action.type) {
        case 'searchTerm/getSearchTerm' :
            return action.payload;
        case 'searchTerm/clearSearchTerm' :
            return "";
        default : 
        return searchTerm;
    }
}