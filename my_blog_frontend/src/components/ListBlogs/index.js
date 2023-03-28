import BlogCard from "../BlogCard"
import SmallBlogCard from "../SmallBlogCard";
const ListBlogs = ({ blogs, isSmallBlog }) => {
    var listBlogs = "";
    if(isSmallBlog===false){
        listBlogs = blogs.map(blog => {
            return (
    
                <BlogCard blog={blog} key={blog.id} />
    
            )
        })
    
    }else{
        listBlogs = blogs.map(blog => {
            return (
    
                <SmallBlogCard blog={blog} key={blog.id} />
    
            )
        })
    }
 
   
    return (
        <>
            {listBlogs}


        </>
    )
}
export default ListBlogs