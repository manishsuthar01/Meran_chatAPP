const mongoose = require("mongoose");
const User = require("./user.model");

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    message: {
      type: String,
      require: true,
    },
  },
  { timestamps: true } // createAt , updatedAt
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
