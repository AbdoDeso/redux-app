import { createSlice } from "@reduxjs/toolkit";

const getProducts = localStorage.getItem("allProducts")
const getAddedProducts = localStorage.getItem("addedProducts")
const getFavProducts = localStorage.getItem("favItems")
const getCount = localStorage.getItem("count")

const productControl = createSlice({
    name : "productControl",

    initialState : {
        defaultProducts :  getProducts ? JSON.parse(getProducts) : [] ,
        addedProducts :  getAddedProducts ? JSON.parse(getAddedProducts) : [] ,
        favProducts: getFavProducts ? JSON.parse(getFavProducts) : []  ,
        count : getCount ? JSON.parse(getCount) : [],

    },

    reducers : {
        
        addToCart : (state, action) => {
                const Item = state.defaultProducts.find(item => item.id === action.payload)
                
                if(!state.addedProducts.some(item => item.id === action.payload)){
                    state.addedProducts.push(Item)
                    if(!state.count[action.payload]){
                        state.count[action.payload] = 1
                    }
                }
                if(state.UserCheck === 1){
                    alert('SignIN First ')
                }

            },
        
        removeItem : (state , action) => {
                state.addedProducts = state.addedProducts.filter(item => item.id !== action.payload )
                delete state.count[action.payload]
                if(state.UserCheck = 0){
                    alert('SignIN First ')
                }
        },

        addFav : (state , action) => {
            const item = state.defaultProducts.find(item => item.id === action.payload)

            if(!state.favProducts.some(item => item.id === action.payload)){
                state.UserCheck = 0
                state.favProducts.push(item)
            }
       
        },
        removeFav : (state, action) => {
            state.favProducts = state.favProducts.filter(item => item.id !== action.payload)
           
        },

        countIncrease : (state , action) => {
            const id = action.payload
            state.count[id] = Math.max(1,(state.count[id] ?? 1) + 1)
        },

        countDecrease : (state , action) => {
            const id = action.payload
            state.count[id] = Math.max(1 ,(state.count[id] ?? 1) - 1)
        },
        
    }
})

export const {addToCart, removeItem , addFav , removeFav, UserCheck, countIncrease , countDecrease} = productControl.actions
export default productControl.reducer