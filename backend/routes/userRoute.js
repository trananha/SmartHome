import express from "express";
import User from "../models/userModel.js";
import  {getToken}  from "../util.js";

const router = express.Router();

router.post("/signin", async (req,res) => {
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    console.log( req.body.email)
    if (signinUser) {
        res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser)
        })
        console.log('dung roi');
    }
    else {
        res.status(401).send({msg: 'Invalid Email or Password!'})
    }
})

router.get("/createAdmin", async (req,res) =>{
    try {
        const user = new User({
            name: 'Hung',
            email: 'tranchihung1472001@gmail.com',
            password: '123456',
            isAdmin: true
        });

        const newUser = await user.save();
        res.send(newUser);
    } catch (error) {
        res.send({msg: error.message});
    }
});

export default router;