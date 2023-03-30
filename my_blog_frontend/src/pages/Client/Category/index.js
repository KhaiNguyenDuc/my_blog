import { useEffect, useState } from "react";
import CategoryDescription from "../../../components/CategoryDescription";
import ListBlogs from "../../../components/ListBlogs";
import SideSection from "../../../components/SideSection";
import BlogService from "../../../services/BlogService";
import { useParams } from "react-router-dom";
import CategoryService from "../../../services/CategoryService";

const Category = () => {
    
    const [blogs,setBlogs] = useState([])
    const { id } = useParams()
    const [latestBlogs,setLatesBlogs] = useState([])
    const [cateDescription,setCateDescription] = useState([])
    useEffect(() => {
        getBlogsByCategoryId(id)
        getCategoryDescription(id)
        getLatestBlogs()
    },[id])


    const getBlogsByCategoryId = async (id) =>{
        try{
            const response = await BlogService.getBlogsByCategoryId(id)
            setBlogs(response.data)
        }catch (error){
            console.log(error)
        }
        
    }

    const getLatestBlogs = async () =>{
        try{
            const response = await BlogService.getLatestBlogs()
            setLatesBlogs(response.data)
        }catch (error){
            console.log(error)
        }
        
    }

    const getCategoryDescription = async (id) => {
        try{
            const response = await CategoryService.getCategoryDescription(id)
            setCateDescription(response.data)
        }catch (error){
            console.log(error)
        }
    }

    const user = {
        fullName:"Nguyễn Đức Khải",
        description:"Mô tả cho user Nguyễn Đức Khải siêu cấp đẹp trai nè mọi người ơi"
    }

    return (
        <>

            <CategoryDescription title={cateDescription.title} description={cateDescription.description} />

            <div className="row container-fluid justify-content-center mt-5">

                <div className="col-6">
                    <ListBlogs blogs={blogs} isSmallBlog={false} />
                </div>
                <div className="col-2">
                    <SideSection user={user} latestBlogs={latestBlogs}/>
                </div>
                
            </div>



        </>

    )
}

export default Category;