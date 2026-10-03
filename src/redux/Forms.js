import { createSlice } from "@reduxjs/toolkit";


const getProducts = localStorage.getItem("allProducts")

const FormControl = createSlice({
    name : "FormControl",
    initialState: {
        defaultProducts :  getProducts ? JSON.parse(getProducts) : [] ,
        AddProdBtn: 0,
        UpdateProdShow : 0,
        updateUserBtn : 0,
        item : null,
        
    },
    reducers: {
        showAddProd : (state) => {
            state.AddProdBtn = 1
        },
        closeForm : (state) => {
            state.AddProdBtn = 0
        },
        showUpdateForm : (state , action) => {
            state.UpdateProdShow = 1
            state.item = action.payload
        
        },
        closeUpdate : (state) => {
            state.UpdateProdShow = 0
        },
        addProd : (state , actiom) => {
            const newProd = {
                id: state.defaultProducts.length + 1,
                title : actiom.payload.addName,
                color : actiom.payload.addColor,
                price: actiom.payload.addPrice,
                imgSrc : actiom.payload.addImg
            }
            state.defaultProducts = [...state.defaultProducts, newProd]
            state.AddProdBtn = 0 
        },
        updateProd : (state , action) => {
            const update = {
                id : state.item.id,
                title : action.payload.updateName === "" ? state.item.title : action.payload.updateName,
                color: action.payload.updateColor === "" ? state.item.color : action.payload.updateColor,
                price : action.payload.updatePrice === "" ? state.item.price : action.payload.updatePrice,
                imgSrc : action.payload.updateImg === "" ? state.item.imgSrc : action.payload.updateImg
            }
            state.defaultProducts = state.defaultProducts.map(item => item.id === state.item.id ? update : item )
            state.UpdateProdShow = 0
        },
        removeProd : (state , action) => {
            state.defaultProducts =  state.defaultProducts.filter(item => item.id !== action.payload)
        },
 
    }
})

export const { removeProd ,addProd, showAddProd ,showUpdateForm,updateProd , closeForm , closeUpdate} = FormControl.actions
export default FormControl.reducer