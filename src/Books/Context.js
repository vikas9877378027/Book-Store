import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer";

let API = "http://localhost:4000/books";

const initialState = {
  isLoading: true,
  books: [],
  isSingleLoading: false,
  singleData: {},
  favoriteBooks: [],
  cartItems: []
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "GET_API",
        payload: {
          books: data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const res = await fetch(url);
      const singleData = await res.json();
      dispatch({
        type: "GET_SINGLE_API",
        payload: {
          singleData,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavorite = (book) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: { book } });
  };

  const removeFromFavorite = (bookId) => {
    dispatch({ type: "REMOVE_FROM_FAVORITE", payload: { bookId } });
  };

  const addToCart = (book) => {
    dispatch({ type: "ADD_TO_CART", payload: { book } });
  };

  const removeFromCart = (bookId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { bookId } });
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        getSingleProduct,
        addToFavorite,
        removeFromFavorite,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
