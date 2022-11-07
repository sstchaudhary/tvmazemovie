import { SUMMERY_MOVIES } from "../type";
export const summeryreducer = (state=[], action) => {
    switch(action.type){
       case SUMMERY_MOVIES:
          return action.payload;
         
      default:
          return state;
    }
}