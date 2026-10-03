import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus ,faXmark ,faArrowRotateForward } from "@fortawesome/free-solid-svg-icons";
import { useState , useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {showAddProd, showUpdateForm , updateProd, closeForm,closeUpdate,  removeProd , addProd} from "../../redux/Forms"

export default function Products() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {defaultProducts, AddProdBtn ,UpdateProdShow,closeUpdateForm ,  closeStat} = useSelector(state => state.FormsCtrl)
    const {users , signinDone , userLog} = useSelector(state => state.userCtrl)    

    useEffect (() => {
        if(signinDone == 0){
            navigate('/')
        }
    }, [signinDone])
    const [addProdForm , setaddProdForm] = useState({addName : '' , addColor : '' , addPrice : '' , addImg : '' })
    
            const setForm = (e) => {
                setaddProdForm(prev => ({...prev , [e.target.name] : e.target.value }))
            }
    
            const onSubmit = (e)=> {
                e.preventDefault()
                dispatch(addProd(addProdForm))
            }
    
    const [UpdateProdForm , setUpdateProdForm] = useState({updateName : '' , updateColor : '' , updatePrice : '' , updateImg : '' })
    
            const setUpdateForm = (e) => {
                setUpdateProdForm(prev => ({...prev , [e.target.name] : e.target.value }))
            }
    
            const SubmitUpdate = (e)=> {
                e.preventDefault()
                dispatch(updateProd(UpdateProdForm))
            }
         useEffect(()=>{
             if(signinDone == 0){
                 navigate("/")
             }
            })
    return (
    <section>
    
        <Sidebar />
    
    <div className="relative pt-30  ">
    <div id="hide" className="  ">
        <div className=" h-10  flex  justify-center items-center bg-gray-300 text-black mx-auto" >
                <button className="  px-1 text-2xl text-blue-800 hover:border-2"  onClick={() => dispatch(showAddProd())}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
        </div>
               {AddProdBtn === 1   ? (
                 <div className=" fixed bg-gray-20 backdrop-invert backdrop-opacity-20  font-bold   
                    z-200  top-[150px] w-full xl:w-1/2 xl:mx-80 " >
                
                    <form  onSubmit={onSubmit} className="flex flex-col justify-center p-10  text-sm 
                    transition-opacity duration-500 bg-gray-200 border-2 border-gray-300 text-black rounded-sm">
                    <button className=" bg-red-600 text-lg w-10 mx-60 xl:mx-auto text-center rounded-md
                     text-slate-100 hover:scale-120 transition duration-300" onClick={() => dispatch(closeForm())} >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                        <div className="mt-11 gap-4"><span className="block">Mobile Name</span>
                            <input className="w-full p-1 bg-white rounded-sm placeholder:pl-1" placeholder="Enter Mobile Name" type="text" name="addName" onChange={setForm} /></div>
                        <div className="mt-2 gap-4"><span className="block">Color</span>
                            <input className="w-full p-1 bg-white rounded-sm placeholder:pl-1" placeholder="Enter Color" type="text" name="addColor"   onChange={setForm}   /></div>
                        <div className="mt-2 gap-4"><span className="block">Price</span>
                            <input className="w-full p-1 bg-white rounded-sm placeholder:pl-1" placeholder="Enter Price" type="text" name="addPrice"   onChange={setForm}   /></div>
                        <div className="mt-2 gap-4"><span className="block">Mobile Image</span>
                            <input className="w-full p-1 bg-white rounded-sm placeholder:pl-1" placeholder="Enter Image Url" type="text" name="addImg"  onChange={setForm}  /></div>
                        <button className="flex justify-center bg-blue-800 p-1 px-2 m-4 mx-auto rounded-md text-white"
                         type="submit">Add Item</button>
                    </form>

                </div>
               ): (<div></div>)

               }
             <div className="flex justify-center items-center space-x-3 pt-30  lg:pt-35 xl:pt-30 pb-10  ">
                    <div className="flex flex-wrap mx-auto  pt-3 pb-10
                    justify-center items-center  min-h-screen  gap-10 ">
                        {defaultProducts.map(item => {
                                            
                                    return ( 
                                        <div className="grid grid-cols-1 p-6 bg-slate-200/80 rounded-md hover:shadow-xl hover:scale-105 transition duration-300 " >
                                            <img className="w-full h-70 mx-auto " src={item.imgSrc} alt="productImage" />
                                                <div className="flex flex-col px-20 mx-auto py-5 font-bold   gap-y-2 ">
                                                    <h2 className="text-lg font-bold">{item.title}</h2>
                                                    <span className="text-sm">Color : {item.color}</span>
                                                    <p className="text-sm">Price : {item.price}.LE</p>
                                                </div>
                                                <div className="flex flex-row justify-center">
                                                    <div className="space-x-2 ">
                                                        <button  className="rounded-md p-1 text-sm font-bold bg-red-700 text-white hover:bg-red-800 hover:text-white
                                                          transition duration-300" onClick={() => dispatch(removeProd(item.id))}>
                                                            <span>Remove Product </span> 
                                                            <FontAwesomeIcon icon={faXmark} className="rounded-full text-sm bg-white text-red-800 " />
                                                        </button>
                                                        <button  className="rounded-md p-1 text-sm font-bold bg-blue-700 text-white hover:bg-red-800 hover:text-white
                                                          transition duration-300" onClick={() => dispatch(showUpdateForm(item))}>
                                                            <span>Update Product </span> 
                                                            <FontAwesomeIcon icon={faArrowRotateForward} className="rounded-full  text-sm bg-white text-blue-800 " />
                                                        </button>
                                                    </div>
                       
                                                </div>
                                        </div>
                                        
                                        )
                        }
                                        )}
                    </div>
            </div>
    </div>
                {UpdateProdShow === 1   ? (
                    <div className=" fixed bg-gray-20 backdrop-invert backdrop-opacity-20  font-bold   
                        z-200  top-[150px] w-full xl:w-1/2 xl:mx-80 " >
                                
                         <form  onSubmit={SubmitUpdate} className="flex flex-col justify-center p-10  text-sm 
                    transition-opacity duration-500 bg-gray-200 border-2 border-gray-300 text-black rounded-sm">
                    <button className=" bg-red-600 text-lg w-10 mx-60 xl:mx-auto text-center rounded-md
                     text-slate-100 hover:scale-120 transition duration-300" onClick={() => dispatch(closeForm())} >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                        <div className="gap-4"><span className="block">Mobile Name</span>
                            <input className="w-full p-1 bg-white rounded-sm placeholder:pl-1" placeholder="Enter Mobile Name" type="text" name="updateName" onChange={setUpdateForm} /></div>
                        <div className="mt-2 gap-4"><span className="block">Color</span>
                            <input className="w-full p-1 bg-white rounded-sm placeholder:pl-1" placeholder="Enter Color" type="text" name="updateColor"   onChange={setUpdateForm}   /></div>
                        <div className="mt-2 gap-4"><span className="block">Price</span>
                            <input className="w-full p-1 bg-white rounded-sm placeholder:pl-1" placeholder="Enter Price" type="text" name="updatePrice"   onChange={setUpdateForm}   /></div>
                        <div className="mt-2 gap-4"><span className="block">Mobile Image</span>
                            <input className="w-full p-1 bg-white rounded-sm placeholder:pl-1" placeholder="Enter Image Url" type="text" name="updateImg"  onChange={setUpdateForm}  /></div>
                        <button className="flex justify-center bg-blue-800 p-1 px-2 m-4 mx-auto rounded-md text-white"
                         type="submit">Update Item</button>
                    </form>

                </div>
               ): (<div></div>)

               }
     
        </div>
        </section>
    );
}
