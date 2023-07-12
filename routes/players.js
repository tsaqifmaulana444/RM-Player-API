// routes
const express = require("express")
const Player = require("../models/Player")

const router = express.Router()

// get all data
router.get("/", async (req, res) => {
  try {
    const player = await Player.find()
    res.json(player)
  } catch (e) {
    res.json({ message: e })
  }
})

// post data
router.post("/", async (req, res) => {
  const player = new Player({
    name: req.body.name,
    nationality: req.body.nationality,
    shirt_number: req.body.shirt_number,
    previous_club: req.body.previous_club,
  })
  try {
    const savePlayer = await player.save()
    res.json({
      message: "Success",
      data: savePlayer,
    })
  } catch (e) {
    res.json({ message: e })
  }
})

// get specific data
router.get("/:id", async (req, res) => {
  try {
    const player = await Player.findById(req.params.id)
  } catch (e) {
    res.json({ message: e })
  }
})

// delete data
router.delete("/:id", async (req, res) => {
  try {
    const player = await Player.deleteOne({ _id: req.params.id })
    res.json({ message: `Player Data Successfully Deleted` })
  } catch (e) {
    res.json({ message: e })
  }
})

// edit data
router.put("/:id", async (req, res) => {
  try {
    const player = await Player.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          nationality: req.body.nationality,
          shirt_number: req.body.shirt_number,
          previous_club: req.body.previous_club,
        },
      }
    )
    res.json({ message: `Player ${req.body.name} Data Successfully Updated` })
  } catch (e) {
    res.json({ message: e })
  }
})

module.exports = router
