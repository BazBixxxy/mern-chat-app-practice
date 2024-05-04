import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

// t wow I wonder how better comment works

export const signup = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "passwords dont match" });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ error: "email already exists" });
    }

    // hash password
    // // the password is normally hashed to 10 normally and the higher the number the longer it takes
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // https://avatar.iran.liara.run/public

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?email=${email}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?email=${email}`;

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    // generate jwt token

    if (newUser) {
      // * pass the token and set their cookie when on creating a new user and then 
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    }
  } catch (error) {
    res.status(500).json({ error: `${error}` });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // * the password is decoded here must pass the empty string
    const isPasswordCorrect = await bcryptjs.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "invalid email or password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (error) {
    res.status(500).json({ loginError: `${error}` });
  }
};

export const logout = (req, res) => {
  // to logout, we just need to delete the current cookie, by setting the maxAge to 0
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ logoutError: `${error}` });
  }
};


