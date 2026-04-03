import jwt from "jsonwebtoken";

const JWT_SECRET = "secret123";

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ error: "No token" });

    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;

    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};