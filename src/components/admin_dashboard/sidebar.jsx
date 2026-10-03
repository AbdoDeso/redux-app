import { Link } from "react-router-dom";
 function Sidebar() {
    

    return (
    <div className="relative size-6 pt-5  ">

        <aside className="bg-gray-800 flex  text-center justify-center fixed bottom-0 left-0 w-full z-200">
            <ul className=" ml-8 p-2 grid grid-cols-3 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-3 lg:gap-6
             xl:grid-cols-3 xl:gap-8 2xl:grid-cols-3 2xl:gap-10">
                <li className=" text-white  font-bold p-2 cursor-pointer hover:text-gray-400  hover:scale-104">
                    <a className="text-center text-[8px] md:text-base cursor-pointer border-y-3     
                         bg-gray-100 p-2  text-red-800 font-bold rounded-lg  hover:scale-108 transition duration-300">Admin Dashboard</a>    
                </li>
                    <li className=" text-white font-bold p-2 cursor-pointer hover:text-gray-400 hover:scale-104
                     text-lg border-2 border-amber-50 transition duration-300" >
                    <Link to={'/admin'}>Products</Link></li>
                <li className="text-white font-bold p-2 cursor-pointer hover:text-gray-400  hover:scale-104
                text-lg border-2 border-amber-50 transition duration-300">
                    <Link to={'/users'} >Users</Link></li>
            </ul>
            
        </aside>
    </div>
    );
}

export default Sidebar;