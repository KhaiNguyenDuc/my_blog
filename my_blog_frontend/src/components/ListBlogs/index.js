import BlogCard from "../BlogCard"
import SmallBlogCard from "../SmallBlogCard";
const ListBlogs = ({ blogs, isSmallBlog }) => {
    let listBlogs = [];

    if(blogs ){


        if(isSmallBlog===false && blogs.content){
            listBlogs = blogs.content.map((blog,index) => {
                
                return (
                    
                    <BlogCard blog={blog} key={index} />
        
                )
            })
        
        }else{

            
            listBlogs = blogs.map((blog,index) => {
                return (
        
                    <SmallBlogCard blog={blog} key={index} />
        
                )
            })
        }
     
    }
   
   
    return (
        <>
            {listBlogs}
        </>
    )
}
export default ListBlogs