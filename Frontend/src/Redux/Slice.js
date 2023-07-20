import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "construction",
    initialState: {
        obra: '',
        resumo: '',
        contrato: '',
        contratante: '',
        images: [],
        status: ''
    },
    reducers:{
        changeConstruction(state, {payload}) {
            return {initialState: payload}
        }
    }
})
export const {changeConstruction} = slice.actions;

export default slice.reducer;