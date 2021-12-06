import React, { useReducer } from "react";

const Main = {
  lists: [],
};

const initialState = Main;

function reducer(state, action) {
  switch (action.type) {
    case "initialLoad":
      return { ...state, lists: action.payload };
    case "addList":
      return { ...state, lists: [...state.lists, action.payload] };
    default:
      return state;
  }
}

const Context = React.createContext(Main);

export default function MainContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ dispatch, state }}>{children}</Context.Provider>
  );
}
