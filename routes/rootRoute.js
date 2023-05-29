import { Router } from "express";

const rootRoute = Router();

rootRoute
   .get('/', (req, res) => {
   res.redirect("/login")
})

export default rootRoute;

