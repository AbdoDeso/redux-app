import { useDispatch, useSelector } from "react-redux";
import { countDecrease, countIncrease} from "../redux/productControl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { resetStat } from "../redux/userControl";

export default function Navbar() {
        const dispatch = useDispatch()
        const {addedProducts , count} = useSelector(state => state.productCtrl) 
        const {signinDone} = useSelector(state => state.userCtrl) 

        

    return (
        <header className="fixed w-full z-200">
                <div className=" p-4 bg-slate-50  shadow-xl">
                    <nav className="container flex flex-row mx-auto gap-x-3 justify-between items-center">
                        <div className="flex flex-row text-center gap-x-3 items-center">
                            <h1 className=" hover:scale-108 transition duration-300">
                                <Link to={'/'} className="font-bold text-xs md:text-base lg:text-xl text-gray-700 
                                outline-6 outline-gray-700 hover:outline-slate-100/10 transition duration-300 p-2 mr-4 " href="index.html">
                                    Aura
                                </Link></h1>
                            <h2 className=" hidden md:flex w-50 "><a className="text-center font-bold text-xs md:text-base cursor-pointer border-y-3
                            text-gray-800 font-bold rounded-lg  hover:scale-108 transition duration-300">Mobile Store</a> </h2>
                        </div>
            
                        <div  className="flex flex-wrap text-center justify-center mx-auto mt-2 ">
                            
                            {signinDone == 0 ? 
                            <ul className=" flex flex-row gap-5 font-bold ml-15 sm:ml-73 md:ml-57 lg:ml-110 xl:ml-180" id="user_info">
                                <li id="link1" className="relative group  font-bold cursor-pointer border border-2 p-2 hover:scale-110 hover:border-slate-100/10 transintion duration-300" > 
                                    <Link to={'/login'}>
                                        Login
                                    </Link>
                                </li>
                            <li id="link2" className="relative group  font-bold  cursor-pointer border border-2 p-2 hover:scale-110 hover:border-slate-100/10 transintion duration-300" >
                                <Link to={'/register'}>
                                    Signup
                                </Link>
                            </li>
                            </ul>
                        :  <ul className="flex flex-row gap-3 font-bold ml-0 sm:ml-73 md:ml-57 lg:ml-110 xl:ml-180" id="user_info">
                               <li>
                                {signinDone == 2 ? (
                                    <div className="mt-2">
                                <Link to={'/admin'} className="bg-red-800 p-2   text-white font-bold rounded-md">
                                    <span className="text-xs">Admin Page</span>
                                </Link>
                            </div>
                                ) :
                                (<div></div>)

                                }
                               </li>

                                <li>
                                    <a className="relative group 
                                    font-bold text-gray-700  cursor-pointer transition duration-300" id="user">
                                    <span className="absolute inset-0 border-b-3 origin-left-right z-1 top-6
                                    scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100"></span>
                                    </a>
                                </li>

                        {/* cart section */}
                                <details className="relative">
                                        <summary id="showCartIcon" className=" relative list-none  cursor-pointer">
                                          <FontAwesomeIcon icon={faCartPlus} className="relative text-4xl text-blue-800 transition duration-300" />
                                            <span id="itemsCount" className="absolute bg-red-600 rounded-full px-1 ml-[-17px] mt-[-10px] text-xs "></span>                             
                                        </summary>
                                    <div id="cartSpace" className="  h-auto absolute p-2  mt-10 right-[-100px]
                                    transition-opacity duration-500 bg-slate-500 border-2 border-gray-300 text-black rounded-sm">
                                        <div>
                                            <p className="w-30 mt-2 rounded-3xl mx-auto p-2 bg-gray-900 text-white">Cart List</p>
                                            <div className="w-50 h-33 sm:h-30 md:h-25 lg:h-55 overflow-y-scroll 
                                            scrollbar-thumb-gray-800 scrollbar-thin mb-2">
                                                
                                                {
                                                    addedProducts.map(item => {
                                                    const choosenItem = addedProducts.find(i => i.id === item.id)
                                                    
                                                return (
                                                    <div  className=" w-45 bg-gray-900 py-5 text-white rounded-md  mx-auto my-2 text-xs">
                                                            <p className="flex justify-between ml-3 text-xs">
                                                                <span>{choosenItem.title}</span>
                                                             </p>
                                                        <p className="relative space-x-2 mr-17 mt-2  ">
                                                            <button className="border border-1 px-[5px] md:px-[8px] text-sm" 
                                                             onClick={() => dispatch(countDecrease(item.id))}>-</button>
                                                            <span className="w-5 text-sm ">{count[item.id]}</span>
                                                            <button className="border border-1 px-[5px] md:px-[8px] text-sm"
                                                             onClick={() => dispatch(countIncrease(item.id))}>+</button>      
                                                            
                                                            <span className="absolute ml-3">{choosenItem.price * count[item.id]}.LE</span>
                                 
                                                        </p>
                                                    </div>
                                                )
                                                    })
                                                }
                                        
                                            </div>
                                        </div>
                                        <Link to={'/cart'} className="" href="cartPage.html">
                                            <button className=" cursor-pointer bg-gray-900 text-gray-100 text-sm p-2 my-4 rounded-2xl" >View All Products</button>
                                        </Link>
                                    </div>
                                </details>

                        {/* end cart section */}
                                <li>
                                    <button className=" relative group overflow-hidden font-bold text-red-400 border border-2 border-red-400 p-2
                                    hover:cursor-pointer transition duration-300" onClick={() => dispatch(resetStat())}>
                                    Log Out
                                    </button>
                                </li>
                            
                            </ul>
}
                        </div>
                    </nav>
                </div>
            </header>   
    );
}