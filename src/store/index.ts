import { RecordState } from './../types/record';
import { UserState } from "./../types/user";
import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import { CategoryState } from "../types/category";
import categoryReducer from "./reducers/categoryReducer";
import recordReducer from './reducers/recordReducer';

export interface AppState {
  user: UserState;
  categories: CategoryState;
  records: RecordState;
}

const rootReducers = combineReducers<AppState>({
  user: userReducer,
  categories: categoryReducer,
  records: recordReducer,
});

export default rootReducers;
