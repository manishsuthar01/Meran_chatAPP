import Conversation from "./Conversation";

const Conversations = () => {
  return (
    <div
      className="py-2 flex flex-col overflow-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};
export default Conversations;
