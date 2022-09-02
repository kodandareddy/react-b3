const initialState = [];

export default (state = initialState, action) => {
  console.log(action,"++++")
  switch (action.type) {
    case "ADD":
     return [...state,action.payload]
    case "DELETE":
      return [];
    default:
      return state;
  }
};
