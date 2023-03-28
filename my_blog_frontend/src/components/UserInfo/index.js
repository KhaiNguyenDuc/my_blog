import { Link } from "react-router-dom"
import "./index.css"
const UserInfo = ({user}) => {



    return (
        <div className="user-info">
            <h3><span>Tác giả</span></h3>
            <Link>
                <img className="img-fluid mt-5" src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=893"/> 
            </Link>
           <p className="mt-3">{user.fullName}</p>
           <p>{user.description}</p>
        </div>
    )
}

export default UserInfo