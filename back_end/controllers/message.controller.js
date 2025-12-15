const User = require("../model/user.model");
const Message = require("../model/message.model");
const Conversation = require("../model/conversation.model");
const { getReceiverSocket } = require("../sockte/socket");
const { server, app, io } = require("../sockte/socket");

async function sendMessage(req, res) {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // SOCKET IO FUNCTIONALITY WILL GO HERE
    const receiverSocket = getReceiverSocket(receiverId.toString());
    if (receiverSocket) {
      io.to(receiverSocket).emit("newMessage", newMessage);
    }

    // this will run parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    return res.status(201).json(newMessage);
  } catch (error) {
    console.log("error in sendMessage controller ", error.message);
    return res.status(500).json({ error: "internal server error!" });
  }
}

async function receiveMessage(req, res) {
  // return res.send("you are ready to get the message");
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); // populate will replace the message id with actuall message

    if (!conversation) {
      return res.status(200).json([]);
    }
    const messages = conversation.messages;

    return res.status(200).json(messages);
  } catch (error) {
    console.log("error in receiverMessage controller ", error.message);
    return res.status(500).json({ error: "internal server error!" });
  }
}

module.exports = {
  sendMessage,
  receiveMessage,
};

// participants : {$all:[senderId,receiverId]}
// Find a conversation where senderId is inside the participants array
// ✔ AND receiverId is also inside the same array

// Only if both are present → it returns the conversation.
