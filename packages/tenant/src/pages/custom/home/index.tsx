import { useState } from "react";
import Cart from "../components/Cart";
import MyDialog from "../components/MyDiaglog";
import Nav from "../components/Nav";
import Product from "../components/Product";


const Home = () => {
    const [show, setShow] = useState(true)
    const openCart = () => {
        setShow(true)
    }
    const onClose = (val) => {
        setShow(false)
        console.log(val);
    }
    return (
        <div>
            {/* <button >open</button> */}
            {/* <Nav openCart={openCart} /> */}
            <MyDialog />
            {/* <Cart open={show} onClose={onClose} />
            <Product /> */}
        </div>
    );
}
export default Home