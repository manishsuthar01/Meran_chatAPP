import React, { useEffect } from "react";
import useConversation from "../zustand/useConversation";
import { useSocketContext } from "../context/SocketContex";
import notificationSound from "../assets/sounds/notificationSound.mp3";

const useListenMessages = () => {
  const { messages, setMessages } = useConversation();
  const { socket } = useSocketContext();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      console.log("RECEIVED MESSAGE:", newMessage);
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages((prev) => [...prev, newMessage]);
    });

    return () => {
      socket.off("newMessage");
    };
  }, [socket, messages]);
};

export default useListenMessages;
