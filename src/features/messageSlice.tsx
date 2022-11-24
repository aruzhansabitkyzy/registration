import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type MessageForm = {
    message : string,
    choice: string
}

const initialState= {
    message : '',
    choice: ''
}
export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers : {
        setMessage(state, action:PayloadAction<string>) {
            state.message = action.payload;
        },
        setChoice(state, action:PayloadAction<string>){
            state.choice = action.payload;
        }
    }
})

export const {setMessage, setChoice} = messageSlice.actions;
export default messageSlice.reducer;
