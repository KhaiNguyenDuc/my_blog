import SideSection from "../../../components/SideSection"
import BlogDetail from "../../../components/BlogDetail"
const Blog = () =>{
    const latestBlogs = [
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
        },
        {
            id: 3,
            title: 'This is title 2',
            author: 'Nguyen Duc Khai 2',
            createAt: "28/03/2023",
            totalComment: 1,
            subTitle: "This is sub title for this blog 2"
        },
        {
            id: 4,
            title: 'This is title 2',
            author: 'Nguyen Duc Khai 2',
            createAt: "28/03/2023",
            totalComment: 1,
            subTitle: "This is sub title for this blog 2"
        },
        {
            id: 5,
            title: 'This is title 2',
            author: 'Nguyen Duc Khai 2',
            createAt: "28/03/2023",
            totalComment: 1,
            subTitle: "This is sub title for this blog 2"
        },
        {
            id: 6,
            title: 'This is title 2',
            author: 'Nguyen Duc Khai 2',
            createAt: "28/03/2023",
            totalComment: 1,
            subTitle: "This is sub title for this blog 2"
        }
    ]

    const user = {
        fullName:"Nguyễn Đức Khải",
        description:"Mô tả cho user Nguyễn Đức Khải siêu cấp đẹp trai nè mọi người ơi"
    }

    const blog ={
        title: "Blog đầu tiên của tôi",
        createAt: "28/03/2023",
        image: "https://atpcontent.vn/wp-content/uploads/2021/11/Blogging.jpg"
    }
    return (

        <div className="row container-fluid justify-content-center mt-5">

        <div className="col-6">
            <BlogDetail blog={blog}/>
        </div>
        <div className="col-2">
            <SideSection user={user} latestBlogs={latestBlogs}/>
        </div>
        
    </div>

    )
}
export default Blog