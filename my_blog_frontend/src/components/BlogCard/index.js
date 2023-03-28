import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './index.css'
const BlogCard = ({ blog }) => {

    return (

        <div className="card mb-5">

            <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">Tác giả <span>{blog.author}</span>
                &nbsp;&nbsp;<FontAwesomeIcon icon={['fas', 'clock']} />&nbsp;{blog.createAt}
                &nbsp;<FontAwesomeIcon icon={['fas', 'comment']} />&nbsp;{blog.totalComment}</p>
                <Link to='/blog' >
                    <img className="img-fluid" src='https://www.visitbigsky.com/sites/default/files/styles/scale_1440/public/2021-04/The%20Mountain.jpg?itok=vW-O3W3X' alt="product" />
                </Link>

                <p className="pt-3">{blog.subTitle}</p>
                <Link to="/blog" className="btn btn-primary">Chi tiết</Link>
            </div>
        </div>





    )
}

export default BlogCard;