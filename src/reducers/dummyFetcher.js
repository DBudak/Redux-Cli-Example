/*
 An example of a reducer with async action.
 For development:
  Delete the entry in rootReducer.js
  Delete this file
*/

export default function asyncData(state={}, action){
    switch(action.type){
        case 'RECEIVED_POSTS':
            return Object.assign({},state,{asyncData : action.posts})
        default:
            return state;
    }
}