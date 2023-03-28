import './index.css'

const CategoryDescription = ({title,description}) =>{

    return (
        <div className="blog-description container-fluid justify-content-center p-5">
            <h2><b>{title}</b></h2>
            <h3>{description}</h3>
        </div>
    )
}
export default CategoryDescription;