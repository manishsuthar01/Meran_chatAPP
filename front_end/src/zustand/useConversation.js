import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),

  messages: [],
  setMessages: (updater) =>
    set((state) => ({
      messages:
        typeof updater === "function"
          ? updater(state.messages) // ✅ execute function
          : updater,
    })),
}));

export default useConversation;
