import Sidebar from "./sidebar";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus , faXmark , faPenToSquare , faUserCheck} from "@fortawesome/free-solid-svg-icons";
import { useDispatch , useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser,updateLog , removeUser, allowUser, denyUser , resetFormStat,setPermit ,setAddFormStat ,setUpdateFormStat
     ,closeUpdateForm,adminAddUser , UpdateUserForm} from "../../redux/userControl";
export default function Users() {
      const dispatch = useDispatch()
       const {users , log, signinDone ,item, updateFormStat,addFormStat , formStat} = useSelector(state => state.userCtrl)    
   
       const [addProdForm , setaddProdForm] = useState({firstname : '' , lastname : '' , email : '' , password : '' })
       
               const setForm = (e) => {
                   setaddProdForm(prev => ({...prev , [e.target.name] : e.target.value }))
               }
       
               const SubmitUser = (e)=> {
                   e.preventDefault()
                   dispatch(adminAddUser(addProdForm))
               }
       
       const [UpdateUser , setUpdateUser] = useState({firstname : '' , lastname : '' , email : '' , password : '' })
       
               const setUpdateForm = (e) => {
                   setUpdateUser(prev => ({...prev , [e.target.name] : e.target.value }))
               }
       
               const SubmitUpdate = (e) => {
                   e.preventDefault()
                   
                   dispatch(UpdateUserForm(UpdateUser))
               }
    return (
    <section>
            <Sidebar />
    <div className="relative pt-30  ">
       <div id="hide" className="  ">
           <div className=" h-10  flex  justify-center items-center bg-gray-300 text-black mx-auto" >
                   <button className="  px-1 text-2xl text-blue-800 hover:border-2"  onClick={() => dispatch(setAddFormStat(1))}>
                       <FontAwesomeIcon icon={faPlus} />
                   </button>
           </div>
                {addFormStat === 1 ? (
                      <div className=" fixed bg-gray-20 backdrop-invert backdrop-opacity-20  font-bold   
                    z-200  top-[150px] w-full xl:w-1/2 xl:mx-80 " >
                
                    <form  onSubmit={SubmitUser} className="flex flex-col justify-center p-10  text-sm 
                    transition-opacity duration-500 bg-gray-200 border-2 border-gray-300 text-black rounded-sm">
                    <button className=" bg-red-600 text-lg w-10 mx-60 xl:mx-auto text-center rounded-md
                                        text-slate-100 hover:scale-120 transition duration-300" onClick={() => dispatch(setAddFormStat(0))} >
                                           <FontAwesomeIcon icon={faXmark} />
                                       </button>
                        <div className="gap-4"><span className="block">FirstName</span>
                            <input className="w-full p-1 bg-white rounded-sm placeholder:pl-1"
                             placeholder="Enter FirstName" type="text" name="firstname" onChange={setForm} /></div>
                        <div className="mt-2 gap-4"><span className="block">LastName</span>
                            <input className="w-full p-1 bg-white rounded-sm placeholder:pl-1"
                             placeholder="Enter LastName" type="text" name="lastname" onChange={setForm}/></div>
                        <div className="mt-2 gap-4"><span className="block">Email</span>
                            <input className="w-full p-1 bg-white rounded-sm placeholder:pl-1"
                             placeholder="Enter Email" type="email" name="email" onChange={setForm}/></div>
                        <div className="mt-2 gap-4"><span className="block">Password</span>
                            <input className="w-full p-1 bg-white rounded-sm placeholder:pl-1"
                             placeholder="Enter Password" type="password" name="password" onChange={setForm}/></div>
                        <button className="flex justify-center bg-blue-800 p-1 px-2 m-4 mx-auto rounded-md text-white"
                          type="submit">Add User</button>
                    </form>

                </div>): (<div></div>)}

              <div className="flex justify-center items-center space-x-3   mx-auto">
                    <div className="flex flex-wrap mx-auto 
                    justify-center items-center  min-h-screen  gap-10 " >
                    <table className=" ">
                        <caption className="font-bold text-[14px] bg-gray-800 text-white rounded-md  py-3">User Management</caption>
                        <thead className="border-2">
                            <tr className="text-[10px] md:text-base lg:text-lg font-bold text-center border-2">
                                <th className="border-r-2 p-2" scope="col">UserName</th>
                                <th className="border-r-2" scope="col">Email</th>
                                <th className="border-r-2" scope="col">action</th>
                                <th className="border-r-2">Allow</th>
                            </tr>
                        </thead>
                        <tbody className="border-2">
                            {users.map(item => {
                                
                                return(
                <tr key={item.id} className=" text-center text-xs xl:text-lg border-2  font-bold">
                    <td className="border-r-2 px-2 xl:p-10">{item.permit !== "admin" ? item.firstname + " " + item.lastname : "Adminstrator"}</td>
                    <td className="border-r-2 px-2 xl:p-10">{item.email}</td>
                    <td className="border-r-2 px-2 xl:p-10">
                        <button className="p-1 px-2 bg-red-600 text-white   rounded-md m-2 "
                        onClick={() => dispatch(removeUser(item.id))}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <button className="p-1 px-2 bg-blue-600 text-white  rounded-md m-2 "
                        onClick={() => dispatch(setUpdateFormStat(item.id))}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                                    
                     </td>
                     <td className="border-r-2">
                            <button className="p-1 px-2 bg-red-600 text-white  text-base rounded-md m-2"
                            onClick={() => dispatch(setPermit(item.id))}>
                                <FontAwesomeIcon icon={faUserCheck} />
                            </button>       
                        <span className="p-2">{item.permit}</span>
                     </td>
                 
            </tr>

                
                                )

                })}
                        </tbody>
            </table>
            
        </div>
        
            </div>
            <div>
                 
                {formStat === 1 ? (
                    <div className=" fixed bg-gray-20 backdrop-invert backdrop-opacity-20  font-bold   
                                       z-200  top-[150px] w-full xl:w-1/2 xl:mx-80 " >
                                   
                                       <form   className="flex flex-col justify-center p-10  text-sm 
                                       transition-opacity duration-500 bg-gray-200 border-2 border-gray-300 text-black rounded-sm">
                                       <button className=" bg-red-600 text-sm w-10 mx-70 xl:mx-auto text-center rounded-md
                                        text-slate-100 hover:scale-120 transition duration-300" onClick={() => dispatch(resetFormStat())} >
                                           <FontAwesomeIcon icon={faXmark} />
                                       </button>
                        <h2 class="text-center mb-5"> Set User Permission <span class="text-red-800"> {} </span> ? </h2>
                        <div class="flex flex-row ">
                            <button class="flex  justify-center mx-auto bg-blue-800 p-1 px-2 m-4 rounded-md text-white"
                             onClick={() => dispatch(allowUser())} type="button">Allow</button>
                                 <button class="flex justify-center mx-auto bg-red-700 p-1 px-2 m-4 rounded-md text-white"
                            onClick={() => dispatch(denyUser())} type="button">Deny</button>
                        </div>
                    </form>
                </div>
                ) : (<div></div>)

                
        
                }
            </div> 
            <div>
                {users.map(item => {
                        return(
                            updateFormStat === 1 ? (
                     <div className=" fixed bg-gray-20 backdrop-invert backdrop-opacity-20  font-bold   
                    z-200  top-[150px] w-full xl:w-1/2 xl:mx-80 " >
                
                    <form  onSubmit={SubmitUpdate} className="flex flex-col justify-center p-10  text-sm 
                    transition-opacity duration-500 bg-gray-200 border-2 border-gray-300 text-black rounded-sm">
                    <button className=" bg-red-600 text-lg w-10 mx-60 xl:mx-auto text-center rounded-md
                                        text-slate-100 hover:scale-120 transition duration-300" onClick={() => dispatch(closeUpdateForm())} >
                                           <FontAwesomeIcon icon={faXmark} />
                                       </button>
                                        <div className="gap-4"><span className="block">FirstName</span>
                                            <input className="w-full p-1 bg-white rounded-sm placeholder:pl-1" placeholder="Enter your firstName" type="text" name="firstname" onChange={setUpdateForm} /></div>
                                        <div className="mt-2 gap-4"><span className="block">LastName</span>
                                            <input className="w-full p-1 bg-white rounded-sm placeholder:pl-1" placeholder="Enter your lastName" type="text" name="lastname" onChange={setUpdateForm} /></div>
                                        <div className="mt-2 gap-4"><span className="block">Email</span>
                                            <input className="w-full p-1 bg-white rounded-sm placeholder:pl-1" placeholder="Enter your email" type="email" name="email" onChange={setUpdateForm} /></div>
                                        <div className="mt-2 gap-4"><span className="block">Password</span>
                                            <input className="w-full p-1 bg-white rounded-sm placeholder:pl-1" placeholder="Enter your password" type="password" name="password" onChange={setUpdateForm} /></div>
                                        <button className="flex justify-center bg-blue-800 p-1 px-2 m-4 mx-auto rounded-md text-white"
                                         type="submit" onClick={() => dispatch(updateLog(item.id))}>Update Item</button>
                                    </form>
                    
                </div>): (<div></div>)

                        )
            
                }
            )}
            </div>
        </div>
            </div>
        </section>
        );
}

                                
