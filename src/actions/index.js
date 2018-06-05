import request from 'superagent';

export const increment = () => {
  return {
    type:'INCREMENT'
  };
}

export const decrement = () => {
  return {
    type:'DECREMENT'
  };
}

export const add = (value) => {
  return {
    type:'ADD',
    value
  };
}

export const subtract = (value) => {
  return {
    type:'SUBTRACT',
    value
  };
}

export const saveResult = (data) => {
  return {
    type:'STORE_RESULT',
    data
  };
}

export const storeResult = (counter) => {
  const JSONData = {
    id: new Date().getTime(),
    counter
  }
  return (dispatch) => {
    request
     .post('http://localhost:3004/counters')
     .send(JSONData)
     .then(function(res) {
        dispatch(saveResult(JSONData));
     });
  }
}
export const saveAllResults = (data) => {
  return {
    type:'SAVE_ALL_RESULTS',
    data
  };
}

export const showLoading = () => {
  return {
    type: 'FETCHING_RESULTS'
  }
}

export const getAllResults = () => {
  return (dispatch) => {
    dispatch(showLoading());
    request
     .get('http://localhost:3004/counters')
     .then(function(res) {
        window.setTimeout(()=>{dispatch(saveAllResults(res.body));},2000);

     });
  }
}

export const deleteResult = (id) => {
  return {
    type:'DELETE_RESULT',
    id
  };
}

export const deleteFromServer = (id) => {
  return (dispatch) => {
    request
     .delete(`http://localhost:3004/counters/${id}`)
     .then(function(res) {
        dispatch(deleteResult(id));
     });
  }
}
