import './index.css'
import ListBlogs from '../ListBlogs'

const LatestBlogs = ({ blogs }) => {

    return (
        <div className="latest-blog">
            <h3><span>Bài viết mới</span></h3>

            <div>
                <ListBlogs blogs={blogs} isSmallBlog={true}/>
            </div>
        </div>

    )
}

export default LatestBlogs