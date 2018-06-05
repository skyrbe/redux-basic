const redux = require('redux');
const createStore = redux.createStore;


//reducers
const initialState = {
  counter:0
}

const rootReducer = (state = initialState,action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter+1
      }
    case 'ADD':
      return {
        counter : state.counter + action.value
      }

    default:
      return state;
  }
}

//store
const store = createStore(rootReducer);
console.log(store.getState());


//subscribe
store.subscribe(()=>{
  console.log("action dispatched ", store.getState());
});

//dispatchers
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'ADD',value:10});

console.log(store.getState());
