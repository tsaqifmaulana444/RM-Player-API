// model
const mongoose = require("mongoose")

const PlayersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter The Player Name"],
    },
    nationality: {
      type: String,
      required: [true, "Please Enter The Player Nationality"],
    },
    shirt_number: {
      type: Number,
      required: [true, "Please Enter The Player Shirt Number"],
    },
    previous_club: {
      type: String,
      required: false,
      default: "-"
    },
    picture: {
      type: String,
      required: false,
      default: "-"
    },
  },
  {
    timestamps: true,
  }
// model
  )

// model
module.exports = mongoose.model("Player", PlayersSchema)
