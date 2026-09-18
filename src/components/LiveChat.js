import ChatMessage from "./ChatMessage";
import {  useDispatch, useSelector } from "react-redux";
import useChatMessages from "../hooks/useChatMessages.js";
import { addMessage } from "../utils/chatSlice.js";
import { useState } from "react";

const LiveChat = () => {
    const [newMessage, setNewMessage] = useState("");
    const chatMessages = useSelector(
        (store) => store.chat.messages
    );

    // API polling
    const dispatch = useDispatch();
    useChatMessages();


    return (
        <div className="w-full h-[500px] rounded-xl border border-gray-300 overflow-hidden bg-white">

            {/* Header */}
            <div className="h-[55px] px-4 flex items-center justify-between border-b border-gray-200">

                <div>
                    <span className="text-lg font-medium">
                        Live chat
                    </span>
                </div>

                <div className="flex items-center gap-4">

                    <button className="text-2xl">
                        ⋮
                    </button>

                    <button className="text-3xl">
                        ×
                    </button>

                </div>
            </div>


            {/* Messages */}
            <div
               
                className="relative h-[390px] overflow-y-auto px-3 py-2 flex flex-col-reverse scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">

                {chatMessages.map((msg, index) => (
                    <ChatMessage
                        key={index}
                        username={msg.username}
                        message={msg.message}
                    />
                ))}

            </div>


            {/* Input */}
            <div className="h-[55px] px-3 flex items-center border-t border-gray-200">

                <input
                    type="text"
                    placeholder="Chat..."
                    className="w-full px-4 py-2 rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-gray-300"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && newMessage.trim() !== "") {
                            dispatch( addMessage({ username: "User", message: newMessage}) );
                            setNewMessage("");
                        }
                    }}
                />

                <button className="ml-2 px-3 py-2 font-semibold text-gray-500" onClick={() => {
                    if (newMessage.trim() !== "") {
                        dispatch(addMessage({ username: "User", message: newMessage }));
                        setNewMessage("")
                    
                }}}>
                    ➤
                </button>

            </div>

        </div>
    );
};

export default LiveChat;