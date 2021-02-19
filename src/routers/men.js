const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");





//Handling POST request
router.post("/mens",async(req,res)=>{
    try {
        const addingMensRecord = new MensRanking(req.body);
        console.log(req.body);
        const insertingMensData = await addingMensRecord.save();
        res.status(201).send(insertingMensData);
    } catch (e) {
        res.status(400).send(e);
    }
})

//Handling GET request
router.get("/mens",async(req,res)=>{
    try {
            const getMens = await MensRanking.find({}).sort({"ranking":1});
            res.send(getMens);
    } catch (e) {
            res.status(400).send(e);
    }
})

//Handling GET request for INDIVIDUAL
router.get("/mens/:id",async(req,res)=>{
    try {
            const _id = req.params.id;
            const getMen = await MensRanking.findById(_id);
            res.send(getMen);
    } catch (e) {
            res.status(400).send(e);
    }
})

//Handling PATCH request for INDIVIDUAL by ID
router.patch("/mens/:id",async(req,res)=>{
    try {
            const _id = req.params.id;
            const getMen = await MensRanking.findByIdAndUpdate(_id,req.body,{new:true});
            res.send(getMen);
    } catch (e) {
            res.status(500).send(e);
    }
})

//Handling DELETE request for INDIVIDUAL by ID
router.delete("/mens/:id",async(req,res)=>{
    try {
            const getMen = await MensRanking.findByIdAndUpdate(req.params.id);
            res.send(getMen);
    } catch (e) {
            res.status(500).send(e);
    }
})


module.exports = router;
