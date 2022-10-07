import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch