import "./index.css"
import PostComment from "../PostComment"
const Comment = () => {
    return (
        <>
            <div >

                <div>
                    <h3><span>Bình luận</span></h3>
                    <hr />
                    <ul className="comments">
                        <li className="clearfix">
                            <img src="https://bootdey.com/img/Content/user_1.jpg" className="avatar" alt />
                            <div className="post-comments">
                                <p className="meta">Dec 18, 2014 <a href="#">JohnDoe</a> says : <i className="pull-right"><a href="#"><small>Reply</small></a></i></p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Etiam a sapien odio, sit amet
                                </p>
                            </div>
                        </li>
                        <li className="clearfix">
                            <img src="https://bootdey.com/img/Content/user_2.jpg" className="avatar" alt />
                            <div className="post-comments">
                                <p className="meta">Dec 19, 2014 <a href="#">JohnDoe</a> says : <i className="pull-right"><a href="#"><small>Reply</small></a></i></p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Etiam a sapien odio, sit amet
                                </p>
                            </div>
                            <ul className="comments">
                                <li className="clearfix">
                                    <img src="https://bootdey.com/img/Content/user_3.jpg" className="avatar" alt />
                                    <div className="post-comments">
                                        <p className="meta">Dec 20, 2014 <a href="#">JohnDoe</a> says : <i className="pull-right"><a href="#"><small>Reply</small></a></i></p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Etiam a sapien odio, sit amet
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>


                <div>
                    <PostComment />
                </div>
            </div>

        </>
    )
}
export default Comment