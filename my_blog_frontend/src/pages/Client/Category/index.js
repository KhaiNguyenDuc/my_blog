import CategoryDescription from "../../../components/CategoryDescription";
import ListBlogs from "../../../components/ListBlogs";
import LatestBlogs from "../../../components/LatestBlogs";
const Category = () => {


    const blogs = [
        {
            id: 1,
            title: 'This is title',
            author: 'Nguyen Duc Khai',
            createAt: "28/03/2023",
            totalComment: 3,
            subTitle: "This is sub title for this blog"
        },
        {
            id: 2,
            title: 'This is title 2',
            author: 'Nguyen Duc Khai 2',
            createAt: "28/03/2023",
            totalComment: 1,
            subTitle: "This is sub title for this blog 2"
        }
    ]

    return (
        <>

            <CategoryDescription title="Title đây" description="this is descritpion" />

            <div className="row container-fluid justify-content-center mt-5">

                <div className="col-6">
                    <ListBlogs blogs={blogs} isSmallBlog={false} />
                </div>
                <div className="col-2">
                    <LatestBlogs blogs={blogs}/>
                </div>
            </div>



        </>

    )
}

export default Category;