import myAxios from "../axios/axios"

const CATEGORY_ENDPOINT = process.env.REACT_APP_CATEGORY_ENDPOINT 
class CategoryService {
    getAllCategories(){
        return myAxios.get(CATEGORY_ENDPOINT)
    }

    getCategoryDescription(id){
        return myAxios.get(CATEGORY_ENDPOINT+"/"+id+"/description")
    }
}

export default new CategoryService();
