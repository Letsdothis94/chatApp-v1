import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords must match"});
        }

        const user = await User.findOne({ username });

        if(user) {
            return res.status(400).json({ error: "Username already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const maleProfilePic = `https://avatar.iran.liara.run/public/boy`;
        const femaleProfilePic = `https://avatar.iran.liara.run/public/girl`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? maleProfilePic : femaleProfilePic
        });

        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            gender: newUser.gender,
            profilePic: newUser.profilePic
        });

    } catch (error) {
        console.log("Error in signup controller ", error.message);
        res.status(500).json({ error: "Internal Server Error"});
    }
    console.log("signup");
}

export const login = (req, res) => {

}

export const logout = (req, res) => {

}
