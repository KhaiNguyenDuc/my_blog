import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
const Head = () =>{
return (
    <div className="row d-flex justify-content-between border-bottom container-fluid">
        <div className="col-2">
            <Link className="p-2 navbar-icon-link" to=''><FontAwesomeIcon icon={['fab', 'facebook']} size='2x'/></Link>
            <Link className="p-2 navbar-icon-link" to=''><FontAwesomeIcon icon={['fab', 'github']}  size='2x'/></Link>
            <Link className="p-2 navbar-icon-link" to=''><FontAwesomeIcon icon={['fab', 'linkedin']}  size='2x'/></Link>
        </div>
        <div className="col-8">
            <h1>Logo Here</h1>
        </div>
        <div className="col-2 d-flex" >
            <Link className='p-2 navbar-icon-link'><FontAwesomeIcon icon={['fas', 'lock']}/></Link>
            <p className='p-2'>Login</p>
        </div>
    </div>
)
}
export default Head;