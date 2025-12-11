import Message from "./Message";

const Messages = () => {
  return (
    <div  className="px-4 flex-1 overflow-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}

    >
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};
export default Messages;
