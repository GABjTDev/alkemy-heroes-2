import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/Navbar";

const Layout = () => {
    return (
        <div className="pb-5">
            <Navbar />

            <Outlet />
        </div>
    )
}

export default Layout
