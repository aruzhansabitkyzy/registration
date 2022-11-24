import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type CheckboxForm = {
    im_choice: string,
    checkbox1 : boolean, 
    checkbox2 : boolean
}

const initialState= {
    im_choice : '',
    checkbox1 : false,
    checkbox2 : false
}
export const checkSlice = createSlice({
    name: "checkbox",
    initialState,
    reducers : {
        setImChoice(state, action:PayloadAction<string>) {
            state.im_choice = action.payload;
        },
        setCheckbox1(state, action:PayloadAction<boolean>){
            state.checkbox1 = action.payload;
        },
        setCheckbox2(state, action:PayloadAction<boolean>){
            state.checkbox2 = action.payload;
        }
    }
})

export const {setImChoice, setCheckbox1, setCheckbox2} = checkSlice.actions;
export default checkSlice.reducer;