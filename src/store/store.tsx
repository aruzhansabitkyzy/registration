import {configureStore} from '@reduxjs/toolkit'
import messageSlice from '../features/messageSlice'
import userSlice from '../features/userSlice'
import checkboxSlice from '../features/checkboxSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        message: messageSlice,
        checkbox: checkboxSlice
    }
}) 
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch