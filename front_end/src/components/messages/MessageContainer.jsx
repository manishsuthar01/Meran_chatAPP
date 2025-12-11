import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
//   const Nochatselected = true;
  const Nochatselected = false;

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {Nochatselected ? (
        <NochatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-[#0b1521] px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className=" font-bold">John doe</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NochatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font font-semibold flex flex-col items-center gap-2">
        <p>Welcome John Doe</p>
        <p>select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
