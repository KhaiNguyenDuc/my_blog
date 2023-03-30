import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './index.css';
import {ConvertTimeStamp} from "../../utils/index"
const SmallBlogCard = ({ blog }) => {

    var createdAt = ConvertTimeStamp(blog.createdAt)

    return (

        <div className="card mb-5">

            <div className="card-body">
            <h6 className="card-title">{blog.title}</h6>
                <Link  to='/' >
                    <img className="img-fluid" src='https://www.visitbigsky.com/sites/default/files/styles/scale_1440/public/2021-04/The%20Mountain.jpg?itok=vW-O3W3X' alt="product" />
                </Link>
                <div className="mt-2"> <FontAwesomeIcon icon={['fas', 'clock']} /> &nbsp;{createdAt}</div> 
            </div>
        </div>





    )
}

export default SmallBlogCard;