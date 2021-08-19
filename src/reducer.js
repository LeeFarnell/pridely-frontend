const reducer = (state, action) => {
  console.log("here!");
  if (action.type === "LOGIN") {
    return {
      ...state,
      user: action.payload,
    };
  }

  if (action.type === "LOGOUT") {
    return {
      ...state,
      user: null,
    };
  }

  if (action.type === "SEARCH") {
    return {
      ...state,
      search: action.payload,
    };
  }

  return state;
};

export default reducer;
