import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
const Head = () => {
    return (
        <div className="row d-flex justify-content-between border-bottom container-fluid">
            <div className="col-3">
                <Link className="p-2 navbar-icon-link" to=''><FontAwesomeIcon icon={['fab', 'facebook']} size='2x' /></Link>
                <Link className="p-2 navbar-icon-link" to=''><FontAwesomeIcon icon={['fab', 'github']} size='2x' /></Link>
                <Link className="p-2 navbar-icon-link" to=''><FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' /></Link>
            </div>
            <div className="col-6">
                <h1>Đây là Logo</h1>
            </div>
            <div className="col-3 d-flex" >
                <Link to="/auth/login" className='p-2 navbar-icon-link'>
                    <FontAwesomeIcon icon={['fas', 'lock']} /> 
                    <p className='p-2 d-inline'>Đăng nhập</p>
                </Link>
                <Link to="/auth/register" className='p-2 navbar-icon-link'>
                    <FontAwesomeIcon icon={['fas', 'cash-register']} /> 
                    <p className='p-2 d-inline'>Đăng ký</p>
                </Link>

            </div>
        </div>
    )
}
export default Head;