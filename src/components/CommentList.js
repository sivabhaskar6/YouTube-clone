import Comment from "./Comment";



const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
        <Comment data={comment} key={index} />
    ))
}

export default CommentsList;