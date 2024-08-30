import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "learn-react-toolkit",
    content: "i've heard good things. ",
  },
  {
    id: "2",
    titile: "slices",
    content: "the more i say slice, the more i want pizza.",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postsAdd: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId
          },
        };
      },
    },
  },
});

export const selectAlllPosts = (state) => state.posts;
export const { postsAdd } = postSlice.actions;

export default postSlice.reducer;
