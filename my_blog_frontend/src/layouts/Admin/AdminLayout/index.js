import Header from "../components/Header"
import Footer from "../components/Footer"

const AdminLayout = ({children}) =>{
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
    
}
export default AdminLayout