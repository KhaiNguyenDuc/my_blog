import myAxios from "../axios/axios"

const BLOG_ENDPOINT = process.env.REACT_APP_BLOG_ENDPOINT  
const LATEST_BLOG_ENDPOINT = process.env.REACT_APP_LATEST_BLOG_ENDPOINT
const CATEGORY_ENDPOINT = process.env.REACT_APP_CATEGORY_ENDPOINT 
class BlogService {
    getBlogs(){
        return myAxios.get(BLOG_ENDPOINT);
    }   

    getLatestBlogs(){
        return myAxios.get(BLOG_ENDPOINT+LATEST_BLOG_ENDPOINT);
    }   

    getBlogsByCategoryId(categoryId){
        return myAxios.get(CATEGORY_ENDPOINT+"/"+categoryId+"/blogs")
    }
}

export default new BlogService();
