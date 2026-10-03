import { useDispatch, useSelector } from "react-redux";
import { addToCart,  removeItem  ,addFav , removeFav , countIncrease , countDecrease } from "../redux/productControl"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function CartPage() {
    const dispatch = useDispatch()
    const {addedProducts , favProducts , count} = useSelector(state => state.productCtrl)

    return (
        <section>
            <div className="flex flex-wrap mx-auto  pt-40 pb-10
            justify-center items-center  min-h-screen  gap-10 ">
                {
                    addedProducts.map( item => {
                        const choosenItem = addedProducts.find(i => i.id === item.id)
                        const checkFav = favProducts.some(btn => btn.id === item.id)

                        return (
                            <div className=" relative p-6 bg-slate-200/80 rounded-md hover:shadow-xl hover:scale-105 transition duration-300 " key={item.id}>
                                                <img className="w-full h-70 mx-auto " src={item.imgSrc} alt="productImage" />
                                                    <div className="flex flex-col  mx-auto py-5 font-bold text-left  gap-y-2 ">
                                                        <h2 className="text-lg font-bold">{item.title}</h2>
                                                        <span className="text-sm">Color : {item.color}</span>
                                                        <p className="text-sm">Price : {item.price}.LE</p>
                                                    </div>
                                                    <p className="  absolute ml-[190px] bottom-[130px] space-x-2 font-bold ">
                                                                <button className="border border-1 px-[5px] md:px-[8px] " 
                                                                 onClick={() => dispatch(countDecrease(item.id))}>-</button>
                                                                <span className="w-5  ">{count[item.id]}</span>
                                                                <button className="border border-1 px-[5px] md:px-[8px] "
                                                                 onClick={() => dispatch(countIncrease(item.id))}>+</button>      
                                                                                                 
                                                    </p>
                                        
                                                    <div className="flex gap-5  items-center justify-center">

                                                            <button  className="rounded-md  py-1 px-4  font-bold bg-red-700 text-white hover:bg-red-800 hover:text-white
                                                              transition duration-300" onClick={() => dispatch(removeItem(item.id))}>
                                                                Remove From Cart
                                                            </button>
                                                {!checkFav ? ( <button className="text-2xl" onClick={() => dispatch(addFav(item.id))}>
                                                        <FontAwesomeIcon icon={faHeart} />
                                                    </button>
                            
                                                   ) : ( <button className="text-red-600 text-2xl" onClick={()=> dispatch(removeFav(item.id))}>
                                                        <FontAwesomeIcon icon={faHeart} />
                                                    </button>)}
                                                        </div>
                            
                                                
                                            </div>
                                            
                        )
                    }
                    )
                }
                <span className="w-full bg-slate-100 text-slate-900 text-center font-bold">
                    {"Total Price : " + addedProducts.map(item => item.price * count[item.id]).reduce((acc , current) => acc + current ,0 )  + ".LE"}
                </span>
            </div>

            <div className="flex flex-wrap mx-auto  pt-40 pb-10
            justify-center items-center  min-h-screen  gap-10 ">
                {favProducts.map(item => {
                    const checkBtn = addedProducts.some(btn => btn.id === item.id)
                    const checkFav = favProducts.some(btn => btn.id === item.id)
            return ( 
                <div className=" p-6 bg-slate-200/80 rounded-md hover:shadow-xl hover:scale-105 transition duration-300 " key={item.id}>
                    <img className="w-full h-70 mx-auto " src={item.imgSrc} alt="productImage" />
                        <div className="flex flex-col px-20 mx-auto py-5 font-bold text-left  gap-y-2 ">
                            <h2 className="text-lg font-bold">{item.title}</h2>
                            <span className="text-sm">Color : {item.color}</span>
                            <p className="text-sm">Price : {item.price}.LE</p>
                        </div>
                        <div className="flex flex-row justify-center">
                            <div className=" ">
                           
                            {!checkBtn ? (
                                <button className="rounded-md  py-1 px-4 font-bold bg-black text-white hover:bg-gray-900  
                                 transition duration-300" onClick={() => dispatch(addToCart(item.id))}>
                                    Add to Cart
                                </button>
                            ) : (
                                <button  className="rounded-md  py-1 px-4  font-bold bg-red-700 text-white hover:bg-red-800 hover:text-white
                                  transition duration-300" onClick={() => dispatch(removeItem(item.id))}>
                                    Remove From Cart
                                </button>
                            )}                        
                            </div>

                            <div className="pt-[2px]">
                                {!checkFav ? (
                                <button onClick={() => dispatch(addFav(item.id))}>
                                    <FontAwesomeIcon icon={faHeart} className="text-black text-xl md:text-2xl ml-2 md:ml-4" />
                                </button>

                                ):(<button onClick={() => dispatch(removeFav(item.id))}>
                                    <FontAwesomeIcon icon={faHeart} className="text-red-700  text-xl md:text-2xl ml-2 md:ml-4" />
                                </button>)}
                            </div>
                        </div>
                </div>
                
                )
}
                )}            
            </div>
        </section>
    );
}
