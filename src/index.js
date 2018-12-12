import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from "redux";
import { connect, Provider } from "react-redux";

const initialState = {};
function reducer(state = initialState, action) {
  switch (action.type) {
    // Respond to the SET_USER action and update
    // the state accordingly
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
}


// Create the store with the reducer
const store = createStore(reducer);

// Dispatch an action to set the user
// (since initial state is empty)
store.dispatch({
  type: "SET_USER",
  user: {
    avatar: "https://s.gravatar.com/avatar/3edd11d6747465b235c79bafdb85abe8?s=80",
    name: "Daniel",
    followers: 1234,
    following: 123
  }
});

// This mapStateToProps function extracts a single
// key from state (user) and passes it as the `user` prop
const mapStateToProps = state => ({
  user: state.user
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
