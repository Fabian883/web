import Header from "../Component/Header"
import {BiSearch, BiCart} from "react-icons/bi"

function Home(){
    return(
        <>
            <Header/>
            <div className="flex px-4 md: px-8 lg:px-20 py-4">
                <div className="w-1/2">
                    <Logo />
                    <img 
                        className= "w-20 h-20"
                        alt="Logo" 
                        src="https://bit.ly/logo-ci0137"
                    />
                </div>
                <div className="w-1/2 flex gap-3 items-center justify-end">
                    <p>¡Bienvenido</p>
                    <BiSearch className="cursor-pointer"/>
                    <BiCart className="cursor-pointer"/>
                </div>
            </div>
        </>
    );
}

export default Home;