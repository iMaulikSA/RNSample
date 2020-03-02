
import { createStore, combineReducers } from 'redux';
import userReducer from './UserReducer';

// const rootReducer = combineReducers(
//     {userReducer}
// );

// const configureStore = () => {
//     return createStore(rootReducer);
// }

// export default configureStore;

const store = createStore(userReducer)

export default store;


