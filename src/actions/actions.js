/*
 Write action creators here.
 For Development:
  Delete actions below
  REFERENCES??
*/
import fetch from 'isomorphic-fetch';

export function changeNumber(number){
    return {
        type: 'INCREMENT NUMBER',
        number: number
    }
}

export function fetchServer(url){
    return dispatch => {
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receivedPosts(json)))
    }
}

export function receivedPosts(response){
    return {
        type: 'RECEIVED_POSTS',
        posts: response
    }
}



