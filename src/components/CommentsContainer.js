import commentsListData from "../utils/commentsListData";
import CommentsList from "./CommentList";




const CommentsContainer = () => {
    return (
        <div>
            <div className="ml-0 px-2 py-2">
            <h1 className="font-bold text-lg">Comments :</h1>
            </div>
            <div>
                <CommentsList comments={commentsListData} />
            </div>
        </div>
        

    )
}

export default CommentsContainer;