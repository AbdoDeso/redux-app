import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/userControl"
import { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {users , signinDone ,UserCheck} = useSelector(state => state.userCtrl)    
    const [userForm , setuserForm] = useState({ email : '' , password : '' })

        const setForm = (e) => {
            setuserForm(prev => ({...prev , [e.target.name] : e.target.value }))
        }

        const onSubmit = (e)=> {
            e.preventDefault()
            dispatch(login(userForm))
        }
        useEffect(()=>{
            if(signinDone == 1){
            navigate("/")
        }
           if(signinDone == 2){
            navigate("/admin")
        }
        },[signinDone] )
        
       useEffect(()=>{
        if(signinDone == 1){
            navigate("/")
        }
       })

    return (
        <section className="flex lg:pt-10  justify-center items-center min-h-screen">
        
            <form onSubmit={onSubmit} className="flex flex-col w-200 min-h-screen md:min-w-screen lg:min-w-fit lg:min-h-full pb-5 sm:pt-20 lg:pt-10 mx-auto
             justify-center items-center bg-gray-200 text-center text-sm  md:text-lg lg:text-base
            font-bold text-gray-600 space-y-4 lg:space-y-3 md:rounded-md lg:border-1 lg:border-gray-400 shadow-2xl">

                <h2 className="w-70  rounded-2xl  text-shadow-md mb-6">Enter Login Details</h2>

                <div className="flex flex-col sm:flex-row xl:flex-col gap-8">

                    <div className="space-y-1">
                        <h2 className="flex text-shadow-md items-left">Email</h2>
                        <input className="w-67 h-7 xl:w-180 bg-gray-100 pl-2  border-1 border-gray-400 
                        placeholder:text-gray-500 placeholder:text-sm outline-gray-500"
                         type="email" placeholder="Enter Email Address" name="email" onChange={setForm} /></div>

                    <div className=" space-y-1 ">
                        <h2 className="flex  text-shadow-md items-left">Password</h2>
                        <input className="w-67 h-7 xl:w-180 bg-gray-100 pl-2  border-1 border-gray-400 
                        placeholder:text-gray-500 placeholder:text-sm outline-gray-500"
                         type="password" placeholder="Enter Password" name="password" onChange={setForm} /></div>
                </div>

                <button onClick={() => dispatch(login(UserCheck))} 
                 className="w-20 mt-3 rounded-md text-white bg-gray-800" type="submit">Login</button>
                <Link to={'/register'} className="text-shadow-sm" href="register.html">Or Signup Now</Link>

            </form>
        
        
    </section>
        
    );
}
