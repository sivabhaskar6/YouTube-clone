import { FaRegUserCircle } from "react-icons/fa";

const ChatMessage = ({ username, message}) =>{


    return(
        <div className="flex items-center gap-1 hover:bg-gray-200 cursor-pointer pl-3 mb-1 rounded-lg ">
            <div className="w-6 h-6 flex items-center justify-center">
                <button className="rounded-full">
                    <FaRegUserCircle size={30} />
                </button>
            </div>
            <div className="p-2 rounded-lg flex gap-2">
                <p className="text-sm font-semibold text-slate-700">@{username}</p>
                <p className="text-sm">{message}</p>
            </div>
        </div>
    )
}

export default ChatMessage;