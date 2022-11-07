import axios from 'axios'
import { SET_MOVIES, SUMMERY_MOVIES,ADD_MOVIE_DETAILS } from "../type";
const API_URL = "https://api.tvmaze.com/search/shows?q=all"

export const getAllMovies = () => async (dispatch) => {
    try {
        const res = await axios.get(API_URL);
        dispatch(setMovies(res.data));

    } catch (error) {
        console.log('error while calling getAllmovie function',error.message);
    }

}
const setMovies = (data=null) => {
    try {
        if((data)){
            return {
                type:SET_MOVIES,
                payload:data

            };
        }

    } catch (error) {
        console.log('error while calling setMovie function',error.message);
    }

}


//---------------------------------------------------------------------------------------------
export const summeryMovies = () => async (dispatch) => {
    try {
        const res = await axios.get(API_URL);
        console.log(res.data)
        dispatch(setSummeryMovies(res.data));

    } catch (error) {
        console.log('error while calling getAllmovie function',error.message);
    }

}
const setSummeryMovies = (data=null) => {
    try {
        if(data){
            return {
                type:SUMMERY_MOVIES,
                payload: data

            };
        }

    } catch (error) {
        console.log('error while calling setMovie function',error.message);
    }

}

//-----------------------------------------------------------------------------------------
export const addMovie = (data) =>{
    try {
        return {
            type:ADD_MOVIE_DETAILS,
            payload: data

        };

    } catch (error) {
        console.log('error while calling getAllmovie function',error.message);
    }

}