import './index.css'
import ListBlogs from '../ListBlogs'

const LatestBlogs = ({ blogs }) => {

    return (
        <div className="latest-blog mt-5">
            <h3><span>Bài viết mới</span></h3>

            <div className="mt-5">
                <ListBlogs blogs={blogs} isSmallBlog={true}/>
            </div>
        </div>

    )
}

export default LatestBlogs