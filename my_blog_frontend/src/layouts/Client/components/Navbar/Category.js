import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import CategoryService from "../../../../services/CategoryService"
const Category = () => {
    const CATEGORY_ENDPOINT = process.env.REACT_APP_URL_CATEGORIES 
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getAllCategories()
    },[])


    const getAllCategories = async () =>{
        try{
            const response = await CategoryService.getAllCategories()
            setCategories(response.data)
        }
        catch(error){
            console.log(error)
        }
        
    }

    const listCategories = categories.map(category => {
        return (
            <Link to={CATEGORY_ENDPOINT+"/"+category.id} className="navbar-category-link">
                <li key={category.id} className="p-2">
                    <b>{category.name}</b>
                </li>
            </Link>
        )
    })
    return (
        <ul className="d-flex justify-content-center container-fluid">
            {listCategories}

        </ul>
    )
}
export default Category