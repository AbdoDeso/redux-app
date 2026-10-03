import { useDispatch, useSelector } from "react-redux";
import {addUser , resetStat} from "../redux/userControl"
import { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {users ,signupDone, signinDone} = useSelector(state => state.userCtrl)    
 
        const [userForm , setuserForm] = useState({firstName : '' , lastName : '' , email : '' , password : '' })

        const setForm = (e) => {
            setuserForm(prev => ({...prev , [e.target.name] : e.target.value }))
        }

        const onSubmit = (e)=> {
            e.preventDefault()
            dispatch(addUser(userForm))
        }
    
        const redirect = () => {
        
                navigate('/login')
                dispatch(resetStat())
                
        }
        
           useEffect(()=>{
             if(signinDone == 1){
                 navigate("/")
             }
            })
    return (
        <section className="relative flex lg:pt-10  justify-center items-center min-h-screen">
        
            <form onSubmit={onSubmit} className="flex flex-col w-200 min-h-screen md:min-w-screen lg:min-w-fit lg:min-h-full pb-5 sm:pt-20 md:pt-25 lg:pt-10 mx-auto
             justify-center items-center bg-gray-200 text-center text-sm  md:text-lg lg:text-base
            font-bold text-gray-600 gap-4 md:gap-1 lg:gap-2 md:rounded-md lg:border-1 lg:border-gray-400 shadow-2xl" action="">

                <h2 className="w-70  rounded-2xl  text-shadow-md mb-10">Enter Registeration Details</h2>

                <div className="flex flex-col sm:flex-row gap-2">
                   <div className="space-y-1 sm:inline">
                        <h2 className="flex text-shadow-md items-left">FirstName</h2>
                        <input className="w-67 h-7 xl:w-90 bg-gray-100 pl-2  border-1 border-gray-400 
                        placeholder:text-gray-500 placeholder:text-sm outline-gray-500"
                         type="text" placeholder="Enter FirstName" name="firstName" value={userForm.firstName} onChange={setForm} /></div>

                    <div className=" space-y-1 ">
                        <h2 className="flex  text-shadow-md items-left">LastName</h2>
                        <input className="w-67 h-7 xl:w-90 bg-gray-100 pl-2  border-1 border-gray-400 
                        placeholder:text-gray-500 placeholder:text-sm outline-gray-500"
                         type="text" placeholder="Enter LastName" name="lastName"  value={userForm.lastName} onChange={setForm} /></div>
                </div>
                <div className="flex  flex-col sm:flex-row xl:flex-col gap-2">

                     <div className="space-y-1">
                            <h2 className="flex text-shadow-md items-left">Email</h2>
                            <input className="w-67 h-7 xl:w-180 bg-gray-100 pl-2  border-1 border-gray-400 
                        placeholder:text-gray-500 placeholder:text-sm outline-gray-500"
                             type="email" placeholder="Enter Email Address" name="email" value={userForm.email} onChange={setForm} /></div>
                    
                        <div className=" space-y-1 ">
                            <h2 className="flex  text-shadow-md items-left">Password</h2>
                            <input className="w-67 h-7 xl:w-180 bg-gray-100 pl-2  border-1 border-gray-400 
                                placeholder:text-gray-500 placeholder:text-sm outline-gray-500"
                                 type="password" placeholder="Enter Password" name="password"  value={userForm.password} onChange={setForm}/></div>
                </div>
                             <button className="w-20 mt-3 rounded-md text-white bg-gray-800" type="submit">Register</button>
                <Link to={'/login'} className="text-shadow-sm" href="login.html">Or Login Now</Link>

            </form>
            
            {signupDone == 1 ? (
            <div className=" absolute bg-white/30 backdrop-invert backdrop-opacity-20 backdrop-opacity-10 font-bold left-[-0px] top-[-0px]
                             h-full w-full fixed z-100"
                                id="AllowUserForm-${item.id}">

                <div className="flex flex-col w-150 p-10 m-90 mx-auto
             justify-center items-center bg-gray-200 text-center text-sm  md:text-lg lg:text-base
            font-bold text-gray-600 gap-4 md:gap-1 lg:gap-2 md:rounded-md lg:border-1 lg:border-gray-400 shadow-2xl">
                    <span className="">Registeration Success</span>
                    <button className="bg-blue-600 text-slate-100 p-2" onClick={() => redirect()} >OK !</button>    
                </div>
            </div>
                ):(<div></div>)}                        
        
    
    </section>
    );
}
