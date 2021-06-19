import Router from "express";
const router = Router();
router.get("/", (req, res, next) => {
  res.send("Welcome to portfolio server");
});
export default router;
