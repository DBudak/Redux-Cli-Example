/*
 An example of a reducer.
 For development:
  Delete the entry in rootReducer.js
  Delete this file
*/
export default function data(state={}, action){
    switch(action.type){
        case 'DUMMY_ACTION':
            return Object.assign({},state,{number : action.number})
        default:
            return state;            
    }
}