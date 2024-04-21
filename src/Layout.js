import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="flex justify-center p-6 bg-gradient-to-r from-cyan-500 to-blue-500">
            <nav className="flex justify-between items-center">
                <ul className="flex space-x-80">
                    <li className="">
                        <Link to="/">
                            <div className="p-4 bg-gray-300 rounded-md hover:animate-bounce border-4 hover:border-black">
                                <strong>Home</strong>    
                            </div>
                            
                        </Link>
                    </li>
                    <li className="">
                        <Link to="/notes">
                            <div className="p-4 bg-gray-300 rounded-md hover:animate-bounce border-4 hover:border-black">
                                <strong>Notes</strong>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
            </div>

            <Outlet/>
        </>

    )
}

export default Layout;