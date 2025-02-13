import jwt from "jsonwebtoken"

const authMiddleWare = (req, res, next) => {

    const { token } = req.headers;

    if (!token) {
        return res.json({ success: false, message: "Login to Continue" });
    }
    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        console.log(id)
        req.body.userId = id;
        next();
    }
    catch (err) {
        console.log(err)
        res.json({ success: false, message: "Error while Authiticating" })
    }
}
export default authMiddleWare;