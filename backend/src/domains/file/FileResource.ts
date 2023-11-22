import { Router } from "express";

const fileRouter = Router();

fileRouter.get('', (req, res) => {
    res.send("ok file get")
});

export default fileRouter;