import CommentsList from "./CommentList";


const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="my-2 p-2  bg-gray-50">
      
      {/* Comment */}
      <div className="flex items-start gap-3">
        <img
          className="h-10 w-10 rounded-full"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user-icon"
        />

        <div>
          <h2 className="font-bold text-sm">{name}</h2>
          <p className="text-sm text-gray-700">{text}</p>
        </div>
      </div>

      {/* Replies */}
      {replies.length > 0 && (
        <div className="ml-12 border-l-2 border-gray-200 pl-4">
          <CommentsList comments={replies} />
        </div>
      )}

    </div>
  );
};


export default Comment;