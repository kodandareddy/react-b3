const reducer=(state,action)=>{
    switch(action.type){
      case 'Add':
        return [...state,action.todo]
        default:
          return []
    }
  
  }

  export default reducer