import Cart from "@/components/Cart";
import Nav from "@/components/Nav";
import { useState } from "react"
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    const [show, setShow] = useState(false)
    const openCart = () => {
        setShow(true)
    }
    const onClose = () => {
        setShow(false)
    }

    return (
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <Nav openCart={openCart} />
            <Cart open={show} onClose={onClose} />
            <Outlet />
        </div>
    );
}

export default DefaultLayout