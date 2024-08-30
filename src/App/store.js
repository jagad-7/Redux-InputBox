import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../Components/post/postsSlice";
import usersReducer from '../Components/Users/UserSlice'

const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
export default store;
