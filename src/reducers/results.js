const initialState = {
  loading:false,
  results : []
}

const reducer = (state = initialState,action) => {
  switch (action.type) {
    case 'STORE_RESULT':
      return {
        ...state,
        results : state.results.concat(action.data)
      }
    case 'DELETE_RESULT':
      return {
        ...state,
        results : state.results.filter((result) => result.id != action.id)
      }
    case 'FETCHING_RESULTS':
      return {
        ...state,
        loading: true
      }
    case 'SAVE_ALL_RESULTS':
      return {
        ...state,
        loading:false,
        results : state.results.concat(action.data)
      }
    default:
      return state;
  }
}

export default reducer;
