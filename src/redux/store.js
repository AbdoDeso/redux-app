import { configureStore } from "@reduxjs/toolkit";
import productControl from "./productControl"
import userControl from "./userControl"
import FormsControl from "./Forms"
export const store = configureStore ({
    reducer : {
        productCtrl : productControl ,
        userCtrl : userControl ,
        FormsCtrl : FormsControl,
    },
    
})


store.subscribe(() => {
    
    const state = store.getState().productCtrl
    localStorage.setItem("allProducts", JSON.stringify(state.defaultProducts))
    localStorage.setItem("userCheck", JSON.stringify(state.UserCheck))
    localStorage.setItem("addedProducts", JSON.stringify(state.addedProducts))
    localStorage.setItem("favItems", JSON.stringify(state.favProducts))
    localStorage.setItem("count", JSON.stringify(state.count))



    const state2 = store.getState().userCtrl
    localStorage.setItem("users" , JSON.stringify(state2.users))
    localStorage.setItem("signin" , JSON.stringify(state2.signinDone))
    localStorage.setItem("signup" , JSON.stringify(state2.signupDone))


    const state3 = store.getState().FormsCtrl
    localStorage.setItem("allProducts" , JSON.stringify(state3.defaultProducts))

   


})