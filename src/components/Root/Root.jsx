import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div>
           
            <section className="max-w-6xl mx-auto">
            <Header></Header>
                <Outlet></Outlet>
            </section>
        
                <Footer></Footer>
        </div>
    );
};

export default Root;