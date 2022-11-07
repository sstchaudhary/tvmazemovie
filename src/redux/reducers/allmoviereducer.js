import { SET_MOVIES } from "../type";

export const allmoviereducer = (state=[], action) => {
         switch(action.type){
            case SET_MOVIES:
               return action.payload;
              
           default:
               return state;
         }
  }

  
