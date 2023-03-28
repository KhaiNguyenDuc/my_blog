import UserInfo from "../UserInfo"
import LatestBlogs from "../LatestBlogs"

const SideSection = ({user, latestBlogs}) =>{
    return (
        <>
            <UserInfo user={user} />
            <LatestBlogs blogs={latestBlogs}/>
        </>
    )
}

export default SideSection