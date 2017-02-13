/*
 An example of a reducer with async action.
 For development:
  Delete the entry in rootReducer.js
  Delete this file
*/

export default function dataAsync(state={}, action){
    switch(action.type){
        case 'RECEIVE_POSTS':
            return Object.assign({},state,{number : action.number})
        default:
            return state;
    }
}