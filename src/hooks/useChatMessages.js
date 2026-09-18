import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import {  randomMessage } from "../utils/helper";

const useChatMessages = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(
                addMessage(randomMessage())
            );
        }, 1500);

        return () => clearInterval(interval);
    }, [dispatch]);
};

export default useChatMessages;