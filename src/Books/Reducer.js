const reducer = (state, action)=>{

    switch(action.type)
    {
        case "SET_LOADING":
            return{
                ...state,
                isLoading: true,
            };

        case "GET_API" :
            
        return{
            ...state,
            isLoading: false,
            books : action.payload.books,
        };
        case "LOAD_FAVORITE_BOOKS":
  return { ...state, favoriteBooks: action.payload.favoriteBooks };

    }
    
    return state;
};

export default reducer;