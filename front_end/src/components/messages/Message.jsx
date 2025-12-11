const Message = ({ message }) => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://imgs.search.brave.com/eyRY5uaiLGM5frGLLGO6FeKUxOITJRXh-mf56aSPzWY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2hvbWVw/YWdlLWZlYXR1cmUt/Y2FyZC9mb3Rvci0z/ZC1hdmF0YXIuanBn" alt="MessComp" />
        </div>
      </div>

      <div className={`chat-bubble text-white bg-[#101822]`}>hii What is upp</div>
      <div
        className={`chat-footer opacity-50 text-xs flex gap-1 items-center `}
      >
        12:42
      </div>
    </div>
  );
};
export default Message;
