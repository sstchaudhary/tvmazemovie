import { ADD_MOVIE_DETAILS } from "../type";

export const moviebookdetails = (state=[], action) => {
         switch(action.type){
            case ADD_MOVIE_DETAILS:
               return action.payload;
              
           default:
               return state;
         }
  }