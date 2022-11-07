import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { allmoviereducer } from './reducers/allmoviereducer';
import { summeryreducer } from './reducers/summeryreducer';
import { moviebookdetails } from './reducers/moviebookdetails';
const reducer=combineReducers(
    {
         movies:allmoviereducer,
         summery:summeryreducer,
         bookdata:moviebookdetails
    }
)
const middleware=[thunk];
const store =createStore(
  reducer,composeWithDevTools(applyMiddleware(...middleware))
)

export default store;