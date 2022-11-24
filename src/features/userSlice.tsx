import {createSlice, PayloadAction} from '@reduxjs/toolkit'
type UserForm = {
    firstName: string,
    lastName : string,
    birthday: string,
    email: string,
    address: string
}
const initialState:UserForm = {
    firstName: "",
    lastName: "",
    birthday:"",
    email:"",
    address:""
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       setFirstName: (state, action:PayloadAction<string>) => {
           state.firstName = action.payload;
       },
       setLastName: (state, action:PayloadAction<string>) => {
           state.lastName = action.payload;
       },
       setBirthday: (state, action:PayloadAction<string>) => {
        state.birthday = action.payload;
       },
       setEmail: (state, action:PayloadAction<string>) => {
        state.email = action.payload;
       },
       setAddress :(state, action:PayloadAction<string>) => {
        state.address = action.payload;
       }
    }
})

export const {setFirstName, setLastName, setBirthday, setEmail, setAddress} = userSlice.actions
export default userSlice.reducer