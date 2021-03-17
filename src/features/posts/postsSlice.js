import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
    name: 'posts',
    initialState:{
        posts: [],
        potsRequired: false,
        postSuccess: false,
        postError: false
    },
    reducers: {
        potsRequired:(state, action) => {
            state.potsRequired = true
            state.postError = false
        },
        successPost: (state, action)=>{

        },
        errorPost: (state,action)=>{
            
        }
    }
})