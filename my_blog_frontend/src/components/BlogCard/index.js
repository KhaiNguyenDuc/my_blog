import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './index.css';
import {ConvertTimeStamp} from "../../utils/index"
const BlogCard = ({ blog }) => {


    var createdAt = ConvertTimeStamp(blog.createdAt)

    return (

        <div className="card mb-5">

            <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">Tác giả <span>{blog.createBy}</span>
                &nbsp;&nbsp;<FontAwesomeIcon icon={['fas', 'clock']} />&nbsp;&nbsp;{createdAt}
                &nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={['fas', 'comment']} />&nbsp;&nbsp;{blog.commentCount}</p>
                <Link to='/blog' >
                    <img className="img-fluid" src='https://www.visitbigsky.com/sites/default/files/styles/scale_1440/public/2021-04/The%20Mountain.jpg?itok=vW-O3W3X' alt="product" />
                </Link>

                <p className="pt-3">{blog.description}</p>
                <Link to="/blog" className="btn btn-primary">Chi tiết</Link>
            </div>
        </div>





    )
}

export default BlogCard;