import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const ClientLayout = ({children}) =>{
    return (
            < >
                <Navbar/>
                    <div className="mt-3">
                        {children}
                    </div>
                <Footer />
            </>
    )
}

export default ClientLayout