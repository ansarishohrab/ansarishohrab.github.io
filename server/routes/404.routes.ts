import Router from "express";
const router = Router();
router.use((req, res, next) => {
  res.send("<h1>Page not found!");
});
export default router;
