import { Link } from "react-router-dom"
const Category = () => {

    const categories = [
        {
            id: 1,
            name: "Thủ thật"
        },
        {
            id: 2,
            name: "Machine learning"
        },
        {
            id: 3,
            name: "Blog"
        },
        {
            id: 4,
            name: "Đời sống"
        }
    ]

    const listCategories = categories.map(category => {
        return (
            <Link to='' className="navbar-category-link">
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