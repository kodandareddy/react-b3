const reducer = (state, action) => {
    console.log(action,"action")
  switch (action.type) {
    case "add":
      return [...state,action.payload];
    case "delete":
      return [...state].filter(items=>items.id!=action.payload.id);
    default:
      return state;
  }
};

export default reducer